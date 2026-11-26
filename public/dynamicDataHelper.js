export function buildQueryParams(filters = {}) {
  const params = new URLSearchParams();

  if (filters.type && filters.type !== "all") {
    params.set("type", String(filters.type).trim());
  }
  if (filters.categoryId && filters.categoryId !== "all") {
    params.set("categoryId", String(filters.categoryId).trim());
  }
  if (filters.monthYear) {
    params.set("monthYear", String(filters.monthYear).trim());
  }
  if (filters.from) {
    params.set("from", String(filters.from).trim());
  }
  if (filters.to) {
    params.set("to", String(filters.to).trim());
  }
  if (filters.q && String(filters.q).trim() !== "") {
    params.set("q", String(filters.q).trim());
  }

  return params.toString();
}

export async function loadFilteredData(endpoint, filters = {}, options = {}) {
  const qs = buildQueryParams(filters);
  const url = qs ? `${endpoint}?${qs}` : endpoint;

  try {
    const res = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        ...(options.token ? { Authorization: `Bearer ${options.token}` } : {}),
      },
    });

    const data = await res.json().catch(() => ({}));

    if (!res.ok) {
      return {
        ok: false,
        items: [],
        error: data.message || `Không thể tải dữ liệu (mã lỗi ${res.status})`,
      };
    }

    const items = Array.isArray(data) ? data : data.items || data.data || [];

    return {
      ok: true,
      items,
      error: null,
    };
  } catch (err) {
    return {
      ok: false,
      items: [],
      error: "Không thể kết nối tới máy chủ. Vui lòng kiểm tra mạng và thử lại.",
    };
  }
}

export function renderListState({ isLoading, error, items, renderRows }) {
  if (isLoading) {
    return `<div class="status-box">Đang tải dữ liệu...</div>`;
  }
  if (error) {
    return `<div class="status-box status-error">${error}</div>`;
  }
  if (!items || items.length === 0) {
    return `<div class="status-box status-empty">Chưa có dữ liệu phù hợp với bộ lọc hiện tại.</div>`;
  }
  return renderRows(items);
}
