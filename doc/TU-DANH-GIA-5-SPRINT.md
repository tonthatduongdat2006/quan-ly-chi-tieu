# TỰ ĐÁNH GIÁ THEO 5 SPRINT (S1–S5) — NHÓM 6 (AI SMART EXPENSE)

Theo mục **Grading Methods** của đề bài (*"Each student must submit a Self-Report for all 5 sprints"*), tài liệu này tổng hợp tiến độ và tự đánh giá qua 5 sprint cho **Nhóm 6**.

---

## 1. Bảng tổng hợp tự đánh giá 4 thành viên qua 5 Sprint

| Thành viên | Vai trò thực tế | S1 (Lập kế hoạch & Wireframe) | S2 (Thiết kế CSDL & API) | S3 (Xây dựng UI & Backend) | S4 (Tích hợp AI & Tính năng động) | S5 (Kiểm thử, Tối ưu & Báo cáo) |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Tôn Thất Dương Đạt** | Phụ trách gần như toàn bộ cùng **claude** | Chốt đề tài, luồng màn hình & cấu trúc dự án | Thiết kế ERD, quy ước dữ liệu & API contract | Xây dựng `public/index.html` & `server.js` | Hoàn thiện luồng AI nhập text/bill & bản nháp | Viết test (`test/`), Lighthouse, logging & bộ tài liệu `doc/` |
| **Văn Lê Tiến Hùng** | Góp ý & đề xuất cách xây dựng web | Đề xuất ý tưởng cách tổ chức web quản lý chi tiêu | Góp ý luồng thao tác người dùng | Góp ý bố cục giao diện dễ dùng | Đề xuất luồng kiểm tra bản nháp trước khi lưu | Rà soát trải nghiệm giao diện tổng thể |
| **Nguyễn Hải Đăng** | *(Để trống)* | *(Để trống)* | *(Để trống)* | *(Để trống)* | *(Để trống)* | *(Để trống)* |
| **Phạm Minh Phúc** | *(Để trống)* | *(Để trống)* | *(Để trống)* | *(Để trống)* | *(Để trống)* | *(Để trống)* |

---

## 2. Chi tiết 5 Sprint của Tôn Thất Dương Đạt (phối hợp cùng claude)

* **Sprint 1 — Khởi động, phân công & Wireframe:** Xác định bài toán quản lý chi tiêu cá nhân thực tế, tiếp thu đề xuất xây dựng web từ **Văn Lê Tiến Hùng**, thiết kế khung giao diện và luồng người dùng cốt lõi.
* **Sprint 2 — Thiết kế Kiến trúc, CSDL & API:** Chuẩn hóa cấu trúc dữ liệu (người dùng, danh mục, giao dịch, ngân sách, bản nháp AI) và hợp đồng dữ liệu JSON giữa frontend và backend.
* **Sprint 3 — Phát triển Giao diện & Backend cốt lõi:** Triển khai giao diện responsive bằng Tailwind CSS + JavaScript trong `public/` và máy chủ backend Node.js trong `server.js`, xử lý CRUD giao dịch và tính toán số dư.
* **Sprint 4 — Tích hợp AI nhập nhanh & Xử lý lỗi thực tế:** Hoàn thiện hai tính năng nổi bật là phân tích tin nhắn chi tiêu (`POST /api/ai/parse-text`) và quét hóa đơn (`POST /api/ai/parse-receipt`), cho phép sửa bản nháp trước khi xác nhận lưu; đồng thời xử lý các lỗi cấu hình môi trường và kết nối.
* **Sprint 5 — Kiểm thử, Tối ưu Lighthouse, Peer Review & Hoàn thiện hồ sơ:** Bổ sung bộ kiểm thử tự động trong `test/`, rà soát hiệu năng Lighthouse, thiết lập log lỗi/request, tổng hợp peer review và hoàn thiện toàn bộ tài liệu trong `doc/` cùng `README.md`.
