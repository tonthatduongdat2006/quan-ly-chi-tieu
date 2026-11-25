# BẢN TỰ ĐÁNH GIÁ BẢN THÂN — TÔN THẤT DƯƠNG ĐẠT

* **Họ và tên:** Tôn Thất Dương Đạt
* **MSSV:** 24090061
* **Nhóm:** Nhóm 6
* **Dự án:** Quản Lý Chi Tiêu Cá Nhân — AI Smart Expense
* **Vai trò thực tế:** Phụ trách gần như toàn bộ dự án (phối hợp cùng **claude**)

---

## 1. Tổng quan công việc & mức độ đóng góp

Trong suốt quá trình thực hiện dự án **AI Smart Expense (Nhóm 6)**, **Tôn Thất Dương Đạt** đảm nhận gần như toàn bộ khối lượng công việc kỹ thuật, triển khai và tài liệu (phối hợp chặt chẽ cùng **claude** để đẩy nhanh tiến độ và hoàn thiện sản phẩm), kết hợp tiếp thu các ý kiến góp ý, đề xuất xây dựng web từ **Văn Lê Tiến Hùng**.

| Hạng mục phụ trách | Nội dung thực hiện chi tiết |
| :--- | :--- |
| **Thiết kế & kiến trúc hệ thống** | Chốt bài toán quản lý chi tiêu cá nhân, thiết kế luồng màn hình, chuẩn hóa đặc tả yêu cầu (PRD), kiến trúc hệ thống, lược đồ cơ sở dữ liệu (ERD) và đặc tả API. |
| **Phát triển chức năng cốt lõi** | Xây dựng các luồng đăng ký/đăng nhập, quản lý tài khoản, số dư đầu kỳ, danh mục thu/chi, quản lý giao dịch và tổng hợp số liệu bảng điều khiển. |
| **Tích hợp AI nhập nhanh** | Xây dựng luồng nhập nhanh chi tiêu bằng tin nhắn văn bản và quét ảnh hóa đơn (bill), tạo bản nháp để người dùng kiểm tra, chỉnh sửa trước khi xác nhận lưu. |
| **Cơ sở dữ liệu, triển khai & log** | Thiết lập cơ sở dữ liệu, cấu hình biến môi trường, triển khai ứng dụng lên nền tảng cloud (Vercel/Supabase), đọc log và xử lý các lỗi kết nối/xác thực khi chạy thực tế. |
| **Tài liệu & tổng hợp báo cáo** | Biên soạn bộ tài liệu hoàn thiện hệ thống, hồ sơ bổ sung, bảng đánh giá thành viên và cập nhật `README.md` cho kho mã nguồn của nhóm. |

---

## 2. Tự đánh giá năng lực & điểm mạnh

* **Tinh thần trách nhiệm & gánh vác:** Chủ động đảm nhận phần lớn đầu việc từ khâu lên khung ý tưởng đến khi đưa hệ thống lên môi trường chạy thật, giữ cho dự án có sản phẩm hoạt động và tài liệu đầy đủ.
* **Khả năng bám sát & xử lý sự cố thực tế:** Khi gặp lỗi kết nối hoặc xác thực cơ sở dữ liệu trong quá trình deploy, kiên trì theo dõi log, đối chiếu biến môi trường và từng bước khoanh vùng nguyên nhân thay vì bỏ dở.
* **Kết nối giữa tài liệu và mã nguồn:** Biết đối chiếu tài liệu đặc tả với cấu trúc route/module thực tế để cập nhật đồng bộ trên kho mã nguồn GitHub.

---

## 3. Hạn chế gặp phải & bài học rút ra

* **Vướng mắc trong quá trình thực hiện:** Một số khâu cấu hình môi trường triển khai (chuỗi kết nối database, mã hóa ký tự đặc biệt trong mật khẩu, phân biệt bản deploy cũ/mới khi đọc log) tốn nhiều thời gian rà soát.
* **Bài học rút ra:** Luôn kiểm tra kỹ định dạng chuỗi kết nối trước khi lưu biến môi trường, thực hiện redeploy sau mỗi lần cập nhật cấu hình và đối chiếu đúng deployment ID khi kiểm tra log.

---

## 4. Định hướng cải thiện tiếp theo

* Tiếp tục kiểm thử đầu cuối (end-to-end) toàn bộ luồng tài khoản, giao dịch và AI nhập nhanh sau khi hoàn tất cấu hình kết nối cơ sở dữ liệu.
* Bổ sung thêm các kịch bản kiểm thử tự động cho các trường hợp dữ liệu biên và duy trì tài liệu gọn gàng, dễ theo dõi.
