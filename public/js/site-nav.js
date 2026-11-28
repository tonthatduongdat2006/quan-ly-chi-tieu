/* Menu điều hướng DÙNG CHUNG cho 4 trang: index.html, history.html, about.html, contact.html.
 * Mỗi trang chỉ cần:
 *   <header id="site-nav" class="h-24 sm:h-16 shrink-0 ..."></header>
 *   <script src="/js/site-nav.js"></script>
 * Mọi kích thước (chiều cao, logo, cỡ chữ, khoảng cách, padding) nằm ở một chỗ duy nhất là file này
 * và các class Tailwind bên dưới, nên 4 trang luôn giống nhau.
 * Chiều cao menu: mobile 96px (2 hàng: logo / các mục), từ 640px trở lên 64px (1 hàng). */
(function () {
  var LINKS = [
    { href: '/index.html', label: 'Trang chủ', match: ['/', '/index.html', '/index'] },
    { href: '/history.html', label: 'Lịch sử', match: ['/history.html', '/history'] },
    { href: '/about.html', label: 'Giới thiệu', match: ['/about.html', '/about'] },
    { href: '/contact.html', label: 'Liên hệ', match: ['/contact.html', '/contact'] },
  ];
  // Bộ class chung — đổi ở đây là cả 4 trang đổi theo
  var NAV = 'mx-auto box-border flex h-full w-full max-w-5xl flex-col justify-center gap-1 px-4 py-2 sm:flex-row sm:items-center sm:justify-between sm:gap-3 sm:py-0';
  var LOGO = 'm-0 flex h-10 shrink-0 items-center self-start sm:self-auto whitespace-nowrap text-lg font-bold leading-7 text-emerald-700 no-underline';
  var LIST = 'm-0 flex list-none items-center gap-1 overflow-x-auto p-0';
  var ITEM = 'box-border block h-9 whitespace-nowrap rounded-lg px-3 py-2 text-sm font-medium leading-5 no-underline';
  var ON = ' bg-emerald-50 text-emerald-700';
  var OFF = ' text-slate-600 hover:bg-slate-100 hover:text-emerald-700';

  var host = document.getElementById('site-nav');
  if (!host) return;
  var path = location.pathname.replace(/\/+$/, '') || '/';
  var items = LINKS.map(function (l) {
    var on = l.match.indexOf(path) !== -1;
    return '<li class="m-0 p-0"><a href="' + l.href + '" class="' + ITEM + (on ? ON : OFF) + '"' + (on ? ' aria-current="page"' : '') + '>' + l.label + '</a></li>';
  }).join('');
  host.innerHTML =
    '<nav aria-label="Điều hướng chính" class="' + NAV + '">' +
    '<a href="/index.html" class="' + LOGO + '">AI Smart Expense</a>' +
    '<ul class="' + LIST + '">' + items + '</ul>' +
    '</nav>';
})();
