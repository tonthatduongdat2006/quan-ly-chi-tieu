# WIREFRAME, KIẾN TRÚC & LƯỢC ĐỒ CƠ SỞ DỮ LIỆU (ERD) — AI SMART EXPENSE

Tài liệu này tổng hợp thiết kế màn hình (**Task 1b & Task 2**) và thiết kế dữ liệu/kiến trúc (**Task 3**) cho dự án **AI Smart Expense (Nhóm 6)**.

---

## 1. Thiết kế Wireframe & Cấu trúc trang (Task 1b & Task 2)

Ứng dụng được thiết kế theo hướng **mobile-first / responsive** (tương thích Mobile 375px, Tablet 768px, Desktop 1280px), sử dụng **Tailwind CSS** và **JavaScript** tương tác trực tiếp:

1. **Trang Tổng quan & Quản lý Giao dịch (Home / Dashboard):**
   * Hiển thị số dư hiện tại, tổng thu, tổng chi và danh sách giao dịch gần nhất.
   * Bộ lọc theo loại giao dịch (Thu / Chi), danh mục và tìm kiếm nhanh.
2. **Trợ lý AI Nhập Nhanh (AI Quick Entry — Tin nhắn & Hóa đơn):**
   * **Nhập bằng tin nhắn:** Người dùng gõ câu tự nhiên (ví dụ: *"Ăn trưa 45k, đổ xăng 60k"*), hệ thống gọi `POST /api/ai/parse-text` trả về danh sách bản nháp.
   * **Quét hóa đơn (Receipt Scan):** Người dùng tải/chụp ảnh hóa đơn, hệ thống gọi `POST /api/ai/parse-receipt` trích xuất số tiền, danh mục, ghi chú, ngày giao dịch.
   * **Luồng xác nhận bản nháp:** Người dùng kiểm tra, chỉnh sửa trực tiếp các trường trên bản nháp rồi bấm **Xác nhận lưu** để cập nhật vào danh sách giao dịch và số dư.
3. **Trang Thống kê, Ngân sách & Giới thiệu/Hướng dẫn (Stats, Budget & About):**
   * Biểu đồ cơ cấu chi tiêu theo danh mục, theo dõi hạn mức ngân sách và trang thông tin dự án/hướng dẫn sử dụng.

### Sơ đồ luồng giao diện (Wireframe Flow)

```text
[Trang chủ / Tổng quan]
   ├──► Xem số dư, thu/chi, lịch sử giao dịch (dữ liệu động)
   ├──► [Trợ lý AI Nhập Nhanh]
   │       ├── Tab Nhập tin nhắn ──► POST /api/ai/parse-text ──► Bản nháp (Sửa) ──► Xác nhận lưu
   │       └── Tab Quét hóa đơn  ──► POST /api/ai/parse-receipt ──► Bản nháp (Sửa) ──► Xác nhận lưu
   ├──► [Thống kê & Ngân sách] ──► Biểu đồ chi tiêu theo danh mục & tiến độ hạn mức
   └──► [Giới thiệu / Hướng dẫn] ──► Thông tin nhóm & hướng dẫn thao tác
