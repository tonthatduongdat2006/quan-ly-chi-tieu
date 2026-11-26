# Quản Lý Chi Tiêu — AI Smart Expense (`Group6-QuanLyChiTieu`)

Ứng dụng quản lý chi tiêu cá nhân hỗ trợ thiết lập số dư ban đầu, nhập khoản chi thủ công, phân tích tin nhắn nhanh và quét hóa đơn bằng AI. Frontend chỉ gọi backend của bạn; backend giữ API key và gọi AI.

- **Môn học:** Web Design and Development (`CSB25022`) — VN-UK Institute for Research and Executive Education (VNUK)
- **Web ứng dụng:** https://group6-quanlychitieu.vercel.app/
- **API / Backend:** https://group6-quanlychitieu-api.vercel.app
- **Kho mã nguồn (GitHub):** https://github.com/tonthatduongdat2006/Group6-QuanLyChiTieu

```text
Trình duyệt / Expo Web                        Backend / API                      Dịch vụ AI & CSDL
  Chat: gửi tin nhắn ───────► POST /api/ai/parse-text ──────┐
  Quét: gửi ảnh (base64) ───► POST /api/ai/parse-receipt ───┼─► gọi AI (API key ở biến môi trường)
  ◄── JSON có cấu trúc ◄────── kiểm tra + chuẩn hóa ◄───────┘
  Bản nháp → người dùng sửa → "Xác nhận lưu" → lưu vào PostgreSQL (Supabase): số dư, giao dịch, danh mục, ngân sách, hũ tiết kiệm
