/* Giao diện sáng/tối dùng chung cho 4 trang.
 * Nạp trong <head> (không defer) để áp dụng màu TRƯỚC khi trang hiển thị, tránh nháy sáng.
 * Lựa chọn lưu ở localStorage khoá riêng 'qlct_theme' (không đụng dữ liệu tài khoản 'qlct_group6_v1').
 * Mặc định: sáng (giữ nguyên giao diện cũ).
 * API: window.QLCTTheme.get() / set('light'|'dark') / toggle(); sự kiện window 'qlct-theme' khi đổi. */
(function () {
  var KEY = 'qlct_theme';
  function get() {
    try { return localStorage.getItem(KEY) === 'dark' ? 'dark' : 'light'; } catch (e) { return 'light'; }
  }
  function apply(t) {
    var root = document.documentElement;
    if (t === 'dark') root.classList.add('dark'); else root.classList.remove('dark');
    root.style.colorScheme = t; // ô ngày, dropdown, thanh cuộn của trình duyệt theo đúng chế độ
  }
  function notify(t) {
    try { window.dispatchEvent(new CustomEvent('qlct-theme', { detail: t })); } catch (e) { /* trình duyệt cũ */ }
  }
  apply(get());
  window.QLCTTheme = {
    get: get,
    set: function (t) {
      t = t === 'dark' ? 'dark' : 'light';
      try { localStorage.setItem(KEY, t); } catch (e) { /* chế độ riêng tư: vẫn đổi trong phiên */ }
      apply(t); notify(t);
    },
    toggle: function () { this.set(get() === 'dark' ? 'light' : 'dark'); },
  };
  // Đổi ở tab khác thì tab này đổi theo
  window.addEventListener('storage', function (e) { if (e.key === KEY) { apply(get()); notify(get()); } });
})();
