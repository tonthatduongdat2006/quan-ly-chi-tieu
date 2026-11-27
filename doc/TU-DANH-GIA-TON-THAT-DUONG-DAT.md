# BẢN TỰ ĐÁNH GIÁ BẢN THÂN & BÁO CÁO 5 SPRINT — TÔN THẤT DƯƠNG ĐẠT

* **Họ và tên:** Tôn Thất Dương Đạt
* **MSSV:** 24090061
* **Nhóm:** Nhóm 6
* **Dự án:** Quản Lý Chi Tiêu Cá Nhân — [AI Smart Expense](https://quan-ly-chi-tieu-sooty.vercel.app/)
* **Vai trò thực tế:** Điều phối kỹ thuật, xây dựng/chỉnh sửa mã nguồn, luồng nghiệp vụ, AI nhập nhanh (tin nhắn & hóa đơn), cơ sở dữ liệu/API, cấu hình biến môi trường, triển khai, xử lý lỗi/log và tài liệu dự án (phối hợp triển khai kỹ thuật cùng **Claude**, trao đổi và tiếp thu góp ý giao diện/trải nghiệm người dùng từ **Văn Lê Tiến Hùng**).

### Tỷ lệ đóng góp nhóm

| Thành viên | Tỷ lệ đóng góp | Ghi chú |
| :--- | :---: | :--- |
| **Tôn Thất Dương Đạt** | **30%** | Điều phối kỹ thuật, mã nguồn, luồng nghiệp vụ, AI nhập nhanh, CSDL/API, triển khai, log & tài liệu |
| **Văn Lê Tiến Hùng** | **30%** | Định hướng giao diện/luồng thao tác, kiểm thử luồng dữ liệu, theo dõi GA4 & UI/UX Peer Review |
| **Nguyễn Hải Đăng** | **20%** | Đối chiếu thêm minh chứng/báo cáo thực tế theo từng Sprint |
| **Phạm Minh Phúc** | **20%** | Đối chiếu thêm minh chứng/báo cáo thực tế theo từng Sprint |
| **Tổng cộng** | **100%** | — |

---

## 1. Tổng quan công việc & mức độ đóng góp

Trong suốt quá trình thực hiện dự án **AI Smart Expense (Nhóm 6)**, **Tôn Thất Dương Đạt** (mức phân bổ ghi nhận **30%**) gánh phần lớn khối lượng thực thi kỹ thuật từ khởi tạo kho mã nguồn, phát triển chức năng, kết nối cơ sở dữ liệu/API đến triển khai, kiểm tra log và hoàn thiện hồ sơ nộp bài (phối hợp triển khai cùng **Claude**, kết hợp trao đổi luồng giao diện và trải nghiệm cùng **Văn Lê Tiến Hùng**).

| Hạng mục phụ trách | Nội dung thực hiện chi tiết |
| :--- | :--- |
| **Quản lý kho mã nguồn & quy trình Git** | Khởi tạo và tổ chức repository GitHub, thiết lập nhánh, Issue và Pull Request cho dự án. |
| **Phát triển chức năng & giao diện cốt lõi** | Xây dựng giao diện và xử lý logic các màn hình chức năng (Trang chủ, Thêm chi, Quét hóa đơn, Cá nhân), tài khoản, số dư đầu kỳ, danh mục, giao dịch và tổng hợp bảng điều khiển. |
| **Tích hợp AI nhập nhanh** | Xây dựng luồng nhập nhanh chi tiêu bằng tin nhắn văn bản và quét ảnh hóa đơn (bill), tạo bản nháp để người dùng kiểm tra, chỉnh sửa trước khi xác nhận lưu. |
| **Cơ sở dữ liệu, API & triển khai** | Thiết kế lược đồ cơ sở dữ liệu quan hệ (`profiles`, `categories`, `transactions`, `budgets`, `savings_jars`), tích hợp PostgreSQL/Supabase, xây dựng API backend, triển khai lên [Vercel](https://vercel.com/quan-ly-chi-tieu-group6/quan-ly-chi-tieu/settings/domains), cấu hình biến môi trường, đọc log và xử lý lỗi runtime/kết nối. |
| **Tài liệu & tổng hợp nộp bài** | Cập nhật hoàn chỉnh `README.md`, hệ thống hóa thư mục tài liệu `doc/`, tổng hợp bảng tự đánh giá thành viên, báo cáo 5 Sprint và chốt danh sách đầu mục nộp bài trên GitHub. |

---

## 2. Báo cáo Self-Report theo 5 Sprint

| Sprint | Mục tiêu & liên kết tiêu chí | Công việc đã thực hiện | Kết quả & ghi chú |
| :--- | :--- | :--- | :--- |
| **Sprint 1** | Lập kế hoạch, phân vai, wireframe/ERD & quản lý GitHub (Task 1) | Khởi tạo và tổ chức repository GitHub, thiết lập quy trình nhánh, Issue và Pull Request. | Thiết lập được nền tảng quản lý mã nguồn và quy trình làm việc nhóm rõ ràng. |
| **Sprint 2** | Giao diện đa màn hình & tương tác người dùng (Task 2) | Xây dựng giao diện và xử lý logic các màn hình chức năng (Trang chủ, Thêm chi, Quét hóa đơn, Cá nhân), biểu mẫu nhập liệu và thao tác bản nháp. | Các màn hình hoạt động đúng luồng điều hướng và thao tác nhập liệu/bản nháp; cần lưu ý rà soát bố cục màn hình lớn và thư viện CSS theo đề bài. |
| **Sprint 3** | Cơ sở dữ liệu PostgreSQL & nội dung động (Task 3) | Thiết kế lược đồ cơ sở dữ liệu quan hệ (ERD), tích hợp PostgreSQL/Supabase và xây dựng API backend. | Kết nối thành công dữ liệu thực tế qua API; các thao tác lưu và truy vấn hoạt động ổn định. |
| **Sprint 4** | Tối ưu hóa hiệu năng, theo dõi & ghi log (Task 4) | Triển khai hệ thống lên Vercel, cấu hình biến môi trường, đọc log và xử lý lỗi runtime/kết nối API. | Ứng dụng chạy ổn định trên môi trường thật; kiểm soát tốt lỗi kết nối và biến môi trường. |
| **Sprint 5** | UI/UX Peer Review, tài liệu & hoàn tất nộp bài (Task 5 & Submission) | Cập nhật hoàn chỉnh `README.md`, hệ thống hóa thư mục tài liệu `doc/` và chốt danh sách đầu mục nộp bài trên GitHub. | Hoàn thiện hồ sơ tài liệu và các đầu mục nộp bài theo đúng yêu cầu của giảng viên. |

---

## 3. Tự đánh giá năng lực & điểm mạnh

* **Tinh thần trách nhiệm:** Đảm nhận từ khâu lên khung ý tưởng đến khi đưa hệ thống lên môi trường chạy thật, giữ cho dự án có sản phẩm hoạt động và tài liệu đầy đủ.
* **Khả năng bám sát & xử lý sự cố thực tế:** Khi gặp lỗi kết nối hoặc xác thực cơ sở dữ liệu trong quá trình deploy, kiên trì theo dõi log, đối chiếu biến môi trường và từng bước khoanh vùng nguyên nhân thay vì bỏ dở.
* **Kết nối giữa tài liệu và mã nguồn:** Biết đối chiếu tài liệu đặc tả với cấu trúc route/module thực tế để cập nhật đồng bộ trên kho mã nguồn GitHub.

---

## 4. Hạn chế gặp phải & bài học rút ra

* **Vướng mắc trong quá trình thực hiện:** Một số khâu cấu hình môi trường triển khai (chuỗi kết nối database, mã hóa ký tự đặc biệt trong mật khẩu, phân biệt bản deploy cũ/mới khi đọc log) tốn nhiều thời gian rà soát.
* **Bài học rút ra:** Luôn kiểm tra kỹ định dạng chuỗi kết nối trước khi lưu biến môi trường, thực hiện redeploy sau mỗi lần cập nhật cấu hình và đối chiếu đúng deployment ID khi kiểm tra log.

---

## 5. Định hướng cải thiện tiếp theo

* Tiếp tục kiểm thử đầu cuối (end-to-end) toàn bộ luồng tài khoản, giao dịch và AI nhập nhanh sau khi hoàn tất cấu hình kết nối cơ sở dữ liệu.
* Bổ sung thêm các kịch bản kiểm thử tự động cho các trường hợp dữ liệu biên và duy trì tài liệu gọn gàng, dễ theo dõi.
