# KẾ HOẠCH DỰ ÁN, PHÂN CÔNG & QUY TRÌNH GIT — AI SMART EXPENSE (NHÓM 6)

Tài liệu này đáp ứng **Task 1 (Project Planning & Teamwork)** theo đề bài môn *Web Design and Development (CSB25022)*, phản ánh đúng tình hình triển khai thực tế của **Nhóm 6**.

---

## 1. Biên bản họp & phân công vai trò (Task 1a)

* **Hình thức trao đổi:** Thảo luận nhóm và chốt định hướng xây dựng ứng dụng quản lý chi tiêu cá nhân tích hợp AI nhập nhanh (**AI Smart Expense**).
* **Danh sách 4 thành viên & phân công thực tế:**

| Thành viên | Vai trò & phần việc thực tế | Ghi chú |
| :--- | :--- | :--- |
| **Tôn Thất Dương Đạt** | Phụ trách gần như toàn bộ cùng **claude**: thiết kế luồng hệ thống, xây dựng giao diện, backend API (`server.js`), tích hợp AI nhập nhanh (tin nhắn & hóa đơn), cấu hình môi trường/triển khai, kiểm thử (`npm test`) và tài liệu. | Đầu mối chính điều phối & thực thi |
| **Văn Lê Tiến Hùng** | Góp ý và đề xuất cách xây dựng web, luồng thao tác và định hướng giao diện/tính năng cho người dùng. | Đóng góp ý tưởng & phản biện UI/UX |
| **Nguyễn Hải Đăng** | *(Để trống)* | *(Để trống)* |
| **Phạm Minh Phúc** | *(Để trống)* | *(Để trống)* |

---

## 2. Kế hoạch triển khai & các mốc bàn giao (Task 1c — Milestones)

Dự án được triển khai trong khung thời gian **3 tuần**, chia thành các giai đoạn chính từ thiết kế đến hoàn thiện báo cáo:

| Giai đoạn | Mục tiêu & đầu ra chính | Trạng thái |
| :--- | :--- | :--- |
| **Giai đoạn 1: Khởi động & Wireframe** | Chốt đề tài **AI Smart Expense**, thống nhất cách xây dựng web, phác thảo bố cục màn hình và luồng nhập nhanh AI. | Hoàn thành |
| **Giai đoạn 2: Thiết kế kiến trúc, CSDL & API** | Chốt mô hình dữ liệu (ERD), quy ước dữ liệu danh mục/giao dịch, đặc tả các endpoint `/api/health`, `/api/ai/parse-text`, `/api/ai/parse-receipt`. | Hoàn thành |
| **Giai đoạn 3: Xây dựng Giao diện & Backend** | Hoàn thiện giao diện responsive trong `public/index.html`, backend Node.js trong `server.js`, luồng bản nháp giao dịch và lưu trữ dữ liệu. | Hoàn thành |
| **Giai đoạn 4: Kiểm thử, Tối ưu & Peer Review** | Viết unit/integration test (`test/`), kiểm tra hiệu năng Lighthouse, cấu hình logging/tracking, ghi nhận góp ý UI/UX và hoàn thiện `README.md` + bộ tài liệu `doc/`. | Hoàn thành / Đang rà soát cuối |

---

## 3. Quy trình GitHub & quy ước Commit (Task 1d & 1e)

* **Kho mã nguồn:** https://github.com/tonthatduongdat2006/quan-ly-chi-tieu
* **Tổ chức thư mục:**
  * `public/` — Giao diện người dùng (HTML, CSS/Tailwind, JavaScript xử lý tương tác).
  * `server.js` — Máy chủ backend Node.js xử lý API và gọi dịch vụ AI.
  * `test/` — Bộ kiểm thử tự động (`npm test`).
  * `doc/` — Hồ sơ dự án, wireframe, kiến trúc/ERD, tối ưu Lighthouse, peer review và tự đánh giá.
* **Quy ước commit & theo dõi thay đổi:**
  * Các thay đổi được chia nhỏ theo từng mục đích rõ ràng (`feat:`, `fix:`, `docs:`, `test:`, `chore:`) và quản lý qua Issues/Pull Requests trên GitHub.
