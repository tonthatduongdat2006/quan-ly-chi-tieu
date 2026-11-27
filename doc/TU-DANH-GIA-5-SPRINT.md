# TỰ ĐÁNH GIÁ THEO 5 SPRINT (S1–S5) — NHÓM 6 (AI SMART EXPENSE)

Tài liệu tổng hợp tiến độ và tự đánh giá theo 5 Sprint (S1–S5) cho dự án **AI Smart Expense** (Nhóm 6 — Môn Web Basic / CSB25022, VNUK), đồng bộ với bảng tổng hợp 4 thành viên.

### Tỷ lệ đóng góp nhóm

| Thành viên | Tỷ lệ đóng góp | Ghi chú |
| :--- | :---: | :--- |
| **Tôn Thất Dương Đạt** | **30%** | Điều phối kỹ thuật, mã nguồn, luồng nghiệp vụ, AI nhập nhanh, CSDL/API, triển khai, log & tài liệu |
| **Văn Lê Tiến Hùng** | **30%** | Định hướng giao diện/luồng thao tác, kiểm thử luồng dữ liệu, theo dõi GA4 & UI/UX Peer Review |
| **Nguyễn Hải Đăng** | **20%** | Đối chiếu thêm minh chứng/báo cáo thực tế theo từng Sprint |
| **Phạm Minh Phúc** | **20%** | Đối chiếu thêm minh chứng/báo cáo thực tế theo từng Sprint |
| **Tổng cộng** | **100%** | — |

---

## 1. Báo cáo 5 Sprint (S1–S5) — Tôn Thất Dương Đạt

| Sprint | Mục tiêu & liên kết tiêu chí | Công việc đã thực hiện | Kết quả & ghi chú |
| :--- | :--- | :--- | :--- |
| **S1** | Lập kế hoạch, phân vai, wireframe/ERD & quản lý GitHub (Task 1) | Khởi tạo và tổ chức repository GitHub, thiết lập quy trình nhánh, Issue và Pull Request. | Thiết lập được nền tảng quản lý mã nguồn và quy trình làm việc nhóm rõ ràng. |
| **S2** | Giao diện đa màn hình & tương tác người dùng (Task 2) | Xây dựng giao diện và xử lý logic các màn hình chức năng (Trang chủ, Thêm chi, Quét hóa đơn, Cá nhân), biểu mẫu nhập liệu và thao tác bản nháp. | Các màn hình hoạt động đúng luồng điều hướng và thao tác nhập liệu/bản nháp; cần lưu ý rà soát bố cục màn hình lớn và thư viện CSS. |
| **S3** | Cơ sở dữ liệu PostgreSQL & nội dung động (Task 3) | Thiết kế lược đồ cơ sở dữ liệu quan hệ (ERD), tích hợp PostgreSQL/Supabase và xây dựng API backend. | Kết nối thành công dữ liệu thực tế qua API; các thao tác lưu và truy vấn hoạt động ổn định. |
| **S4** | Tối ưu hóa hiệu năng, theo dõi & ghi log (Task 4) | Triển khai hệ thống lên Vercel, cấu hình biến môi trường, đọc log và xử lý lỗi runtime/kết nối API. | Ứng dụng chạy ổn định trên môi trường thật; kiểm soát tốt lỗi kết nối và biến môi trường. |
| **S5** | UI/UX Peer Review, tài liệu & hoàn tất nộp bài (Task 5 & Submission) | Cập nhật hoàn chỉnh `README.md`, hệ thống hóa thư mục tài liệu `doc/` và chốt danh sách đầu mục nộp bài trên GitHub. | Hoàn thiện hồ sơ tài liệu và các đầu mục nộp bài theo đúng yêu cầu. |

---

## 2. Báo cáo 5 Sprint (S1–S5) — Văn Lê Tiến Hùng

| Sprint | Mục tiêu & liên kết tiêu chí | Công việc đã thực hiện | Kết quả & ghi chú |
| :--- | :--- | :--- | :--- |
| **S1** | Lập kế hoạch, phân vai, wireframe/ERD & quản lý GitHub (Task 1) | Định hướng ý tưởng dự án, thiết kế khung giao diện (Wireframe) và phác thảo luồng thao tác người dùng. | Định hình rõ cấu trúc giao diện và luồng trải nghiệm ngay từ giai đoạn lập kế hoạch. |
| **S2** | Giao diện đa màn hình & tương tác người dùng (Task 2) | Rà soát bố cục hiển thị trên các kích thước màn hình, kiểm thử thao tác bản nháp và góp ý chỉnh sửa trải nghiệm. | Đảm bảo giao diện gọn gàng, dễ dùng trên nhiều thiết bị; tiếp tục rà soát chi tiết hiển thị. |
| **S3** | Cơ sở dữ liệu PostgreSQL & nội dung động (Task 3) | Đối chiếu dữ liệu hiển thị trên giao diện (số dư, giao dịch, danh mục, ngân sách, hũ tiết kiệm) và kiểm thử luồng lưu dữ liệu. | Dữ liệu hiển thị bám sát nhu cầu quản lý chi tiêu cá nhân hằng ngày. |
| **S4** | Tối ưu hóa hiệu năng, theo dõi & ghi log (Task 4) | Thiết lập và kiểm tra theo dõi hành vi người dùng (Google Analytics 4), đánh giá tốc độ tải trang và trải nghiệm sử dụng thực tế. | Ghi nhận được dữ liệu truy cập thực tế và phản hồi trải nghiệm sau khi triển khai. |
| **S5** | UI/UX Peer Review, tài liệu & hoàn tất nộp bài (Task 5 & Submission) | Thực hiện đánh giá UI/UX Peer Review, tổng hợp phản hồi từ các nhóm khác và kiểm tra video demo trước khi nộp. | Hoàn thiện phần phản hồi peer review và kiểm tra luồng minh họa trước khi nộp bài. |

---

## 3. Tự đánh giá & ghi nhận các thành viên

* **Tôn Thất Dương Đạt:** Gánh phần lớn khối lượng thực thi kỹ thuật từ khởi tạo repo, giao diện/chức năng, ERD/PostgreSQL/API đến triển khai Vercel, đọc log/xử lý lỗi và tổng hợp `README.md` cùng thư mục `doc/`.
* **Văn Lê Tiến Hùng:** Đóng góp định hướng giao diện/luồng thao tác từ giai đoạn Wireframe, kiểm thử thao tác bản nháp & luồng lưu dữ liệu, theo dõi GA4/tốc độ tải trang và thực hiện UI/UX Peer Review.
* **Nguyễn Hải Đăng:** Chưa ghi nhận đầu việc, mã nguồn hay nhiệm vụ cụ thể nào được hoàn thành hoặc đóng góp vào quá trình làm việc của nhóm; cần đối chiếu thêm minh chứng/báo cáo nếu có.
* **Phạm Minh Phúc:** Chưa ghi nhận đầu việc, mã nguồn hay nhiệm vụ cụ thể nào được hoàn thành hoặc đóng góp vào quá trình làm việc của nhóm; cần đối chiếu thêm minh chứng/báo cáo nếu có.

## 4. Khung điền Self-Report 5 Sprint (S1–S5) cho thành viên còn lại

Các thành viên **Nguyễn Hải Đăng** và **Phạm Minh Phúc** điền trực tiếp từng Sprint theo mẫu: *Công việc phụ trách — Kết quả đạt được — Khó khăn/lưu ý*:

1. **S1:** ...
2. **S2:** ...
3. **S3:** ...
4. **S4:** ...
5. **S5:** ...
```[cite: 1.2]
