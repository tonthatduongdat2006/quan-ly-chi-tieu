# BẢN TỰ ĐÁNH GIÁ BẢN THÂN & BÁO CÁO 5 SPRINT — TÔN THẤT DƯƠNG ĐẠT

* **Họ và tên:** Tôn Thất Dương Đạt
* **MSSV:** 24090061
* **Nhóm:** Nhóm 6
* **Dự án:** Quản Lý Chi Tiêu Cá Nhân — AI Smart Expense
* **Tỷ lệ đóng góp nhóm:** Tôn Thất Dương Đạt (30%) — Văn Lê Tiến Hùng (30%) — Nguyễn Hải Đăng (20%) — Phạm Minh Phúc (20%)
* **Vai trò thực tế:** Phụ trách chính về kỹ thuật, kiến trúc hệ thống, chức năng cốt lõi, AI nhập nhanh, CSDL/API, triển khai, log và tài liệu dự án (phối hợp triển khai kỹ thuật cùng **claude**, tiếp thu góp ý xây dựng web từ **Văn Lê Tiến Hùng**).

---

## 1. Tổng quan công việc & mức độ đóng góp

Trong suốt quá trình thực hiện dự án **AI Smart Expense (Nhóm 6)**, **Tôn Thất Dương Đạt** (mức phân bổ ghi nhận **30%**; cùng **Văn Lê Tiến Hùng 30%**, **Nguyễn Hải Đăng 20%**, **Phạm Minh Phúc 20%**) đảm nhận công việc kỹ thuật, triển khai và tài liệu (phối hợp chặt chẽ cùng **claude** để đẩy nhanh tiến độ và hoàn thiện sản phẩm), kết hợp tiếp thu các ý kiến góp ý, đề xuất xây dựng web từ **Văn Lê Tiến Hùng**.

| Hạng mục phụ trách | Nội dung thực hiện chi tiết |
| :--- | :--- |
| **Thiết kế & kiến trúc hệ thống** | Chốt bài toán quản lý chi tiêu cá nhân, thiết kế luồng màn hình, chuẩn hóa đặc tả yêu cầu (PRD), kiến trúc hệ thống, lược đồ cơ sở dữ liệu (ERD) và đặc tả API. |
| **Phát triển chức năng cốt lõi** | Xây dựng các luồng đăng ký/đăng nhập, quản lý tài khoản, số dư đầu kỳ, danh mục thu/chi, quản lý giao dịch và tổng hợp số liệu bảng điều khiển. |
| **Tích hợp AI nhập nhanh** | Xây dựng luồng nhập nhanh chi tiêu bằng tin nhắn văn bản và quét ảnh hóa đơn (bill), tạo bản nháp để người dùng kiểm tra, chỉnh sửa trước khi xác nhận lưu. |
| **Cơ sở dữ liệu, triển khai & log** | Thiết lập cơ sở dữ liệu, cấu hình biến môi trường, triển khai ứng dụng lên nền tảng cloud (Vercel/Supabase), đọc log và xử lý các lỗi kết nối/xác thực khi chạy thực tế. |
| **Tài liệu & tổng hợp báo cáo** | Biên soạn bộ tài liệu hoàn thiện hệ thống, hồ sơ bổ sung, bảng đánh giá thành viên, báo cáo 5 Sprint và cập nhật `README.md` cho kho mã nguồn của nhóm. |

---

## 2. Báo cáo Self-Report theo 5 Sprint (Tôn Thất Dương Đạt — 40%)

| Sprint | Mục tiêu & liên kết tiêu chí | Công việc đã thực hiện | Kết quả & ghi chú |
| :--- | :--- | :--- | :--- |
| **Sprint 1** | Lập kế hoạch, phân vai, wireframe/ERD & quản lý GitHub (Task 1) | Tham gia định hướng dự án, thiết kế luồng hệ thống và lược đồ dữ liệu/ERD, khởi tạo và tổ chức repository, tạo Issue và thực hiện quy trình nhánh + Pull Request. | Thiết lập được nền tảng quản lý mã nguồn, Issue và Pull Request; ghi nhận tỷ lệ đóng góp (Đạt 40%, Hùng 25%, Đăng 20%, Phúc 15%). |
| **Sprint 2** | Giao diện đa màn hình & tương tác người dùng (Task 2) | Xây dựng và hoàn thiện giao diện các màn hình chính (Trang chủ, Thêm chi, Quét hóa đơn, Cá nhân), biểu mẫu nhập liệu, chọn danh mục và thao tác kiểm tra bản nháp. | Các màn hình hoạt động đúng luồng điều hướng và hiển thị trên nhiều kích thước màn hình; cần lưu ý rà soát bố cục màn hình lớn và thư viện CSS theo đề bài. |
| **Sprint 3** | Cơ sở dữ liệu PostgreSQL & nội dung động (Task 3) | Thiết kế cơ sở dữ liệu quan hệ, tích hợp PostgreSQL qua dịch vụ API và hiển thị dữ liệu động theo tài khoản. | Đã kết nối dữ liệu thực tế cho các luồng giao dịch, số dư và danh mục; cần kiểm tra kỹ các endpoint xác thực và xác nhận bản nháp khi thao tác. |
| **Sprint 4** | Tối ưu hóa hiệu năng, theo dõi & ghi log (Task 4) | Rà soát lỗi runtime/deploy, kiểm tra log trên nền tảng triển khai, cấu hình biến môi trường và ghi nhận các nội dung tối ưu hóa, theo dõi hành vi và ghi log. | Phát hiện và lần theo các lỗi API/môi trường khi deploy; rút ra kinh nghiệm đối chiếu kỹ biến môi trường và log trước khi chốt bản chạy chính thức. |
| **Sprint 5** | UI/UX Peer Review, tài liệu & hoàn tất nộp bài (Task 5 & Submission) | Thực hiện đánh giá UI/UX, rà soát và phản hồi góp ý, cập nhật tài liệu `README.md` và thư mục tài liệu, gắn link video demo và chuẩn bị báo cáo tự đánh giá 5 Sprint. | Hoàn thiện tài liệu tổng hợp và danh sách đầu mục nộp bài theo yêu cầu của giảng viên. |

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
