# BẢNG TỰ ĐÁNH GIÁ BẢN THÂN & BÁO CÁO 5 SPRINT — NHÓM 6 (AI SMART EXPENSE)

Tài liệu tổng hợp tự đánh giá cá nhân và tiến độ 5 Sprint cho dự án **AI Smart Expense** (Nhóm 6 — Môn Web Basic / CSB25022, VNUK).

## 1. Bảng tổng hợp tự đánh giá 4 thành viên

| Họ tên | Vai trò & phần việc phụ trách | Tự đánh giá & ghi chú |
| --- | --- | --- |
| Tôn Thất Dương Đạt | Quản lý repository GitHub (nhánh, Issue, PR); xây dựng giao diện và xử lý logic các màn hình chức năng (Trang chủ, Thêm chi, Quét hóa đơn, Cá nhân); thiết kế ERD, tích hợp PostgreSQL/Supabase, API backend; triển khai Vercel, cấu hình môi trường/log và hoàn thiện `README.md` cùng thư mục tài liệu `doc/`. | Gánh phần lớn khối lượng thực thi kỹ thuật từ mã nguồn, CSDL/API đến triển khai và tổng hợp hồ sơ dự án. |
| Văn Lê Tiến Hùng | Định hướng ý tưởng, thiết kế khung giao diện (Wireframe) và luồng thao tác người dùng; rà soát bố cục đa thiết bị, kiểm thử thao tác bản nháp & luồng lưu dữ liệu; thiết lập/kiểm tra Google Analytics 4, đánh giá tốc độ tải trang; thực hiện UI/UX Peer Review và kiểm tra video demo. | Đóng góp định hướng giao diện/trải nghiệm người dùng, kiểm thử luồng dữ liệu, theo dõi GA4 và phản hồi Peer Review. |
| Nguyễn Hải Đăng | Chưa ghi nhận phần việc thực hiện hay đóng góp cụ thể trong quá trình triển khai dự án. | Mức độ tham gia và đóng góp thực tế chưa rõ ràng; cần đối chiếu thêm với lịch sử commit/bàn giao của nhóm. |
| Phạm Minh Phúc | Kiểm thử thủ công (Manual QA) các tính năng tương tác (`doc/qa-test-cases.md`), kiểm thử và chụp ảnh giao diện đa thiết bị Mobile/Tablet/Desktop (`doc/responsive/`), rà soát và hoàn thiện báo cáo Self-Report 5 Sprint cá nhân. | Hoàn thành đầy đủ các đầu việc kiểm thử chức năng, kiểm tra responsive đa màn hình và cập nhật minh chứng báo cáo 5 Sprint theo đúng quy trình Pull Request của nhóm. |

## 2. Chi tiết tự đánh giá theo từng thành viên

### 2.1. Tôn Thất Dương Đạt
- **Phần việc phụ trách:** Khởi tạo và tổ chức repository GitHub (nhánh, Issue, Pull Request); xây dựng giao diện và xử lý logic các màn hình chức năng (Trang chủ, Thêm chi, Quét hóa đơn, Cá nhân); thiết kế lược đồ cơ sở dữ liệu quan hệ (ERD), tích hợp PostgreSQL/Supabase và API backend; triển khai hệ thống lên Vercel, cấu hình biến môi trường, đọc log xử lý lỗi runtime/kết nối và cập nhật hoàn chỉnh `README.md` cùng thư mục `doc/`.
- **Tự đánh giá & đóng góp:** Đảm nhận xuyên suốt mảng kỹ thuật cốt lõi từ khởi tạo mã nguồn, giao diện chức năng, CSDL/API đến triển khai thực tế và hoàn thiện hồ sơ nộp bài cho ứng dụng AI Smart Expense.
- **Điểm mạnh:** Kiên trì lần theo lỗi runtime/kết nối API khi triển khai; giữ được sự đồng bộ giữa đặc tả kỹ thuật, lược đồ dữ liệu, mã nguồn và tài liệu dự án.
- **Khó khăn & bài học rút ra:** Việc cấu hình biến môi trường triển khai, kết nối PostgreSQL/Supabase và rà soát log giữa các bản deploy tốn nhiều thời gian kiểm tra. Bài học rút ra là luôn kiểm tra kỹ chuỗi kết nối, redeploy đúng bản cập nhật và đối chiếu log trước khi chốt tính năng.
- **Hướng cải thiện:** Tiếp tục bổ sung kiểm thử tự động cho các endpoint API và duy trì tài liệu kỹ thuật gọn gàng, dễ theo dõi.

### 2.2. Văn Lê Tiến Hùng
- **Phần việc phụ trách:** Định hướng ý tưởng dự án, thiết kế khung giao diện (Wireframe) và phác thảo luồng thao tác người dùng; rà soát bố cục hiển thị trên các kích thước màn hình, kiểm thử thao tác bản nháp và đối chiếu dữ liệu hiển thị (số dư, giao dịch, danh mục, ngân sách, hũ tiết kiệm); thiết lập và kiểm tra theo dõi hành vi người dùng (Google Analytics 4), đánh giá tốc độ tải trang; thực hiện đánh giá UI/UX Peer Review, tổng hợp phản hồi từ các nhóm khác và kiểm tra video demo trước khi nộp.
- **Tự đánh giá & đóng góp:** Đảm nhận định hướng giao diện/trải nghiệm người dùng ngay từ giai đoạn Wireframe, kiểm thử các luồng hiển thị và lưu dữ liệu thực tế, theo dõi thống kê truy cập GA4 và tổng hợp phản hồi Peer Review cho dự án.
- **Điểm mạnh:** Nhạy bén với góc nhìn người dùng cuối khi rà soát bố cục, thao tác bản nháp và phản hồi giao diện; phối hợp sát sao trong khâu kiểm thử trải nghiệm và đánh giá chéo giữa các nhóm.
- **Khó khăn & bài học rút ra:** Một số ý tưởng bố cục và luồng thao tác trên Wireframe cần điều chỉnh để tương thích với cấu trúc dữ liệu và khả năng hiển thị trên màn hình nhỏ. Bài học rút ra là luôn kiểm thử chéo trên nhiều kích thước màn hình và đối chiếu dữ liệu thực tế sau khi tích hợp API.
- **Hướng cải thiện:** Nâng cao thêm kỹ năng xử lý trực tiếp mã nguồn giao diện và mở rộng kịch bản kiểm thử trải nghiệm người dùng cho các phiên bản tiếp theo.

### 2.3. Nguyễn Hải Đăng
- **Phần việc phụ trách:** Chưa ghi nhận đầu việc, mã nguồn hay nhiệm vụ cụ thể nào được hoàn thành hoặc đóng góp vào quá trình làm việc của nhóm.
- **Tự đánh giá & đóng góp:** Chưa thể hiện sự tham gia và đóng góp thực tế vào sản phẩm và các đầu việc chung của dự án; các thành viên khác không ghi nhận đóng góp từ thành viên này.
- **Ghi chú:** Nếu thành viên có minh chứng hoặc báo cáo bổ sung theo từng Sprint, cần cung cấp cụ thể để đối chiếu theo quy định đánh giá cá nhân của môn học.

### 2.4. Phạm Minh Phúc
- **Phần việc phụ trách:** Lập bảng kiểm thử thủ công (Manual QA) cho các tính năng tương tác (Form, Modal, Quét hóa đơn tạo bản nháp, Lọc lịch sử) tại `doc/qa-test-cases.md`; kiểm thử và chụp ảnh giao diện hiển thị trên đủ 3 kích thước màn hình (Mobile, Tablet, Desktop) tại `doc/responsive/`; rà soát và hoàn thiện báo cáo Self-Report 5 Sprint cá nhân.
- **Tự đánh giá & đóng góp:** Hoàn thành đầy đủ các đầu việc kiểm thử chức năng, kiểm tra độ tương thích giao diện đa thiết bị (responsive) và cập nhật minh chứng báo cáo cá nhân theo đúng quy trình nhánh Pull Request của nhóm.
- **Ghi chú:** Đã bổ sung đầy đủ bảng test cases chi tiết, bộ ảnh chụp màn hình 3 kích thước và bảng báo cáo tiến độ qua 5 Sprint để phục vụ đánh giá cá nhân.

## 3. Báo cáo Self-Report theo 5 Sprint

### Báo cáo 5 Sprint — Tôn Thất Dương Đạt

| Sprint | Công việc của Tôn Thất Dương Đạt | Kết quả & lưu ý |
| :--- | :--- | :--- |
| **Sprint 1** | Khởi tạo và tổ chức repository GitHub, thiết lập quy trình nhánh, Issue và Pull Request. | Thiết lập được nền tảng quản lý mã nguồn và quy trình làm việc nhóm rõ ràng. |
| **Sprint 2** | Xây dựng giao diện và xử lý logic các màn hình chức năng (Trang chủ, Thêm chi, Quét hóa đơn, Cá nhân). | Các màn hình hoạt động đúng luồng điều hướng và thao tác nhập liệu/bản nháp. |
| **Sprint 3** | Thiết kế lược đồ cơ sở dữ liệu quan hệ (ERD), tích hợp PostgreSQL/Supabase và xây dựng API backend. | Kết nối thành công dữ liệu thực tế qua API; các thao tác lưu và truy vấn hoạt động ổn định. |
| **Sprint 4** | Triển khai hệ thống lên Vercel, cấu hình biến môi trường, đọc log và xử lý lỗi runtime/kết nối API. | Ứng dụng chạy ổn định trên môi trường thật; kiểm soát tốt lỗi kết nối và biến môi trường. |
| **Sprint 5** | Cập nhật hoàn chỉnh `README.md`, hệ thống hóa thư mục tài liệu `doc/` và chốt danh sách đầu mục nộp bài trên GitHub. | Hoàn thiện hồ sơ tài liệu và các đầu mục nộp bài theo đúng yêu cầu. |

---

### Báo cáo 5 Sprint — Văn Lê Tiến Hùng

| Sprint | Công việc của Văn Lê Tiến Hùng | Kết quả & lưu ý |
| :--- | :--- | :--- |
| **Sprint 1** | Định hướng ý tưởng dự án, thiết kế khung giao diện (Wireframe) và phác thảo luồng thao tác người dùng. | Định hình rõ cấu trúc giao diện và luồng trải nghiệm ngay từ giai đoạn lập kế hoạch. |
| **Sprint 2** | Rà soát bố cục hiển thị trên các kích thước màn hình, kiểm thử thao tác bản nháp và góp ý chỉnh sửa trải nghiệm. | Đảm bảo giao diện gọn gàng, dễ dùng trên nhiều thiết bị; tiếp tục rà soát chi tiết hiển thị. |
| **Sprint 3** | Đối chiếu dữ liệu hiển thị trên giao diện (số dư, giao dịch, danh mục, ngân sách, hũ tiết kiệm) và kiểm thử luồng lưu dữ liệu. | Dữ liệu hiển thị bám sát nhu cầu quản lý chi tiêu cá nhân hằng ngày. |
| **Sprint 4** | Thiết lập và kiểm tra theo dõi hành vi người dùng (Google Analytics 4), đánh giá tốc độ tải trang và trải nghiệm sử dụng thực tế. | Ghi nhận được dữ liệu truy cập thực tế và phản hồi trải nghiệm sau khi triển khai. |
| **Sprint 5** | Thực hiện đánh giá UI/UX Peer Review, tổng hợp phản hồi từ các nhóm khác và kiểm tra video demo trước khi nộp. | Hoàn thiện phần phản hồi peer review và kiểm tra luồng minh họa trước khi nộp bài. |
### Báo cáo 5 Sprint – Phạm Minh Phúc

| Sprint | Công việc của Phạm Minh Phúc | Kết quả & lưu ý |
| :--- | :--- | :--- |
| **Sprint 1** | Nghiên cứu yêu cầu bài toán quản lý chi tiêu cá nhân AI Smart Expense, tham gia thống nhất các luồng chức năng cốt lõi (Đăng nhập, Thiết lập số dư, Thêm khoản chi, Quét hóa đơn AI). | Nắm rõ luồng nghiệp vụ và cấu trúc các màn hình chính làm cơ sở xây dựng kịch bản kiểm thử. |
| **Sprint 2** | Phối hợp kiểm tra giao diện nhập liệu (Form thêm khoản chi, Modal chỉnh sửa) và kiểm tra tính hợp lệ dữ liệu đầu vào (validation số tiền, trường bắt buộc). | Đảm bảo form chặn dữ liệu trống hoặc sai định dạng; lưu ý đồng bộ thông báo lỗi rõ ràng trên giao diện. |
| **Sprint 3** | Trải nghiệm và rà soát luồng Quét hóa đơn AI tạo bản nháp cùng chức năng lọc lịch sử giao dịch theo từ khóa, danh mục và thời gian. | Xác nhận luồng trích xuất bản nháp và bộ lọc hoạt động ổn định; lưu ý kiểm tra độ co giãn bảng trên màn hình nhỏ. |
| **Sprint 4** | Lập bảng kiểm thử thủ công cho các tính năng tương tác (`doc/qa-test-cases.md`) và chụp ảnh kiểm thử giao diện trên đủ 3 kích thước Mobile, Tablet, Desktop (`doc/responsive/`). | Hoàn thành 100% test cases đạt yêu cầu và lưu trữ đầy đủ bộ ảnh chứng minh responsive không vỡ khung. |
| **Sprint 5** | Rà soát toàn bộ minh chứng kiểm thử, cập nhật báo cáo tự đánh giá 5 Sprint (`doc/TU-DANH-GIA-5-SPRINT.md`, `doc/BANG-TU-DANH-GIA-4-THANH-VIEN.md`) và tạo Pull Request (`docs/phuc-test-responsive`) vào `main`. | Hoàn tất đầy đủ tài liệu phần việc được giao đúng quy trình Git Flow trước hạn nộp bài. |
## 4. Khung Self-Report 5 Sprint dành cho các thành viên còn lại

Các thành viên **Nguyễn Hải Đăng** và **Phạm Minh Phúc** có thể điền trực tiếp vào khung dưới đây cho từng Sprint (từ Sprint 1 đến Sprint 5):

1. **Sprint 1:** Công việc phụ trách — Kết quả đạt được — Khó khăn/lưu ý.
2. **Sprint 2:** Công việc phụ trách — Kết quả đạt được — Khó khăn/lưu ý.
3. **Sprint 3:** Công việc phụ trách — Kết quả đạt được — Khó khăn/lưu ý.
4. **Sprint 4:** Công việc phụ trách — Kết quả đạt được — Khó khăn/lưu ý.
5. **Sprint 5:** Công việc phụ trách — Kết quả đạt được — Khó khăn/lưu ý.
