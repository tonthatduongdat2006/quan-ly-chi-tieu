# TỐI ƯU HIỆU NĂNG, LOGGING & UI/UX PEER REVIEW — AI SMART EXPENSE (NHÓM 6)

Tài liệu này tổng hợp kết quả kiểm tra tối ưu (**Task 4**) và quá trình đánh giá chéo UI/UX (**Task 5**) theo yêu cầu đồ án môn *Web Design and Development (CSB25022)*.

---

## 1. Tối ưu Hiệu năng với Google Lighthouse (Task 4a)

### Các hạng mục tối ưu đã áp dụng

* **Giảm tải tài nguyên & mã nguồn:** Backend viết gọn nhẹ bằng Node.js thuần (`server.js`), không kéo theo thư viện nặng không cần thiết; frontend tối ưu cấu trúc DOM và tải tài nguyên tĩnh nhanh.
* **Tối ưu hình ảnh hóa đơn trước khi gửi AI:** Kiểm tra định dạng và giới hạn dung lượng ảnh (tối đa 5MB), tránh làm treo giao diện khi tải ảnh từ thiết bị di động.
* **Cải thiện Accessibility, SEO & Best Practices:** Bổ sung đầy đủ thẻ `<meta>` mô tả, thuộc tính `alt`/`aria-label` cho các nút thao tác, đảm bảo độ tương phản màu sắc rõ ràng trên cả mobile và desktop.

### Bảng đối chiếu kết quả đo Google Lighthouse

| Tiêu chí đánh giá | Trước tối ưu | Sau tối ưu | Ghi chú cải thiện |
| :--- | :---: | :---: | :--- |
| **Performance** | 78 | **95** | Giảm thời gian tải ban đầu, tối ưu xử lý sự kiện JS |
| **Accessibility** | 84 | **98** | Bổ sung nhãn nút bấm, cải thiện độ tương phản chữ/nền |
| **Best Practices** | 92 | **100** | Chuẩn hóa HTTPS, xử lý lỗi API rõ ràng, không lộ key ở client |
| **SEO** | 82 | **96** | Đầy đủ thẻ `title`, `meta description`, cấu trúc heading hợp lý |

---

## 2. Thiết lập Tracking & Logging (Task 4b)

* **Backend Request & Error Logging:**
  * Mọi yêu cầu gọi API (`/api/health`, `/api/ai/parse-text`, `/api/ai/parse-receipt`) được ghi log có cấu trúc qua `stdout` kèm thời gian, endpoint, mã trạng thái HTTP và mã lỗi chuẩn hóa (`ai_not_configured`, `ai_auth`, `ai_quota`, `rate_limited`, `receipt_unreadable`...).
  * Đảm bảo **bảo mật dữ liệu người dùng**: không ghi nội dung tin nhắn chi tiêu hay dữ liệu ảnh hóa đơn của người dùng vào log hệ thống.
* **Theo dõi hành vi & giám sát lỗi (Analytics / Error Monitoring):**
  * Tích hợp theo dõi lượt truy cập trang, thao tác sử dụng tính năng nhập nhanh AI (tin nhắn vs hóa đơn) và bắt lỗi runtime phía trình duyệt (`window.onerror` / `unhandledrejection`) phục vụ gỡ lỗi nhanh.

---

## 3. UI/UX Peer Review & Evaluation (Task 5)

### 3.1. Góp ý cho các nhóm khác (Task 5a)

| Nhóm được review | Điểm mạnh ghi nhận | Gợi ý cải thiện (Usability, Aesthetics, User-Friendliness) |
| :--- | :--- | :--- |
| **Nhóm 2 — FocuSpace** | Giao diện pixel độc đáo, âm thanh Lo-fi và hiệu ứng không gian tạo cảm hứng tập trung tốt; tính năng kéo thả trực quan. | Nên tối ưu thời gian tải âm thanh ban đầu để giảm độ trễ khi mới vào phòng và bổ sung hướng dẫn ngắn cho người dùng mới. |
| **Nhóm 4 — PawPass** | Chủ đề chăm sóc thú cưng gần gũi, bố cục thẻ thông tin dễ nhìn, thao tác tra cứu nhanh. | Cần bổ sung phản hồi rõ ràng hơn khi lọc không có kết quả và kiểm tra lại điều hướng một số nút trên màn hình nhỏ. |

### 3.2. Tiếp nhận & xử lý góp ý cho Nhóm 6 (Task 5b)

| Nội dung góp ý nhận được | Nguồn góp ý | Quyết định xử lý | Chi tiết điều chỉnh / Lý do |
| :--- | :--- | :--- | :--- |
| **Tinh gọn bố cục màn hình chính, tránh hiển thị quá nhiều thông tin gây rối mắt** | Review chéo từ nhóm bạn & góp ý của **Văn Lê Tiến Hùng** | **Đã thực hiện** | Phân tách rõ khu vực tổng quan số dư, khung nhập nhanh AI và danh sách giao dịch để thao tác gọn hơn. |
| **Cho phép người dùng kiểm tra và sửa lại dữ liệu trước khi lưu giao dịch AI** | Góp ý xây dựng web (**Văn Lê Tiến Hùng**) | **Đã thực hiện** | Xây dựng cơ chế **Bản nháp (Draft)** sau khi AI phân tích tin nhắn/hóa đơn, người dùng chỉnh sửa rồi mới bấm **Xác nhận lưu**. |
| **Thêm tính năng nhập nhanh chi tiêu bằng giọng nói (Voice-to-Expense)** | Review chéo từ nhóm bạn | **Chưa triển khai (Đưa vào hướng phát triển)** | Trong phạm vi thời gian 3 tuần, nhóm ưu tiên tối ưu độ chính xác và độ ổn định của 2 luồng **tin nhắn văn bản** và **quét hóa đơn**. |
