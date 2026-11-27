'use strict';
/**
 * Chạy: npm test
 * Khởi động backend THẬT (child process) và trỏ AI_BASE_URL vào một máy chủ AI giả lập cục bộ,
 * nên không tốn tiền và không cần API key. Máy chủ giả lập chỉ nằm trong bộ test này,
 * không có trong server.js: backend thật không bao giờ tự tạo kết quả giả.
 */
const test = require('node:test');
const assert = require('node:assert/strict');
const http = require('node:http');
const path = require('node:path');
const { spawn } = require('node:child_process');

const KEY = 'sk-test-SECRET-123';
const CTX = { today: '2026-11-08', cats: { expense: ['Ăn uống', 'Di chuyển', 'Khác'], income: ['Lương', 'Khác'] } };
const PNG = 'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==';

/* ----- AI giả lập (tầng upstream) ----- */
const up = { mode: 'ok', out: null, last: null, flavor: 'anthropic' };
const FAIL = {
  quota: [400, { type: 'error', error: { type: 'invalid_request_error', message: 'Your credit balance is too low to access the API.' } }],
  rate: [429, { type: 'error', error: { type: 'rate_limit_error', message: 'SECRET-UPSTREAM-DETAIL' } }],
  down: [529, { type: 'error', error: { type: 'overloaded_error' } }],
  auth: [401, { type: 'error', error: { type: 'authentication_error' } }],
};
const mock = http.createServer((req, res) => {
  let b = ''; req.on('data', c => (b += c));
  req.on('end', () => {
    up.last = { url: req.url, headers: req.headers, body: JSON.parse(b || '{}') };
    if (up.mode === 'hang') return; // không bao giờ trả lời
    if (FAIL[up.mode]) { res.writeHead(FAIL[up.mode][0], { 'content-type': 'application/json' }); return res.end(JSON.stringify(FAIL[up.mode][1])); }
    let body;
    if (up.mode === 'garbage') body = up.flavor === 'openai' ? { choices: [{ message: { content: 'không phải JSON' } }] } : { content: [{ type: 'text', text: 'xin chào' }] };
    else if (up.flavor === 'openai') body = { choices: [{ message: { content: JSON.stringify(up.out) } }] };
    else body = { content: [{ type: 'tool_use', name: up.last.body.tool_choice.name, input: up.out }] };
    res.writeHead(200, { 'content-type': 'application/json' }); res.end(JSON.stringify(body));
  });
});
let mockUrl;
test.before(async () => { await new Promise(r => mock.listen(0, '127.0.0.1', r)); mockUrl = `http://127.0.0.1:${mock.address().port}`; });
test.after(() => { mock.closeAllConnections(); mock.close(); });
test.beforeEach(() => { up.mode = 'ok'; up.out = null; up.last = null; up.flavor = 'anthropic'; });

/* ----- Khởi động backend thật ----- */
const BASE_ENV = { AI_PROVIDER: 'anthropic', AI_API_KEY: KEY, AI_BASE_URL: '', AI_MODEL_TEXT: '', AI_MODEL_VISION: '', AI_TIMEOUT_MS: '5000', ALLOWED_ORIGINS: '', RATE_LIMIT_PER_MIN: '100', DAILY_REQUEST_LIMIT: '1000', TRUST_PROXY_HOPS: '0', SERVE_FRONTEND: 'true' };
const servers = [];
function start(extra = {}) {
  return new Promise((resolve, reject) => {
    const p = spawn(process.execPath, [path.join(__dirname, '..', 'server.js')], { env: { PATH: process.env.PATH, PORT: '0', HOST: '127.0.0.1', ...BASE_ENV, AI_BASE_URL: mockUrl, ...extra } });
    servers.push(p);
    let out = '';
    const onData = d => { out += d; const m = out.match(/listening on port (\d+)/); if (m) resolve(`http://127.0.0.1:${m[1]}`); };
    p.stdout.on('data', onData); p.stderr.on('data', d => (out += d));
    p.on('exit', c => reject(new Error(`server thoát (${c}): ${out}`)));
  });
}
test.after(() => servers.forEach(p => p.kill()));
const post = async (base, p, body, headers = {}) => {
  const r = await fetch(base + p, { method: 'POST', headers: { 'content-type': 'application/json', ...headers }, body: typeof body === 'string' ? body : JSON.stringify(body) });
  return { status: r.status, headers: r.headers, json: await r.json().catch(() => null) };
};

/* ----- Tin nhắn ----- */
test('parse-text: trích xuất, chuẩn hóa, và không lộ API key', async () => {
  const base = await start();
  up.out = { items: [
    { type: 'expense', amount: 45000, cat: 'Ăn uống', note: '  Phở  bò ', date: '2026-11-08' },
    { type: 'expense', amount: 25000, cat: 'Cà phê', note: 'Cà phê', date: '2026-11-07' }, // danh mục lạ -> Khác
    { type: 'income', amount: null, cat: 'Lương', note: '', date: '2099-01-01' },          // không số tiền, ngày tương lai
    { type: 'expense', amount: '30000', cat: 'Di chuyển', note: 'Grab', date: '2026-02-30' }, // ngày vô lý, số tiền dạng chuỗi
  ], reply: 'Đã tạo 4 bản nháp' };
  const r = await post(base, '/api/ai/parse-text', { text: 'ăn phở 45k, cà phê 25k hôm qua', ctx: CTX });
  assert.equal(r.status, 200);
  assert.deepEqual(r.json.items[0], { type: 'expense', amount: 45000, cat: 'Ăn uống', note: 'Phở bò', date: '2026-11-08' });
  assert.equal(r.json.items[1].cat, 'Khác');
  assert.equal(r.json.items[2].amount, null);
  assert.equal(r.json.items[2].date, null);
  assert.deepEqual([r.json.items[3].amount, r.json.items[3].date], [30000, null]);
  assert.equal(r.json.reply, 'Đã tạo 4 bản nháp');
  // gọi đúng upstream, key đi bằng header, ép schema, chống tiêm lệnh
  assert.equal(up.last.url, '/v1/messages');
  assert.equal(up.last.headers['x-api-key'], KEY);
  assert.equal(up.last.body.model, 'claude-haiku-5-5');
  assert.deepEqual(up.last.body.tool_choice, { type: 'tool', name: 'record_transactions' });
  assert.match(up.last.body.messages[0].content, /<tin_nhan>/);
  assert.ok(!JSON.stringify(r.json).includes(KEY));
  assert.ok(!JSON.stringify([...r.headers]).includes(KEY));
});

test('parse-text: dữ liệu vào sai bị từ chối trước khi tốn tiền gọi AI', async () => {
  const base = await start();
  const cases = [
    [{ text: '', ctx: CTX }, 400], [{ text: 'x'.repeat(501), ctx: CTX }, 400],
    [{ text: 'a', ctx: { ...CTX, today: '2026-13-45' } }, 400], [{ text: 'a', ctx: { today: CTX.today } }, 400],
  ];
  for (const [body, status] of cases) assert.equal((await post(base, '/api/ai/parse-text', body)).status, status);
  assert.equal((await post(base, '/api/ai/parse-text', '{hỏng', {})).status, 400);
  assert.equal((await post(base, '/api/ai/parse-text', { text: 'a', ctx: CTX }, { 'content-type': 'text/plain' })).status, 415);
  assert.equal(up.last, null, 'không được gọi AI với dữ liệu sai');
});

test('khi AI trả JSON hỏng hoặc sai cấu trúc -> lỗi rõ ràng, không bịa kết quả', async () => {
  const base = await start();
  up.mode = 'garbage';
  let r = await post(base, '/api/ai/parse-text', { text: 'ăn phở 45k', ctx: CTX });
  assert.deepEqual([r.status, r.json.error.code], [502, 'ai_invalid_output']);
  up.mode = 'ok'; up.out = { không_có_items: true };
  r = await post(base, '/api/ai/parse-text', { text: 'ăn phở 45k', ctx: CTX });
  assert.deepEqual([r.status, r.json.error.code], [502, 'ai_invalid_output']);
});

/* ----- Hóa đơn ----- */
test('parse-receipt: đọc ảnh, dùng model vision, trả dữ liệu có cấu trúc', async () => {
  const base = await start();
  up.out = { readable: true, merchant: 'Highlands Coffee', type: 'expense', amount: 89000, cat: 'Ăn uống', note: '', date: '2026-11-07' };
  const r = await post(base, '/api/ai/parse-receipt', { image: PNG, mimeType: 'image/jpeg', ctx: CTX });
  assert.equal(r.status, 200);
  assert.deepEqual(r.json, { readable: true, merchant: 'Highlands Coffee', type: 'expense', amount: 89000, cat: 'Ăn uống', note: 'Highlands Coffee', date: '2026-11-07' });
  const img = up.last.body.messages[0].content[0];
  assert.equal(img.type, 'image');
  assert.equal(img.source.media_type, 'image/png', 'loại ảnh lấy từ nội dung file, không tin client');
  assert.equal(up.last.body.model, 'claude-sonnet-5-5');
});

test('parse-receipt: ảnh không đọc được / không phải ảnh / quá lớn', async () => {
  const base = await start();
  up.out = { readable: false, merchant: null, type: 'expense', amount: null, cat: 'Khác', note: '', date: null };
  let r = await post(base, '/api/ai/parse-receipt', { image: PNG, ctx: CTX });
  assert.deepEqual([r.status, r.json.error.code], [422, 'receipt_unreadable']);
  up.out = { readable: true, merchant: 'X', type: 'expense', amount: null, cat: 'Khác', note: '', date: null }; // nói đọc được nhưng không có tổng tiền
  r = await post(base, '/api/ai/parse-receipt', { image: PNG, ctx: CTX });
  assert.deepEqual([r.status, r.json.error.code], [422, 'receipt_unreadable']);
  up.last = null;
  r = await post(base, '/api/ai/parse-receipt', { image: Buffer.from('đây không phải là ảnh đâu nhé').toString('base64'), ctx: CTX });
  assert.deepEqual([r.status, r.json.error.code], [415, 'bad_image']);
  r = await post(base, '/api/ai/parse-receipt', { image: Buffer.alloc(5.5 * 1024 * 1024, 0xff).toString('base64'), ctx: CTX });
  assert.equal(r.status, 413);
  assert.equal(up.last, null, 'ảnh sai không được gửi lên AI');
});

/* ----- Lỗi từ dịch vụ AI ----- */
test('ánh xạ lỗi của dịch vụ AI: hết hạn mức, quá tải, sập, sai key, quá thời gian', async () => {
  const base = await start({ AI_TIMEOUT_MS: '400' });
  const expect = { quota: [503, 'ai_quota'], rate: [429, 'ai_rate_limited'], down: [502, 'ai_unavailable'], auth: [503, 'ai_auth'], hang: [504, 'ai_timeout'] };
  for (const [mode, [status, code]] of Object.entries(expect)) {
    up.mode = mode;
    const r = await post(base, '/api/ai/parse-text', { text: 'ăn phở 45k', ctx: CTX });
    assert.deepEqual([r.status, r.json.error.code], [status, code], mode);
    assert.ok(!JSON.stringify(r.json).includes('SECRET-UPSTREAM-DETAIL'), 'không lộ chi tiết lỗi của upstream');
  }
  // AI không kết nối được hẳn
  const dead = await start({ AI_BASE_URL: 'http://127.0.0.1:1' });
  const r = await post(dead, '/api/ai/parse-text', { text: 'ăn phở 45k', ctx: CTX });
  assert.deepEqual([r.status, r.json.error.code], [502, 'ai_unavailable']);
});

test('chưa cấu hình API key -> báo rõ, không giả lập', async () => {
  const base = await start({ AI_API_KEY: '' });
  assert.deepEqual((await (await fetch(base + '/api/health')).json()), { ok: true, ai: { configured: false } });
  const r = await post(base, '/api/ai/parse-text', { text: 'ăn phở 45k', ctx: CTX });
  assert.deepEqual([r.status, r.json.error.code], [503, 'ai_not_configured']);
});

/* ----- Provider OpenAI-compatible ----- */
test('provider openai: gọi /chat/completions bằng Bearer và đọc JSON mode', async () => {
  const base = await start({ AI_PROVIDER: 'openai' });
  up.flavor = 'openai';
  up.out = { items: [{ type: 'income', amount: 12000000, cat: 'Lương', note: 'Lương tháng 11', date: '2026-11-05' }], reply: 'ok' };
  const r = await post(base, '/api/ai/parse-text', { text: 'nhận lương 12 triệu', ctx: CTX });
  assert.equal(r.status, 200);
  assert.equal(r.json.items[0].amount, 12000000);
  assert.equal(up.last.url, '/chat/completions');
  assert.equal(up.last.headers.authorization, `Bearer ${KEY}`);
  assert.deepEqual(up.last.body.response_format, { type: 'json_object' });
  up.mode = 'garbage';
  const g = await post(base, '/api/ai/parse-text', { text: 'nhận lương 12 triệu', ctx: CTX });
  assert.equal(g.json.error.code, 'ai_invalid_output');
});

/* ----- Bảo vệ ----- */
test('giới hạn tần suất theo IP và giới hạn theo ngày', async () => {
  const a = await start({ RATE_LIMIT_PER_MIN: '3' });
  for (let i = 0; i < 3; i++) assert.equal((await post(a, '/api/ai/parse-text', { text: '', ctx: CTX })).status, 400);
  const r = await post(a, '/api/ai/parse-text', { text: 'a', ctx: CTX });
  assert.deepEqual([r.status, r.json.error.code], [429, 'rate_limited']);
  assert.ok(r.headers.get('retry-after'));
  const b = await start({ DAILY_REQUEST_LIMIT: '1' });
  up.out = { items: [], reply: 'Không thấy giao dịch' };
  assert.equal((await post(b, '/api/ai/parse-text', { text: 'chào', ctx: CTX })).status, 200);
  const d = await post(b, '/api/ai/parse-text', { text: 'chào', ctx: CTX });
  assert.deepEqual([d.status, d.json.error.code], [429, 'daily_limit']);
});

test('CORS: chỉ origin trong danh sách được phép', async () => {
  const base = await start({ ALLOWED_ORIGINS: 'https://app.example.com/' });
  up.out = { items: [], reply: 'x' };
  const evil = await post(base, '/api/ai/parse-text', { text: 'a', ctx: CTX }, { origin: 'https://evil.example' });
  assert.deepEqual([evil.status, evil.json.error.code], [403, 'origin_not_allowed']);
  const ok = await post(base, '/api/ai/parse-text', { text: 'a', ctx: CTX }, { origin: 'https://app.example.com' });
  assert.equal(ok.status, 200);
  assert.equal(ok.headers.get('access-control-allow-origin'), 'https://app.example.com');
  const pre = await fetch(base + '/api/ai/parse-text', { method: 'OPTIONS', headers: { origin: 'https://app.example.com', 'access-control-request-method': 'POST' } });
  assert.equal(pre.status, 204);
});

test('phục vụ giao diện, có CSP, không lộ key, chặn đường dẫn ngoài public/', async () => {
  const base = await start();
  const r = await fetch(base + '/');
  const html = await r.text();
  assert.equal(r.status, 200);
  assert.match(r.headers.get('content-security-policy'), /default-src 'self'/);
  assert.match(html, /<meta name="api-base"/);
  assert.ok(!html.includes(KEY) && !/window\.claude|AI_ENDPOINT/.test(html));
  for (const p of ['/server.js', '/%2e%2e/server.js', '/.env', '/api/khong-co']) assert.equal((await fetch(base + p)).status, 404, p);
  assert.equal((await fetch(base + '/api/ai/parse-text')).status, 405);
});

test('giao diện: CSS nằm trong <style>, đủ biến :root và @keyframes, giữ Google Analytics', () => {
  const html = require('node:fs').readFileSync(path.join(__dirname, '..', 'public', 'index.html'), 'utf8');
  const headEnd = html.indexOf('</head>');
  assert.ok(headEnd > 0, 'thiếu </head>');
  const head = html.slice(0, headEnd);
  assert.equal((head.match(/<style>/g) || []).length, 1, 'phải có đúng một thẻ <style> trong <head>');
  assert.equal((head.match(/<\/style>/g) || []).length, 1, 'phải có đúng một thẻ </style> trong <head>');
  const css = head.slice(head.indexOf('<style>') + 7, head.indexOf('</style>'));
  assert.ok(css.length > 0, 'thẻ <style> không được rỗng');

  // Không có quy tắc CSS nằm ngoài <style>/<script> (nếu có, trình duyệt sẽ in ra như chữ thường)
  const outside = head.replace(/<style>[\s\S]*?<\/style>/g, '').replace(/<script\b[\s\S]*?<\/script>/g, '').replace(/<!--[\s\S]*?-->/g, '');
  assert.ok(!/[.#:@*a-z][^<>]*\{[^<>]*\}/i.test(outside.replace(/<[^>]*>/g, '')), 'có CSS nằm ngoài thẻ <style>');

  // Mọi biến var(--x) được dùng đều phải được định nghĩa trong :root
  const rootM = css.match(/:root\{([^}]*)\}/);
  assert.ok(rootM, 'thiếu khối :root');
  const defined = new Set([...rootM[1].matchAll(/--([\w-]+)\s*:/g)].map(m => m[1]));
  const used = new Set([...html.matchAll(/var\(--([\w-]+)/g)].map(m => m[1]));
  for (const v of used) assert.ok(defined.has(v), `biến --${v} được dùng nhưng chưa định nghĩa trong :root`);

  // Mọi animation đều có @keyframes tương ứng
  const frames = new Set([...css.matchAll(/@keyframes\s+([\w-]+)/g)].map(m => m[1]));
  const anims = new Set([...html.matchAll(/animation:\s*([\w-]+)/g)].map(m => m[1]));
  for (const a of anims) assert.ok(frames.has(a), `animation "${a}" chưa có @keyframes`);

  for (const sel of ['body{', '#root{', 'html,body{']) assert.ok(css.includes(sel), `thiếu CSS cho ${sel}`);
  assert.match(css, /@media\(min-width:768px\)/, 'thiếu media query responsive');
  assert.match(head, /googletagmanager\.com\/gtag\/js\?id=G-L4X1JXCPK0/, 'mất thẻ Google Analytics');
  assert.match(head, /gtag\('config', 'G-L4X1JXCPK0'\)/, 'mất cấu hình Google Analytics');
});

/* ----- G1.1: nền dữ liệu frontend (chạy thật khối data-helpers trong index.html) ----- */
function loadDataHelpers() {
  const html = require('node:fs').readFileSync(path.join(__dirname, '..', 'public', 'index.html'), 'utf8');
  const pick = re => { const m = html.match(re); assert.ok(m, `không tìm thấy ${re}`); return m[0]; };
  const code = [pick(/^const vnd=.*$/m), pick(/^const dk=.*$/m), pick(/\/\* data-helpers:start[\s\S]*?\/\* data-helpers:end \*\//)].join('\n');
  const H = require('node:vm').runInNewContext(`${code}\n;({empty,norm,spent,spent2,bst,jarTotal,avail})`, {});
  const plain = v => JSON.parse(JSON.stringify(v)); // so sánh giữa 2 context của vm
  return { H, html, plain };
}

test('G1.1 norm(): dữ liệu localStorage cũ được bổ sung trường mới, không mất dữ liệu', () => {
  const { H, html, plain } = loadDataHelpers();
  const SHAPE = { initialBalance: null, txs: [], budgets: [], jars: [], cats: { expense: [], income: [] } };
  assert.deepEqual(plain(H.empty()), SHAPE);
  assert.notEqual(H.empty().txs, H.empty().txs, 'empty() phải tạo mảng mới mỗi lần');

  // Dữ liệu đúng dạng đang lưu ở bản hiện tại (chỉ có initialBalance + txs)
  const tx = { id: 'a1', op: 'o1', type: 'expense', cat: 'Ăn uống', amount: 45000, note: 'Phở', date: '2026-11-20', ts: 1 };
  const cur = { initialBalance: 500000, txs: [tx] };
  const before = JSON.stringify(cur);
  const n = H.norm(cur);
  assert.equal(JSON.stringify(cur), before, 'norm() không được sửa object gốc');
  assert.deepEqual(plain(n), { ...SHAPE, initialBalance: 500000, txs: [tx] });

  // Giữ nguyên trường lạ và dữ liệu đã có; số dư ban đầu 0 vẫn là 0
  const kept = H.norm({ initialBalance: 0, txs: [], budgets: [{ cat: 'Ăn uống', limit: 1000000 }], cats: { expense: ['Thú cưng'] }, extra: 'x' });
  assert.equal(kept.initialBalance, 0);
  assert.equal(kept.extra, 'x');
  assert.deepEqual(plain(kept.budgets), [{ cat: 'Ăn uống', limit: 1000000 }]);
  assert.deepEqual(plain(kept.cats), { expense: ['Thú cưng'], income: [] });

  // Dữ liệu hỏng / thiếu không làm sập ứng dụng
  for (const bad of [undefined, null, 'abc', 42, { txs: 'x', budgets: null, jars: {}, cats: 'y', initialBalance: '500' }])
    assert.deepEqual(plain(H.norm(bad)), SHAPE, `norm(${JSON.stringify(bad)})`);

  // App dùng norm khi đọc/ghi, giữ khóa localStorage, không có dữ liệu mẫu
  assert.match(html, /const d=user\?norm\(db\.data\[user\.email\]\):null/);
  assert.match(html, /fn\(norm\(x\.data\[user\.email\]\)\)/);
  assert.match(html, /const KEY='qlct_group6_v1';/);
  assert.ok(!/\bseed\s*\(/.test(html), 'không được có dữ liệu mẫu seed()');
});

test('G1.1 helper ngân sách, thống kê và số dư khả dụng', () => {
  const { H } = loadDataHelpers();
  const T = (type, cat, amount, date) => ({ type, cat, amount, date });
  const txs = [T('expense', 'Ăn uống', 300000, '2026-11-02'), T('expense', 'Ăn uống', 500000, '2026-11-20'), T('expense', 'Ăn uống', 90000, '2026-10-30'),
    T('expense', 'Di chuyển', 60000, '2026-11-05'), T('income', 'Lương', 2000000, '2026-11-01'), T('income', 'Khác', 10000, '2026-11-03')];
  assert.equal(H.spent(txs, 'Ăn uống', '2026-11'), 800000, 'chỉ tính khoản chi đúng danh mục, đúng tháng');
  assert.equal(H.spent(txs, 'Khác', '2026-11'), 0, 'khoản thu không tính vào spent');
  assert.equal(H.spent2(txs, 'income', 'Lương', '2026-11'), 2000000);
  assert.equal(H.spent2(txs, 'expense', 'Ăn uống', '2026-10'), 90000);

  assert.equal(H.bst(790000, 1000000).c, 'var(--p)', '< 80%: bình thường');
  assert.equal(H.bst(800000, 1000000).c, 'var(--o)', '>= 80%: sắp hết');
  assert.equal(H.bst(1000000, 1000000).c, 'var(--o)', '= 100%: chưa vượt');
  const over = H.bst(1100000, 1000000);
  assert.equal(over.c, 'var(--r)');
  assert.equal(over.l, '⚠ Vượt 100.000 đ');

  // Số dư khả dụng = ban đầu + thu − chi − tiền trong hũ
  const d = { initialBalance: 1000000, txs: [T('income', 'Lương', 200000, '2026-11-01'), T('expense', 'Ăn uống', 300000, '2026-11-02')], jars: [{ saved: 100000 }, { saved: 50000 }] };
  assert.equal(H.jarTotal(d), 150000);
  assert.equal(H.avail(d), 750000);
  assert.equal(H.avail(H.norm({ txs: d.txs })), -100000, 'chưa đặt số dư ban đầu thì tính là 0');
  assert.equal(H.avail(H.empty()), 0);
});
