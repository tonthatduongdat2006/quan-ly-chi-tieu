# BẢNG TỰ ĐÁNH GIÁ BẢN THÂN & BÁO CÁO 5 SPRINT — NHÓM 6 (AI SMART EXPENSE)

Tài liệu tổng hợp tự đánh giá cá nhân và tiến độ 5 Sprint cho dự án **AI Smart Expense** (Nhóm 6 — Môn Web Basic / CSB25022, VNUK).

## 1. Bảng tổng hợp tự đánh giá 4 thành viên

| Họ tên | Vai trò & phần việc phụ trách | Tự đánh giá & ghi chú |
| --- | --- | --- |
| Tôn Thất Dương Đạt | Điều phối kỹ thuật, xây dựng/chỉnh sửa mã nguồn, luồng nghiệp vụ, AI nhập nhanh (tin nhắn & hóa đơn), cơ sở dữ liệu/API, cấu hình biến môi trường, triển khai, xử lý lỗi/log và tài liệu dự án. | Gánh phần lớn khối lượng thực thi kỹ thuật; bám sát lỗi runtime/kết nối và hoàn thiện luồng sản phẩm. |
| Văn Lê Tiến Hùng | Góp ý và đề xuất cách xây dựng web, định hướng giao diện/luồng thao tác và cách tổ chức sản phẩm. | Đóng góp ý kiến định hướng xây dựng web để đội ngũ tham khảo và chắt lọc khi triển khai. |
| Nguyễn Hải Đăng | *[Cần thành viên cập nhật/xác nhận phần việc thực tế]* | *[Cần thành viên cập nhật/xác nhận tự đánh giá]* |
| Phạm Minh Phúc | Chưa ghi nhận phần việc thực hiện hay đóng góp cụ thể trong quá trình triển khai dự án. | Mức độ tham gia và đóng góp thực tế chưa rõ ràng; cần đối chiếu thêm với lịch sử commit/bàn giao của nhóm. |

## 2. Chi tiết tự đánh giá theo từng thành viên

### 2.1. Tôn Thất Dương Đạt
- **Khối lượng & mức độ tham gia:** Đảm nhận phần lớn công việc kỹ thuật thực tế của dự án AI Smart Expense, từ thiết kế luồng hệ thống, phát triển chức năng (tài khoản, giao dịch, danh mục, số dư/tổng quan, nhập nhanh AI bằng tin nhắn và hóa đơn) đến cấu hình môi trường, triển khai, kiểm tra log và biên soạn tài liệu.
- **Điểm mạnh:** Kiên trì lần theo lỗi khi triển khai gặp sự cố, biết đối chiếu log, biến môi trường và chuỗi kết nối; giữ được sự kết nối giữa đặc tả tính năng và mã nguồn thực tế.
- **Khó khăn & bài học rút ra:** Quá trình cấu hình kết nối cơ sở dữ liệu, biến môi trường và đối chiếu bản deploy/log có nhiều điểm dễ nhầm lẫn. Bài học rút ra là luôn kiểm tra đúng môi trường/bản deploy, rà soát kỹ định dạng chuỗi kết nối trước khi redeploy và kiểm thử từng luồng cụ thể.
- **Hướng cải thiện:** Tiếp tục ổn định các luồng nghiệp vụ chính, bổ sung thêm kiểm thử cho các trường hợp lỗi và duy trì tài liệu gọn, rõ ràng.

### 2.2. Văn Lê Tiến Hùng
- **Phần việc phụ trách:** Góp ý và đề xuất cách xây dựng web cho dự án AI Smart Expense.
- **Tự đánh giá & đóng góp:** Đưa ra các góc nhìn, góp ý và đề xuất về cách tổ chức/xây dựng web để đội ngũ cân nhắc áp dụng vào quá trình phát triển sản phẩm.
- **Ghi chú:** Có thể bổ sung thêm chi tiết các đề xuất cụ thể và minh chứng tham gia theo từng Sprint.

### 2.3. Nguyễn Hải Đăng
- **Phần việc phụ trách:** *[Cần bổ sung thông tin thực tế của thành viên]*
- **Tự đánh giá & đóng góp:** *[Cần bổ sung tự đánh giá của thành viên]*

### 2.4. Phạm Minh Phúc
- **Phần việc phụ trách:** Chưa ghi nhận đầu việc, mã nguồn hay nhiệm vụ cụ thể nào được hoàn thành hoặc đóng góp vào quá trình làm việc của nhóm.
- **Tự đánh giá & đóng góp:** Chưa thể hiện sự tham gia và đóng góp thực tế vào sản phẩm và các đầu việc chung của dự án; các thành viên khác không ghi nhận đóng góp từ thành viên này.
- **Ghi chú:** Nếu thành viên có minh chứng hoặc báo cáo bổ sung theo từng Sprint, cần cung cấp cụ thể để đối chiếu theo quy định đánh giá cá nhân của môn học.

## 3. Báo cáo Self-Report theo 5 Sprint (Tôn Thất Dương Đạt)

| Sprint | Mục tiêu & liên kết tiêu chí | Công việc đã thực hiện | Kết quả & bài học / ghi chú |
| --- | --- | --- | --- |
| **Sprint 1** | Lập kế hoạch, phân vai, wireframe/ERD & quản lý GitHub (Task 1) | Tham gia định hướng dự án, thiết kế luồng hệ thống và lược đồ dữ liệu/ERD, khởi tạo và tổ chức repository, tạo Issue và thực hiện quy trình nhánh + Pull Request. | Thiết lập được nền tảng quản lý mã nguồn, Issue và Pull Request; cần đảm bảo các thành viên cùng cập nhật đóng góp rõ ràng. |
| **Sprint 2** | Giao diện đa màn hình & tương tác người dùng (Task 2) | Xây dựng và hoàn thiện giao diện các màn hình chính (Trang chủ, Thêm chi, Quét hóa đơn, Cá nhân), biểu mẫu nhập liệu, chọn danh mục và thao tác kiểm tra bản nháp. | Các màn hình hoạt động đúng luồng điều hướng và hiển thị trên nhiều kích thước màn hình; cần lưu ý rà soát bố cục màn hình lớn và thư viện CSS theo đề bài. |
| **Sprint 3** | Cơ sở dữ liệu PostgreSQL & nội dung động (Task 3) | Thiết kế cơ sở dữ liệu quan hệ (profiles, categories, transactions, budgets, savings_jars), tích hợp PostgreSQL qua dịch vụ API và hiển thị dữ liệu động theo tài khoản. | Đã kết nối dữ liệu thực tế cho các luồng giao dịch, số dư và danh mục; cần kiểm tra kỹ các endpoint xác thực và xác nhận bản nháp khi thao tác. |
| **Sprint 4** | Tối ưu hóa hiệu năng, theo dõi & ghi log (Task 4) | Rà soát lỗi runtime/deploy, kiểm tra log trên nền tảng triển khai, cấu hình biến môi trường và ghi nhận các nội dung tối ưu hóa, theo dõi hành vi và ghi log. | Phát hiện và lần theo các lỗi API/môi trường khi deploy; rút ra kinh nghiệm đối chiếu kỹ biến môi trường và log trước khi chốt bản chạy chính thức. |
| **Sprint 5** | UI/UX Peer Review, tài liệu & hoàn tất nộp bài (Task 5 & Submission) | Thực hiện đánh giá UI/UX, rà soát và phản hồi góp ý, cập nhật tài liệu README và thư mục tài liệu, gắn link video demo và chuẩn bị báo cáo tự đánh giá 5 Sprint. | Hoàn thiện tài liệu tổng hợp và danh sách đầu mục nộp bài; cần rà soát lần cuối link video demo và xác nhận của các thành viên trong nhóm. |

## 4. Khung Self-Report 5 Sprint dành cho các thành viên còn lại

Các thành viên **Văn Lê Tiến Hùng**, **Nguyễn Hải Đăng** và **Phạm Minh Phúc** có thể điền trực tiếp vào khung dưới đây cho từng Sprint (từ Sprint 1 đến Sprint 5):

1. **Sprint 1:** Công việc phụ trách — Kết quả đạt được — Khó khăn/lưu ý.
2. **Sprint 2:** Công việc phụ trách — Kết quả đạt được — Khó khăn/lưu ý.
3. **Sprint 3:** Công việc phụ trách — Kết quả đạt được — Khó khăn/lưu ý.
4. **Sprint 4:** Công việc phụ trách — Kết quả đạt được — Khó khăn/lưu ý.
5. **Sprint 5:** Công việc phụ trách — Kết quả đạt được — Khó khăn/lưu ý.
