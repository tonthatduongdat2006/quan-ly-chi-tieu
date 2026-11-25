# HỒ SƠ BỔ SUNG & TỰ ĐÁNH GIÁ — AI SMART EXPENSE (NHÓM 6)

Tài liệu này tổng hợp hồ sơ bổ sung, phân bổ vai trò thực tế, bảng tự đánh giá bản thân của 4 thành viên, tiến độ chức năng và danh mục bàn giao cho dự án **AI Smart Expense (Nhóm 6)**.

---

## 1. Bức tranh nhân sự & phân bổ thực tế

Khối lượng công việc thực tế của dự án **AI Smart Expense** tập trung vào sự phối hợp giữa **Tôn Thất Dương Đạt** và **claude**, kết hợp với các góp ý và đề xuất xây dựng web từ **Văn Lê Tiến Hùng**; phần của **Nguyễn Hải Đăng** và **Phạm Minh Phúc** để trống để cập nhật khi cần.

| Thành viên | Phụ trách / Vai trò thực tế | Ghi chú |
| :--- | :--- | :--- |
| **Tôn Thất Dương Đạt** | Phụ trách gần như toàn bộ (cùng **claude**): triển khai tính năng, API/CSDL, cấu hình triển khai, rà soát lỗi, kiểm thử và hoàn thiện tài liệu hệ thống. | Đầu mối chính điều phối và thực thi |
| **Văn Lê Tiến Hùng** | Góp ý và đề xuất cách xây dựng web, luồng sử dụng và định hướng giao diện/tính năng. | Đóng góp ý tưởng & phản biện hướng làm web |
| **Nguyễn Hải Đăng** | [Để trống] | [Để trống] |
| **Phạm Minh Phúc** | [Để trống] | [Để trống] |

---

## 2. Bản đánh giá bản thân (Tôn Thất Dương Đạt)

* **Khối lượng & mức độ gánh vác:** Gánh phần lớn công việc từ khâu lên ý tưởng cấu trúc, thiết kế luồng hệ thống, xây dựng/chỉnh sửa mã nguồn, cấu hình biến môi trường, kết nối cơ sở dữ liệu và triển khai, phối hợp chặt với **claude** để đẩy nhanh tiến độ và xử lý lỗi phát sinh.
* **Điểm mạnh:** Bám sát vấn đề khi hệ thống gặp trục trặc, chịu khó đọc log và lần theo chuỗi nguyên nhân thay vì bỏ dở giữa chừng; giữ được sự liền mạch giữa tài liệu thiết kế và thực tế chạy ứng dụng.
* **Vướng mắc & bài học thực tế:** Quá trình đưa hệ thống lên môi trường chạy thật gặp nhiều điểm nhạy cảm liên quan đến biến môi trường, chuỗi kết nối cơ sở dữ liệu, mã hóa ký tự đặc biệt và đối chiếu đúng bản deploy/log. Bài học lớn nhất là luôn kiểm tra đúng ngữ cảnh từng bản deploy, rà kỹ định dạng chuỗi kết nối trước khi redeploy và tách bạch rõ các bước kiểm thử.
* **Định hướng tiếp theo:** Tiếp tục hoàn thiện độ ổn định của các luồng chính (tài khoản, giao dịch, nhập nhanh AI bằng văn bản và hóa đơn), bổ sung kiểm thử cho các tình huống lỗi và giữ tài liệu cập nhật gọn rõ.

---

## 3. Ghi nhận góp ý & đề xuất xây dựng web

Trong quá trình phát triển, **Văn Lê Tiến Hùng** tham gia góp ý và đề xuất hướng xây dựng web, giúp đội ngũ rà soát lại cách tổ chức giao diện, tính thực dụng của thao tác và mức độ dễ dùng của ứng dụng quản lý chi tiêu. Các ý kiến này được **Tôn Thất Dương Đạt** cùng **claude** cân nhắc, chắt lọc và áp dụng vào phần triển khai/tài liệu theo mức độ phù hợp với thời gian và phạm vi dự án.

* **Góp ý / đề xuất từ Văn Lê Tiến Hùng:** Đóng góp góc nhìn về cách web nên được xây dựng và vận hành để phù hợp nhu cầu người dùng.
* **Phần còn lại của nhóm:** **Nguyễn Hải Đăng** và **Phạm Minh Phúc** được giữ trống tại mục này để cập nhật sau nếu có bổ sung.

---

## 4. Tiến độ & nghiệm thu chức năng hệ thống

| Cụm chức năng | Nội dung chính | Tình trạng & ghi chú |
| :--- | :--- | :--- |
| **Tài khoản & hồ sơ cá nhân** | Đăng ký, đăng nhập, quản lý phiên, thông tin người dùng và thiết lập số dư đầu kỳ. | Đã triển khai; cần kiểm thử đầu cuối sau khi thông kết nối CSDL trên môi trường chạy. |
| **Giao dịch, danh mục & tổng quan** | Quản lý thu/chi, phân loại danh mục và tổng hợp số liệu trên trang chủ/bảng điều khiển. | Đã triển khai luồng chính; đối chiếu số liệu thực tế khi kiểm thử người dùng. |
| **AI nhập nhanh (tin nhắn & hóa đơn)** | Phân tích nội dung tin nhắn hoặc ảnh hóa đơn thành bản nháp giao dịch để chỉnh sửa và xác nhận lưu. | Đã có cấu trúc module/route; rà soát thêm các trường hợp định dạng dữ liệu đặc thù. |
| **Hạ tầng triển khai & cấu hình môi trường** | Thiết lập biến môi trường, chuỗi kết nối database, deploy và theo dõi log vận hành. | Đang hoàn thiện bước xác thực kết nối CSDL trên bản deploy hiện hành. |

---

## 5. Theo dõi sự cố & quá trình hoàn thiện

| Vấn đề gặp phải | Diễn biến | Cách xử lý hiện tại |
| :--- | :--- | :--- |
| **Kết nối cơ sở dữ liệu khi chạy ứng dụng trên cloud** | Phát sinh lỗi khởi tạo/xác thực khi ứng dụng kết nối tới database trong quá trình chạy thực tế. | Rà soát lại chuỗi kết nối, cấu hình biến môi trường trên các môi trường deploy, redeploy và đối chiếu log của đúng bản deploy mới. |
| **Đọc log nhầm lần deploy hoặc bộ lọc** | Dễ nhầm lẫn giữa log của bản deploy cũ với bản deploy mới nhất sau khi sửa cấu hình. | Chuyển về xem log của đúng bản deploy hiện hành, reset bộ lọc và tạo request mới để kiểm tra kết quả thực tế. |
| **Hoàn thiện các đầu mục tài liệu bổ sung** | Cần có tài liệu đánh giá bản thân, ghi nhận phân công thực tế, tiến độ chức năng và checklist bàn giao. | Tổng hợp và cập nhật thành bản hoàn chỉnh, phản ánh đúng vai trò của từng người và giữ chỗ trống cho phần chưa điền. |

---

## 6. Danh mục kiểm tra bàn giao & nộp bài (Checklist)

* [x] **Hồ sơ đánh giá & vai trò:** Đã ghi rõ nhân sự 4 thành viên (**Tôn Thất Dương Đạt**, **Văn Lê Tiến Hùng**, **Nguyễn Hải Đăng**, **Phạm Minh Phúc**) và sự tham gia của **claude** theo đúng thực tế.
* [x] **Tài liệu kỹ thuật & quy trình:** Đối chiếu được các phần thiết kế/luồng chức năng với trạng thái triển khai thực tế của dự án **AI Smart Expense**.
* [x] **Kiểm thử & vận hành:** Đã có nhật ký các vấn đề gặp phải và cách xử lý để phục vụ báo cáo/trình bày khi cần.
* [x] **Lưu trữ & chia sẻ:** Lưu trữ trực tiếp trong thư mục `doc/` trên kho mã nguồn GitHub của nhóm để tiện theo dõi và nộp bài.
