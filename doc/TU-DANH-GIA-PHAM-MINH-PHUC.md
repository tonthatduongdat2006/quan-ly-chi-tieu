# BÁO CÁO TỰ ĐÁNH GIÁ CÁ NHÂN & TIẾN ĐỘ 5 SPRINT — PHẠM MINH PHÚC

* **Họ và tên:** Phạm Minh Phúc
* **MSSV:** 24090011
* **Nhóm:** Nhóm 6 — Môn Web Basic / CSB25022 (VNUK)
* **Dự án:** Ứng dụng quản lý chi tiêu cá nhân **AI Smart Expense** (`https://quan-ly-chi-tieu-sooty.vercel.app`)
* **Nhánh làm việc:** `docs/phuc-test-responsive`

---

## 1. Tổng hợp phần việc phụ trách & Minh chứng đóng góp

| STT | Hạng mục công việc | Nội dung thực hiện chi tiết | Minh chứng trong Repository | Trạng thái |
| :--- | :--- | :--- | :--- | :--- |
| **1** | **Kiểm thử thủ công (Manual QA)** | Xây dựng kịch bản kiểm thử và chạy test thực tế cho 4 nhóm tính năng tương tác: Form nhập liệu, Modal thêm/sửa, Quét hóa đơn AI tạo bản nháp, và Bộ lọc lịch sử chi tiêu. | [`doc/qa-test-cases.md`](./qa-test-cases.md) | Hoàn thành |
| **2** | **Kiểm thử giao diện đa thiết bị (Responsive)** | Kiểm tra độ co giãn bố cục và chụp ảnh toàn trang giao diện thực tế trên đủ 3 chuẩn kích thước màn hình: Mobile (`375x812`), Tablet (`768x1024`), và Desktop (`1440x900`). | [`doc/responsive/`](./responsive/) | Hoàn thành |
| **3** | **Rà soát & Báo cáo tiến độ 5 Sprint** | Tổng hợp chi tiết quá trình tham gia dự án từ Sprint 1 đến Sprint 5, đối chiếu đầy đủ các đầu việc cá nhân và tạo Pull Request hợp lệ vào nhánh `main`. | [`doc/TU-DANH-GIA-5-SPRINT.md`](./TU-DANH-GIA-5-SPRINT.md)<br>[`doc/BANG-TU-DANH-GIA-4-THANH-VIEN.md`](./BANG-TU-DANH-GIA-4-THANH-VIEN.md) | Hoàn thành |

---

## 2. Tự đánh giá chi tiết bản thân

* **Phần việc phụ trách:** Phụ trách mảng đảm bảo chất lượng sản phẩm (Manual QA) cho các luồng tương tác người dùng, kiểm thử độ tương thích hiển thị đa thiết bị (Responsive trên Mobile, Tablet, Desktop), và hoàn thiện hồ sơ báo cáo đánh giá cá nhân qua 5 Sprint.
* **Tự đánh giá & đóng góp:** Hoàn thành đầy đủ 100% các đầu việc được phân công đúng tiến độ, tuân thủ nghiêm ngặt quy trình Git Flow của nhóm (tạo nhánh riêng `docs/phuc-test-responsive`, chỉ thao tác trên phạm vi tài liệu được giao để tránh xung đột mã nguồn và gửi Pull Request cho nhóm trưởng kiểm duyệt).
* **Điểm mạnh:** Cẩn thận trong quá trình kiểm thử các tình huống nhập liệu ngoại lệ (bỏ trống trường bắt buộc, nhập sai định dạng số tiền), kiểm tra kỹ lưỡng hiện tượng tràn khung trên màn hình điện thoại nhỏ và trình bày minh chứng rõ ràng, dễ đối chiếu.
* **Hạn chế & Hướng cải thiện:** Ở các Sprint đầu chưa chủ động cập nhật sớm nhật ký công việc lên tài liệu chung của nhóm; đã khắc phục bằng việc rà soát, bổ sung đầy đủ toàn bộ bảng test cases, bộ ảnh responsive và báo cáo 5 Sprint trước thời hạn nộp bài.

---

## 3. Báo cáo tiến độ chi tiết qua 5 Sprint (S1–S5)

| Sprint | Giai đoạn | Công việc phụ trách | Kết quả đạt được & Lưu ý |
| :--- | :--- | :--- | :--- |
| **Sprint 1** | Khởi tạo & Phân tích luồng | Nghiên cứu yêu cầu bài toán quản lý chi tiêu cá nhân AI Smart Expense; phối hợp cùng nhóm thống nhất các luồng chức năng chính (Đăng nhập, Thiết lập số dư, Thêm khoản chi, Quét hóa đơn AI). | Nắm vững luồng nghiệp vụ và cấu trúc các màn hình cốt lõi làm cơ sở xây dựng bộ kịch bản kiểm thử. |
| **Sprint 2** | Kiểm tra giao diện & Form nhập liệu | Phối hợp rà soát giao diện nhập liệu (Form thêm khoản chi, Modal chỉnh sửa) và kiểm tra ràng buộc hợp lệ dữ liệu đầu vào (validation số tiền âm/chữ, trường bắt buộc). | Đảm bảo form chặn dữ liệu rỗng hoặc sai định dạng; lưu ý đồng bộ thông báo lỗi rõ ràng trên giao diện người dùng. |
| **Sprint 3** | Rà soát chức năng AI & Bộ lọc | Trải nghiệm thực tế luồng Quét hóa đơn AI tạo bản nháp (`05-quet-hoa-don-ai`) và chức năng tìm kiếm, lọc lịch sử giao dịch theo từ khóa, danh mục, khoảng thời gian. | Xác nhận luồng trích xuất bản nháp và bộ lọc dữ liệu hoạt động ổn định; ghi nhận cần kiểm tra kỹ độ co giãn bảng dữ liệu trên màn hình nhỏ. |
| **Sprint 4** | Kiểm thử QA & Responsive đa màn hình | Lập bảng kiểm thử thủ công chi tiết cho 4 nhóm tính năng tương tác (`doc/qa-test-cases.md`) và chụp ảnh kiểm thử giao diện trên 3 kích thước Mobile, Tablet, Desktop (`doc/responsive/`). | Hoàn thành 100% test cases đạt yêu cầu; lưu trữ đầy đủ bộ ảnh chứng minh giao diện responsive không vỡ khung hay tràn ngang. |
| **Sprint 5** | Tổng hợp minh chứng & Hoàn thiện PR | Rà soát toàn bộ tài liệu kiểm thử, cập nhật báo cáo tự đánh giá 5 Sprint vào hồ sơ chung của nhóm (`doc/TU-DANH-GIA-5-SPRINT.md`, `doc/BANG-TU-DANH-GIA-4-THANH-VIEN.md`) và mở Pull Request về `main`. | Hoàn tất đầy đủ tài liệu phần việc được giao đúng quy trình Git Flow, sẵn sàng cho nhóm trưởng review và tổng hợp nộp bài. |