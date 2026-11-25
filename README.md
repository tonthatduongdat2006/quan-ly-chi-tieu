# Quản Lý Chi Tiêu — AI Smart Expense (Backend API)

Ứng dụng chạy độc lập, **không cần Claude Artifact, không cần đăng nhập Claude**. Frontend chỉ gọi backend của bạn; backend giữ API key và gọi AI.

```text
Trình duyệt (public/index.html)                Backend (server.js)                 Dịch vụ AI
  Chat: gửi tin nhắn ───────► POST /api/ai/parse-text ──────┐
  Quét: gửi ảnh (base64) ───► POST /api/ai/parse-receipt ───┼─► gọi AI (API key ở biến môi trường)
  ◄── JSON có cấu trúc ◄────── kiểm tra + chuẩn hóa ◄───────┘
  Bản nháp → người dùng sửa → "Xác nhận lưu" → cập nhật giao dịch, số dư, lịch sử, thống kê, ngân sách
```

## Chạy thử trên máy (3 bước)

Cần Node.js **18 trở lên**. Không cần `npm install` vì backend không dùng thư viện ngoài.

```bash
cp .env.example .env      # Windows: copy .env.example .env
# mở .env, điền AI_API_KEY=...
node server.js            # hoặc: npm start
```

Mở http://localhost:3000. Vào **Trợ lý AI** → nếu thấy thông báo cam, đọc mục [Xử lý sự cố](#xử-lý-sự-cố).

Chạy kiểm thử tự động (không tốn tiền, không cần API key): `npm test`

## API

Mọi lỗi đều có dạng `{ "error": { "code": "...", "message": "..." } }` kèm mã HTTP tương ứng.

| Endpoint | Gửi lên | Trả về |
|---|---|---|
| `GET /api/health` | — | `{ ok, ai: { configured } }` |
| `POST /api/ai/parse-text` | JSON `{ text, ctx }` | `{ items: [{ type, amount, cat, note, date }], reply }` |
| `POST /api/ai/parse-receipt` | JSON `{ image, mimeType, ctx }` (`image` = base64) | `{ readable, merchant, type, amount, cat, note, date }` |

`ctx` = `{ today: "YYYY-MM-DD", cats: { expense: [...], income: [...] } }`: ngày hôm nay theo múi giờ người dùng và danh sách danh mục hiện có.

Quy ước dữ liệu: `type` là `expense` hoặc `income`; `amount` là số nguyên VND, **`null` nếu AI không thấy số tiền** (không đoán); `cat` luôn nằm trong danh mục của người dùng, nếu không khớp thì `Khác`; `date` là `null` nếu không đọc được hoặc là ngày tương lai (giao diện sẽ cảnh báo).

| Mã lỗi | HTTP | Ý nghĩa |
|---|---|---|
| `ai_not_configured` | 503 | Backend chưa có `AI_API_KEY` |
| `ai_auth` | 503 | API key sai hoặc không có quyền |
| `ai_quota` | 503 | Hết hạn mức / hết tiền trên tài khoản AI |
| `ai_rate_limited` | 429 | Dịch vụ AI đang giới hạn tần suất |
| `ai_timeout` / `ai_unavailable` | 504 / 502 | AI không phản hồi / gián đoạn |
| `ai_invalid_output` | 502 | AI trả dữ liệu sai cấu trúc |
| `receipt_unreadable` | 422 | Không đọc được tổng tiền trên hóa đơn |
| `bad_image` / `payload_too_large` | 415 / 413 | Ảnh không hợp lệ / quá 5MB |
| `rate_limited` / `daily_limit` | 429 | Vượt giới hạn của backend (theo IP / theo ngày) |
| `origin_not_allowed` | 403 | Website chưa nằm trong `ALLOWED_ORIGINS` |

Khi AI lỗi, backend **trả lỗi, không bao giờ tạo kết quả thay thế**.

## Biến môi trường

Xem chi tiết và giá trị mặc định trong [`.env.example`](.env.example). Quan trọng nhất:

- `AI_PROVIDER`: `anthropic` (mặc định) hoặc `openai` (OpenAI hoặc dịch vụ tương thích, đặt thêm `AI_BASE_URL`).
- `AI_API_KEY`: khóa API, **chỉ đặt ở backend**.
- `AI_MODEL_TEXT` / `AI_MODEL_VISION`: model cho tin nhắn / cho ảnh hóa đơn. Mặc định dùng model nhỏ, rẻ cho tin nhắn và model mạnh hơn cho ảnh. Hãy kiểm tra tên model còn hiệu lực trong tài khoản của bạn.
- `ALLOWED_ORIGINS`, `RATE_LIMIT_PER_MIN`, `DAILY_REQUEST_LIMIT`, `TRUST_PROXY_HOPS`: bảo vệ chi phí, xem phần Bảo mật.

## Triển khai lên Internet

### Cách A — một dịch vụ duy nhất (khuyến nghị, đơn giản nhất)

Backend phục vụ luôn giao diện trong `public/`, cùng domain nên không cần cấu hình CORS.

1. Đẩy thư mục này lên Git (đã có `.gitignore` chặn `.env`).
2. Tạo Web Service trên hosting chạy Node (Render, Railway, Fly.io, VPS…). Lệnh khởi động: `node server.js`. Hoặc dùng `Dockerfile` đi kèm.
3. Trong phần **Environment Variables** của hosting, đặt `AI_API_KEY`, và `TRUST_PROXY_HOPS=1` (hosting thường có 1 lớp proxy).
4. Hosting cấp domain HTTPS, mở domain đó là dùng được.

### Cách B — frontend và backend ở hai nơi

1. Triển khai backend như trên, đặt `SERVE_FRONTEND=false` (tuỳ chọn) và `ALLOWED_ORIGINS=https://ten-mien-frontend.com`.
2. Đưa `public/index.html` lên hosting tĩnh (Netlify, Vercel, GitHub Pages, Cloudflare Pages…).
3. Trong `index.html`, sửa dòng `<meta name="api-base" content="">` thành địa chỉ backend: `content="https://api.ten-mien-cua-ban.com"`.

> Nếu sai `ALLOWED_ORIGINS`, trình duyệt chặn phản hồi nên giao diện chỉ hiện "Không kết nối được máy chủ AI". Mở DevTools → Console để thấy lỗi CORS.

## Bảo mật — cần đọc trước khi công khai

- **API key** chỉ nằm ở biến môi trường backend. Frontend không chứa key, không chứa prompt. Backend không ghi nội dung tin nhắn/ảnh vào log.
- **Đăng nhập của app hiện chỉ lưu trong `localStorage` của trình duyệt**, backend không thể biết ai đang gọi. Vì vậy ai biết địa chỉ backend đều có thể gọi API AI của bạn và tiêu tiền của bạn. Các lớp bảo vệ đã có: giới hạn theo IP, giới hạn tổng theo ngày, danh sách origin, giới hạn kích thước, kiểm tra loại ảnh. Các giới hạn này nằm trong bộ nhớ nên **reset khi server khởi động lại**, và `ALLOWED_ORIGINS` chỉ chặn trình duyệt, không chặn `curl`.
- Vì vậy hãy **đặt hạn mức chi tiêu hằng tháng ngay trên tài khoản nhà cung cấp AI** (đây mới là chốt chặn cuối cùng). Nếu công khai rộng rãi, nên bổ sung tài khoản thật phía server (JWT/session) rồi yêu cầu đăng nhập ở các API `/api/ai/*`.
- Luôn chạy sau HTTPS. Nếu key từng bị lộ, hãy thu hồi và tạo key mới.

## Xử lý sự cố

| Hiện tượng | Nguyên nhân thường gặp |
|---|---|
| "Không kết nối được máy chủ AI" | Backend chưa chạy / sai `api-base` / sai `ALLOWED_ORIGINS` (xem Console). Hosting gói miễn phí có thể đang "ngủ", đợi ~1 phút rồi chạm vào thông báo để thử lại. |
| "Tính năng AI chưa được cấu hình" | Chưa đặt `AI_API_KEY` trên backend. |
| "Máy chủ AI đang gặp lỗi cấu hình" | API key sai/hết hiệu lực (`ai_auth`). Xem log backend. |
| "AI đã hết hạn mức sử dụng" | Hết credit hoặc chạm hạn mức trên tài khoản AI (`ai_quota`). |
| Báo lỗi model không tồn tại (xem log) | Đổi `AI_MODEL_TEXT` / `AI_MODEL_VISION` sang model bạn có quyền dùng. |
| Hóa đơn "không nhận diện được" | Ảnh mờ, bị che hoặc không thấy tổng tiền. Chụp rõ hơn hoặc nhập thủ công. |

Log của backend (stdout) ghi mỗi request một dòng cùng mã lỗi; chi tiết lỗi từ dịch vụ AI chỉ ghi ở log, không trả cho người dùng.

## Sơ đồ Cơ sở dữ liệu (ERD) & Schema

* **Tệp khởi tạo bảng & dữ liệu mẫu (PostgreSQL):** [`db/schema.sql`](db/schema.sql)

```text
users (id, email, password_hash, display_name, opening_balance)
  ├── 1:N ──► categories (id, user_id, name, type, icon, color)
  ├── 1:N ──► transactions (id, user_id, category_id, type, amount, note, tx_date, source)
  ├── 1:N ──► budgets (id, user_id, category_id, month_year, limit_amount)
  └── 1:N ──► ai_drafts (id, user_id, input_type, raw_input)
                 └── 1:N ──► ai_draft_items (id, draft_id, category_id, amount, note, tx_date, status)
```

## Demo & Ảnh chụp màn hình (Screenshots)

* **Link triển khai (Live Demo):** `https://group6-quanlychitieu-api.vercel.app`
* **Video Demo (YouTube, 720p, ≤ 10 phút):** *(Dán link YouTube Unlisted/Public tại đây)*
* **Ảnh chụp giao diện:** *(Bổ sung ảnh chụp màn hình Tổng quan, AI Nhập nhanh tin nhắn/hóa đơn và Thống kê tại đây)*

## Thành viên & Đánh giá (Nhóm 6)

Khối lượng công việc thực tế của dự án **AI Smart Expense** tập trung vào sự phối hợp giữa **Tôn Thất Dương Đạt** và **claude**, kết hợp góp ý/đề xuất cách xây dựng web từ **Văn Lê Tiến Hùng**; phần của **Nguyễn Hải Đăng** và **Phạm Minh Phúc** để trống để cập nhật khi cần.

| Thành viên | Phụ trách / Vai trò | Đánh giá chung (1 file chung) | Tự đánh giá bản thân |
| :--- | :--- | :--- | :--- |
| **Tôn Thất Dương Đạt** | Phụ trách gần như toàn bộ cùng **claude** (tính năng, API/CSDL, cấu hình triển khai, kiểm tra log, tài liệu) | [Đánh giá chung nhóm (1 file)](doc/BANG-TU-DANH-GIA-4-THANH-VIEN.md) | [Tự đánh giá - Tôn Thất Dương Đạt](doc/TU-DANH-GIA-TON-THAT-DUONG-DAT.md) |
| **Văn Lê Tiến Hùng** | Góp ý và đề xuất cách xây dựng web | *(Dùng chung file bên cạnh)* | *(Để trống)* |
| **Nguyễn Hải Đăng** | *(Để trống)* | *(Dùng chung file bên cạnh)* | *(Để trống)* |
| **Phạm Minh Phúc** | *(Để trống)* | *(Dùng chung file bên cạnh)* | *(Để trống)* |

### Tài liệu bổ sung trong thư mục `doc/`

* [doc/PRD-CHUC-NANG-HE-THONG.md](doc/PRD-CHUC-NANG-HE-THONG.md) — Đặc tả yêu cầu chức năng (PRD) theo mẫu chuẩn.
* [doc/KE-HOACH-VA-PHAN-CONG.md](doc/KE-HOACH-VA-PHAN-CONG.md) — Kế hoạch triển khai theo mốc thời gian, phân công vai trò và quy trình Git.
* [doc/WIREFRAME-KIEN-TRUC-ERD.md](doc/WIREFRAME-KIEN-TRUC-ERD.md) — Thiết kế Wireframe, luồng giao diện, kiến trúc hệ thống và lược đồ CSDL (ERD).
* [doc/TOI-UU-VA-PEER-REVIEW.md](doc/TOI-UU-VA-PEER-REVIEW.md) — Kết quả tối ưu Google Lighthouse, thiết lập logging/tracking và báo cáo UI/UX Peer Review.
* [doc/TU-DANH-GIA-5-SPRINT.md](doc/TU-DANH-GIA-5-SPRINT.md) — Báo cáo tự đánh giá qua 5 sprint (S1–S5).
* [doc/TU-DANH-GIA-TON-THAT-DUONG-DAT.md](doc/TU-DANH-GIA-TON-THAT-DUONG-DAT.md) — Bản tự đánh giá bản thân của Tôn Thất Dương Đạt.
* [doc/BANG-TU-DANH-GIA-4-THANH-VIEN.md](doc/BANG-TU-DANH-GIA-4-THANH-VIEN.md) — Bảng tự đánh giá bản thân cho 4 thành viên.
