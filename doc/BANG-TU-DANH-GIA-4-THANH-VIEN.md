# BẢNG TỰ ĐÁNH GIÁ BẢN THÂN & BÁO CÁO 5 SPRINT — NHÓM 6 (AI SMART EXPENSE)

Tài liệu tổng hợp tự đánh giá cá nhân và tiến độ 5 Sprint cho dự án **AI Smart Expense** (Nhóm 6 — Môn Web Basic / CSB25022, VNUK).

## 1. Bảng tổng hợp tự đánh giá 4 thành viên

| Họ tên | Vai trò & phần việc phụ trách | Tự đánh giá & ghi chú |
| --- | --- | --- |
| Tôn Thất Dương Đạt | Điều phối kỹ thuật, xây dựng/chỉnh sửa mã nguồn, luồng nghiệp vụ, AI nhập nhanh (tin nhắn & hóa đơn), cơ sở dữ liệu/API, cấu hình biến môi trường, triển khai, xử lý lỗi/log và tài liệu dự án. | Gánh phần lớn khối lượng thực thi kỹ thuật; bám sát lỗi runtime/kết nối và hoàn thiện luồng sản phẩm. |
| Văn Lê Tiến Hùng | Góp ý và đề xuất cách xây dựng web, định hướng giao diện/luồng thao tác và cách tổ chức sản phẩm. | Đóng góp ý kiến định hướng xây dựng web để đội ngũ tham khảo và chắt lọc khi triển khai. |
| Nguyễn Hải Đăng | Chưa ghi nhận phần việc thực hiện hay đóng góp cụ thể trong quá trình triển khai dự án. | Mức độ tham gia và đóng góp thực tế chưa rõ ràng; cần đối chiếu thêm với lịch sử commit/bàn giao của nhóm. |
| Phạm Minh Phúc | Chưa ghi nhận phần việc thực hiện hay đóng góp cụ thể trong quá trình triển khai dự án. | Mức độ tham gia và đóng góp thực tế chưa rõ ràng; cần đối chiếu thêm với lịch sử commit/bàn giao của nhóm. |

## 2. Chi tiết tự đánh giá theo từng thành viên

### 2.1. Tôn Thất Dương Đạt
- **Phần việc phụ trách:** Thiết kế luồng hệ thống, lược đồ dữ liệu/ERD, tổ chức cấu trúc dự án; phát triển các luồng chức năng chính (tài khoản, giao dịch, danh mục, số dư/tổng quan) và tính năng AI nhập nhanh bằng tin nhắn & hóa đơn.
- **Tự đánh giá & đóng góp:** Đảm nhận phần thiết kế luồng, xây dựng chức năng và kết nối nghiệp vụ cho ứng dụng AI Smart Expense.
- **Điểm mạnh:** Kiên trì lần theo lỗi khi phát triển và vận hành; giữ được sự khớp nhau giữa đặc tả tính năng, luồng nghiệp vụ và mã nguồn thực tế.
- **Khó khăn & bài học rút ra:** Việc đồng bộ các luồng nghiệp vụ và xử lý các tình huống nhập liệu/biến động dữ liệu có nhiều điểm cần rà soát kỹ. Bài học rút ra là kiểm thử từng luồng cụ thể và giữ tính nhất quán giữa đặc tả và mã nguồn.
- **Hướng cải thiện:** Tiếp tục ổn định các luồng nghiệp vụ chính, bổ sung thêm kiểm thử cho các trường hợp lỗi và duy trì tài liệu gọn, rõ ràng.

### 2.2. Văn Lê Tiến Hùng
- **Phần việc phụ trách:** Thiết kế cơ sở dữ liệu quan hệ (`profiles`, `categories`, `transactions`, `budgets`, `savings_jars`), tích hợp PostgreSQL qua API và hiển thị dữ liệu động; quản lý biến môi trường, triển khai ứng dụng, theo dõi log/xử lý lỗi và biên soạn tài liệu dự án.
- **Tự đánh giá & đóng góp:** Đảm nhận phần cơ sở dữ liệu/API, cấu hình môi trường, triển khai, kiểm tra log và hoàn thiện tài liệu cho dự án AI Smart Expense.
- **Điểm mạnh:** Kiên trì lần theo lỗi khi triển khai gặp sự cố; biết đối chiếu log, biến môi trường và chuỗi kết nối để đảm bảo hệ thống vận hành ổn định.
- **Khó khăn & bài học rút ra:** Quá trình cấu hình kết nối cơ sở dữ liệu, biến môi trường và đối chiếu bản deploy/log có nhiều điểm dễ nhầm lẫn. Bài học rút ra là luôn kiểm tra đúng môi trường/bản deploy, rà soát kỹ định dạng chuỗi kết nối trước khi redeploy và đối chiếu log trước khi chốt bản.
- **Hướng cải thiện:** Tiếp tục rà soát kỹ biến môi trường và log trước mỗi lần triển khai, bổ sung kiểm thử kết nối/lỗi và cập nhật tài liệu rõ ràng, đầy đủ.

### 2.3. Nguyễn Hải Đăng
- **Phần việc phụ trách:** Chưa ghi nhận đầu việc, mã nguồn hay nhiệm vụ cụ thể nào được hoàn thành hoặc đóng góp vào quá trình làm việc của nhóm.
- **Tự đánh giá & đóng góp:** Chưa thể hiện sự tham gia và đóng góp thực tế vào sản phẩm và các đầu việc chung của dự án; các thành viên khác không ghi nhận đóng góp từ thành viên này.
- **Ghi chú:** Nếu thành viên có minh chứng hoặc báo cáo bổ sung theo từng Sprint, cần cung cấp cụ thể để đối chiếu theo quy định đánh giá cá nhân của môn học.

### 2.4. Phạm Minh Phúc
- **Phần việc phụ trách:** Chưa ghi nhận đầu việc, mã nguồn hay nhiệm vụ cụ thể nào được hoàn thành hoặc đóng góp vào quá trình làm việc của nhóm.
- **Tự đánh giá & đóng góp:** Chưa thể hiện sự tham gia và đóng góp thực tế vào sản phẩm và các đầu việc chung của dự án; các thành viên khác không ghi nhận đóng góp từ thành viên này.
- **Ghi chú:** Nếu thành viên có minh chứng hoặc báo cáo bổ sung theo từng Sprint, cần cung cấp cụ thể để đối chiếu theo quy định đánh giá cá nhân của môn học.

## 3. Báo cáo Self-Report theo 5 Sprint
## Báo cáo 5 Sprint — Tôn Thất Dương Đạt

| Sprint | Công việc của Tôn Thất Dương Đạt | Kết quả & lưu ý |
| :--- | :--- | :--- |
| **Sprint 1** | Khởi tạo và tổ chức repository GitHub, thiết lập quy trình nhánh, Issue và Pull Request. | Thiết lập được nền tảng quản lý mã nguồn và quy trình làm việc nhóm rõ ràng. |
| **Sprint 2** | Xây dựng giao diện và xử lý logic các màn hình chức năng (Trang chủ, Thêm chi, Quét hóa đơn, Cá nhân). | Các màn hình hoạt động đúng luồng điều hướng và thao tác nhập liệu/bản nháp. |
| **Sprint 3** | Thiết kế lược đồ cơ sở dữ liệu quan hệ (ERD), tích hợp PostgreSQL/Supabase và xây dựng API backend. | Kết nối thành công dữ liệu thực tế qua API; các thao tác lưu và truy vấn hoạt động ổn định. |
| **Sprint 4** | Triển khai hệ thống lên Vercel, cấu hình biến môi trường, đọc log và xử lý lỗi runtime/kết nối API. | Ứng dụng chạy ổn định trên môi trường thật; kiểm soát tốt lỗi kết nối và biến môi trường. |
| **Sprint 5** | Cập nhật hoàn chỉnh `README.md`, hệ thống hóa thư mục tài liệu `doc/` và chốt danh sách đầu mục nộp bài trên GitHub. | Hoàn thiện hồ sơ tài liệu và các đầu mục nộp bài theo đúng yêu cầu. |

---

## Báo cáo 5 Sprint — Văn Lê Tiến Hùng

| Sprint | Công việc của Văn Lê Tiến Hùng | Kết quả & lưu ý |
| :--- | :--- | :--- |
| **Sprint 1** | Định hướng ý tưởng dự án, thiết kế khung giao diện (Wireframe) và phác thảo luồng thao tác người dùng. | Định hình rõ cấu trúc giao diện và luồng trải nghiệm ngay từ giai đoạn lập kế hoạch. |
| **Sprint 2** | Rà soát bố cục hiển thị trên các kích thước màn hình, kiểm thử thao tác bản nháp và góp ý chỉnh sửa trải nghiệm. | Đảm bảo giao diện gọn gàng, dễ dùng trên nhiều thiết bị; tiếp tục rà soát chi tiết hiển thị. |
| **Sprint 3** | Đối chiếu dữ liệu hiển thị trên giao diện (số dư, giao dịch, danh mục, ngân sách, hũ tiết kiệm) và kiểm thử luồng lưu dữ liệu. | Dữ liệu hiển thị bám sát nhu cầu quản lý chi tiêu cá nhân hằng ngày. |
| **Sprint 4** | Thiết lập và kiểm tra theo dõi hành vi người dùng (Google Analytics 4), đánh giá tốc độ tải trang và trải nghiệm sử dụng thực tế. | Ghi nhận được dữ liệu truy cập thực tế và phản hồi trải nghiệm sau khi triển khai. |
| **Sprint 5** | Thực hiện đánh giá UI/UX Peer Review, tổng hợp phản hồi từ các nhóm khác và kiểm tra video demo trước khi nộp. | Hoàn thiện phần phản hồi peer review và kiểm tra luồng minh họa trước khi nộp bài. |

## 4. Khung Self-Report 5 Sprint dành cho các thành viên còn lại

Các thành viên **Nguyễn Hải Đăng** và **Phạm Minh Phúc** có thể điền trực tiếp vào khung dưới đây cho từng Sprint (từ Sprint 1 đến Sprint 5):

1. **Sprint 1:** Công việc phụ trách — Kết quả đạt được — Khó khăn/lưu ý.
2. **Sprint 2:** Công việc phụ trách — Kết quả đạt được — Khó khăn/lưu ý.
3. **Sprint 3:** Công việc phụ trách — Kết quả đạt được — Khó khăn/lưu ý.
4. **Sprint 4:** Công việc phụ trách — Kết quả đạt được — Khó khăn/lưu ý.
5. **Sprint 5:** Công việc phụ trách — Kết quả đạt được — Khó khăn/lưu ý.
