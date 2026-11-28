/* Nhấn Enter để chuyển sang ô nhập tiếp theo — dùng chung cho cả 4 trang.
 *
 * - Chỉ xử lý Enter (không kèm Shift/Ctrl/Alt/Meta) khi đang ở ô nhập một dòng
 *   (text, email, password, search, số, ngày...). Không đụng tới textarea, nút bấm, dropdown,
 *   checkbox/radio, ô chọn file.
 * - Ô tiếp theo = ô nhập kế tiếp theo thứ tự từ trên xuống trong CÙNG phạm vi
 *   (form, hộp thoại, hoặc cả trang), bỏ qua ô bị ẩn, disabled, readonly.
 * - Còn ô tiếp theo: chặn Enter (không gửi form) và chuyển focus. Dữ liệu đã nhập giữ nguyên.
 * - Ở ô cuối cùng: KHÔNG can thiệp, giữ hành vi sẵn có (trong form thì Enter gửi form).
 * - Bộ gõ tiếng Việt đang soạn chữ (IME) thì Enter để bộ gõ chốt chữ, không chuyển ô.
 * - Trên mobile: gắn enterkeyhint để bàn phím ảo hiện nút "Tiếp" / "Đi" / "Xong" phù hợp.
 */
(function () {
  var SINGLE_LINE = ['', 'text', 'email', 'password', 'search', 'tel', 'url', 'number', 'date', 'month', 'week', 'time', 'datetime-local'];

  function isSource(el) {
    return !!el && el.tagName === 'INPUT' && SINGLE_LINE.indexOf((el.getAttribute('type') || '').toLowerCase()) !== -1;
  }

  function isTarget(el) {
    if (el.tagName === 'SELECT' || el.tagName === 'TEXTAREA') return true;
    return isSource(el);
  }

  function isUsable(el) {
    if (el.disabled || el.readOnly || el.tabIndex < 0) return false;
    if (el.closest('[hidden], [inert], [aria-hidden="true"]')) return false;
    if (!el.getClientRects().length) return false; // display:none hoặc nằm trong phần tử bị ẩn
    var cs = window.getComputedStyle(el);
    return cs.visibility !== 'hidden' && cs.visibility !== 'collapse';
  }

  function scopeOf(el) {
    return el.form || el.closest('form, [role="dialog"], [data-enter-scope]') || document.body;
  }

  function nextField(el) {
    var all = scopeOf(el).querySelectorAll('input, select, textarea');
    var seen = false;
    for (var i = 0; i < all.length; i++) {
      var f = all[i];
      if (f === el) { seen = true; continue; }
      if (seen && isTarget(f) && isUsable(f)) return f;
    }
    return null;
  }

  document.addEventListener('keydown', function (e) {
    if (e.key !== 'Enter' || e.shiftKey || e.ctrlKey || e.altKey || e.metaKey) return;
    if (e.isComposing || e.keyCode === 229) return; // bộ gõ IME đang soạn chữ
    if (e.defaultPrevented) return; // ô đã tự xử lý Enter
    var el = e.target;
    if (!isSource(el)) return;
    var next = nextField(el);
    if (!next) return; // ô cuối: giữ hành vi hiện tại
    e.preventDefault(); // không gửi form khi vẫn còn ô tiếp theo
    next.focus();
  });

  // Gợi ý phím Enter trên bàn phím ảo (mobile)
  document.addEventListener('focusin', function (e) {
    var el = e.target;
    if (!isSource(el)) return;
    el.setAttribute('enterkeyhint', nextField(el) ? 'next' : (el.form ? 'go' : 'done'));
  });
})();
