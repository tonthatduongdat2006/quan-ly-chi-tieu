# PRODUCT REQUIREMENTS DOCUMENT (PRD) — AI SMART EXPENSE (NHÓM 6)

Tài liệu đặc tả yêu cầu chức năng (**PRD**) cho ứng dụng **Quản Lý Chi Tiêu Cá Nhân — AI Smart Expense (Nhóm 6)**, trình bày theo đúng cấu trúc mẫu của giảng viên (`Mô tả`, `Actor`, `Preconditions`, `Luồng chính`, `Business Rules`, `Alternative / Error Flows`, `Acceptance Criteria`, `Ví dụ Edge Case`).

---

### [FR-EXP-01] Đăng ký, đăng nhập và thiết lập số dư đầu kỳ

**Mô tả**

Hệ thống cho phép người dùng tạo tài khoản cá nhân, đăng nhập vào ứng dụng và thiết lập số dư ban đầu để quản lý dữ liệu thu/chi riêng biệt.

**Actor**

Người dùng cá nhân (Khách chưa đăng nhập hoặc Người dùng đã đăng nhập).

**Preconditions**

- Người dùng truy cập được vào trang web ứng dụng **AI Smart Expense**.
- Đối với chức năng đăng nhập và thiết lập số dư đầu kỳ: người dùng đã có tài khoản hợp lệ.

**Luồng chính**

1. Người dùng mở màn hình **Đăng ký** hoặc **Đăng nhập**.
2. Người dùng nhập thông tin tài khoản (Email, Mật khẩu, Tên hiển thị).
3. Người dùng nhấn nút **Đăng ký** hoặc **Đăng nhập**.
4. Hệ thống kiểm tra tính hợp lệ của thông tin và đối chiếu cơ sở dữ liệu.
5. Nếu hợp lệ, hệ thống khởi tạo phiên làm việc và chuyển người dùng vào màn hình **Tổng quan**.
6. Người dùng nhập **Số dư đầu kỳ** (nếu mới bắt đầu) và nhấn **Lưu**.
7. Hệ thống cập nhật số dư đầu kỳ và hiển thị số dư hiện tại tương ứng.

**Business Rules**

- Email đăng ký phải đúng định dạng và không được trùng với tài khoản đã tồn tại.
- Mật khẩu phải được mã hóa/băm an toàn trước khi lưu vào cơ sở dữ liệu, tuyệt đối không lưu dạng văn bản thuần.
- Số dư đầu kỳ phải là số nguyên không âm (`>= 0`), đơn vị VNĐ.
- Mỗi người dùng chỉ được truy cập và chỉnh sửa dữ liệu giao dịch thuộc về tài khoản của chính mình.

**Alternative / Error Flows**

- Nếu email đã tồn tại khi đăng ký, hệ thống từ chối tạo tài khoản và hiển thị thông báo lỗi rõ ràng.
- Nếu nhập sai email hoặc mật khẩu khi đăng nhập, hệ thống không cấp phiên làm việc và yêu cầu nhập lại.
- Nếu nhập số dư đầu kỳ là số âm hoặc ký tự không hợp lệ, hệ thống từ chối lưu và giữ nguyên giá trị cũ.

**Acceptance Criteria**

- **AC-01:** Người dùng nhập email hợp lệ chưa tồn tại và mật khẩu đúng quy định -> hệ thống tạo tài khoản thành công.
- **AC-02:** Người dùng đăng ký với email đã tồn tại -> hệ thống không tạo tài khoản và hiển thị thông báo trùng email.
- **AC-03:** Người dùng đăng nhập đúng thông tin -> hệ thống điều hướng vào trang **Tổng quan** với dữ liệu riêng của người dùng.
- **AC-04:** Người dùng cập nhật số dư đầu kỳ hợp lệ -> **Số dư hiện tại** trên trang Tổng quan được tính lại chính xác ngay lập tức.

**Ví dụ Edge Case**

Người dùng nhập số dư đầu kỳ là `-50000` hoặc chuỗi chữ `"abc"`.

**Expected Result:** Hệ thống từ chối lưu dữ liệu, hiển thị cảnh báo nhập số hợp lệ và không làm sai lệch số dư hiện tại.

---

### [FR-EXP-02] Ghi chép giao dịch thu/chi thủ công

**Mô tả**

Hệ thống cho phép người dùng thêm mới một giao dịch thu nhập hoặc chi tiêu bằng cách nhập trực tiếp thông tin vào biểu mẫu trên ứng dụng.

**Actor**

Người dùng đã đăng nhập vào hệ thống.

**Preconditions**

- Người dùng đã đăng nhập thành công.
- Hệ thống đã tải danh sách danh mục thu/chi hợp lệ.

**Luồng chính**

1. Người dùng mở biểu mẫu **Thêm giao dịch** trên trang Tổng quan.
2. Hệ thống hiển thị form nhập giao dịch gồm: Loại giao dịch (`Thu` / `Chi`), Số tiền, Danh mục, Ngày giao dịch và Ghi chú.
3. Người dùng nhập đầy đủ thông tin giao dịch.
4. Người dùng nhấn nút **Lưu giao dịch**.
5. Hệ thống kiểm tra tính hợp lệ của dữ liệu.
6. Nếu dữ liệu hợp lệ, hệ thống lưu giao dịch mới vào cơ sở dữ liệu.
7. Hệ thống hiển thị thông báo lưu thành công, cập nhật danh sách giao dịch và tính lại **Số dư hiện tại**.

**Business Rules**

- Loại giao dịch (`income` hoặc `expense`), số tiền và danh mục là các trường bắt buộc.
- Số tiền giao dịch phải là số nguyên dương (`amount > 0`), tính theo đơn vị VNĐ.
- Một thao tác bấm lưu của người dùng chỉ được tạo tối đa **một giao dịch**, kể cả khi nút bấm bị nhấn nhiều lần liên tiếp do double-click hoặc mạng chậm.
- Giao dịch sau khi tạo phải được gắn với đúng tài khoản người dùng đang đăng nhập và có nguồn tạo là `manual`.

**Alternative / Error Flows**

- Nếu thiếu số tiền hoặc nhập số tiền `<= 0`, hệ thống không tạo giao dịch và hiển thị thông báo lỗi validation.
- Nếu quá trình lưu vào cơ sở dữ liệu gặp lỗi kết nối, hệ thống thông báo lỗi và không ghi nhận giao dịch nửa vời.
- Nếu cùng một yêu cầu lưu bị gửi lại nhiều lần do retry, hệ thống không tạo thêm giao dịch trùng lặp.

**Acceptance Criteria**

- **AC-01:** Người dùng nhập đầy đủ thông tin hợp lệ và nhấn **Lưu giao dịch** -> hệ thống tạo đúng một giao dịch mới và hiển thị thông báo thành công.
- **AC-02:** Người dùng để trống trường số tiền hoặc nhập `0` -> hệ thống không tạo giao dịch và hiển thị lỗi validation.
- **AC-03:** Người dùng nhấn nút **Lưu giao dịch** nhiều lần liên tiếp trong thời gian ngắn -> hệ thống chỉ ghi nhận một giao dịch duy nhất.
- **AC-04:** Sau khi lưu giao dịch **Chi** `50.000đ`, **Số dư hiện tại** giảm đúng `50.000đ` và **Tổng chi** tăng thêm `50.000đ`.

**Ví dụ Edge Case**

Người dùng nhấn nút **Lưu giao dịch** 5 lần liên tiếp trong vòng 1 giây khi mạng đang chập chờn.

**Expected Result:** Hệ thống chỉ ghi nhận **một giao dịch duy nhất** cho thao tác gửi đó và vô hiệu hóa nút gửi trong lúc đang xử lý.

---

### [FR-EXP-03] Nhập nhanh chi tiêu bằng tin nhắn văn bản AI

**Mô tả**

Hệ thống cho phép người dùng nhập một câu mô tả tự nhiên bằng tiếng Việt (có thể chứa một hoặc nhiều khoản thu/chi) để AI tự động phân tích thành danh sách **Bản nháp giao dịch**.

**Actor**

Người dùng đã đăng nhập vào hệ thống.

**Preconditions**

- Người dùng đã đăng nhập thành công.
- Dịch vụ AI Backend (`POST /api/ai/parse-text`) đã được cấu hình API key và hoạt động bình thường.

**Luồng chính**

1. Người dùng mở khung **AI Nhập Nhanh** và chọn chế độ **Nhập tin nhắn**.
2. Hệ thống hiển thị ô nhập văn bản tự nhiên (ví dụ: *"Sáng ăn phở 45k, đổ xăng 60k"*).
3. Người dùng nhập nội dung mô tả các khoản thu/chi và nhấn **Phân tích AI**.
4. Hệ thống kiểm tra dữ liệu đầu vào và gửi yêu cầu tới endpoint `POST /api/ai/parse-text`.
5. Mô hình AI phân tích câu văn và trả về danh sách các mục giao dịch dự kiến (Loại, Số tiền, Danh mục gợi ý, Ghi chú, Ngày).
6. Hệ thống hiển thị các mục này dưới dạng **Bản nháp (Draft)** để người dùng kiểm tra trước khi lưu.

**Business Rules**

- Nội dung tin nhắn đầu vào không được để trống, không được chỉ chứa khoảng trắng và không vượt quá **2.000 ký tự**.
- Kết quả trả về từ AI chỉ ở trạng thái **Bản nháp (`pending`)**, tuyệt đối chưa được cộng/trừ vào số dư chính thức.
- Nếu câu văn chứa nhiều khoản chi tiêu khác nhau, AI phải tách thành các dòng bản nháp độc lập tương ứng.
- Nếu AI không nhận diện được danh mục cụ thể, hệ thống tự động gán về danh mục mặc định (`Khác`).

**Alternative / Error Flows**

- Nếu người dùng để trống ô nhập hoặc chỉ nhập dấu cách, hệ thống không gọi API AI và hiển thị cảnh báo nhập nội dung.
- Nếu dịch vụ AI quá tải (`429`), hết hạn mức hoặc lỗi xác thực, hệ thống hiển thị thông báo thân thiện và gợi ý người dùng nhập thủ công.
- Nếu câu văn không chứa thông tin tài chính hợp lệ (ví dụ: *"Hôm nay trời đẹp quá"*), hệ thống thông báo không tìm thấy khoản giao dịch nào trong câu.

**Acceptance Criteria**

- **AC-01:** Người dùng nhập *"Ăn trưa 45k, mua sách 120k"* và nhấn **Phân tích AI** -> hệ thống trả về 2 bản nháp với số tiền lần lượt là `45.000đ` và `120.000đ`.
- **AC-02:** Người dùng nhập toàn khoảng trắng (`"     "`) -> hệ thống từ chối gửi yêu cầu và hiển thị thông báo lỗi.
- **AC-03:** Khi AI trả về bản nháp -> **Số dư hiện tại** trên trang Tổng quan chưa thay đổi cho đến khi người dùng xác nhận lưu.
- **AC-04:** Khi API AI gặp sự cố mạng -> ứng dụng không bị treo và hiển thị thông báo lỗi rõ ràng.

**Ví dụ Edge Case**

Người dùng nhập chuỗi văn bản chỉ gồm dấu cách hoặc các ký tự đặc biệt vô nghĩa (`"   ???   "`).

**Expected Result:** Hệ thống không tạo bản nháp rác, hiển thị thông báo yêu cầu nhập mô tả khoản thu/chi rõ ràng.

---

### [FR-EXP-04] Quét ảnh hóa đơn bằng AI (Receipt Scan)

**Mô tả**

Hệ thống cho phép người dùng tải lên hoặc chụp ảnh hóa đơn mua sắm/ăn uống để AI tự động trích xuất thông tin thanh toán thành **Bản nháp giao dịch**.

**Actor**

Người dùng đã đăng nhập vào hệ thống.

**Preconditions**

- Người dùng đã đăng nhập thành công.
- Dịch vụ AI thị giác (`POST /api/ai/parse-receipt`) đã sẵn sàng xử lý hình ảnh.

**Luồng chính**

1. Người dùng mở khung **AI Nhập Nhanh** và chọn chế độ **Quét hóa đơn**.
2. Người dùng chọn tệp ảnh hóa đơn từ thiết bị (JPEG, PNG hoặc WebP).
3. Hệ thống kiểm tra định dạng và dung lượng tệp ảnh.
4. Người dùng nhấn **Quét hóa đơn**.
5. Hệ thống gửi ảnh tới endpoint `POST /api/ai/parse-receipt` để AI nhận diện tổng tiền, ngày hóa đơn, tên cửa hàng/ghi chú và danh mục.
6. Hệ thống hiển thị kết quả trích xuất dưới dạng **Bản nháp (Draft)** kèm xem trước thông tin để người dùng rà soát.

**Business Rules**

- Chỉ chấp nhận các định dạng ảnh hợp lệ (`image/jpeg`, `image/png`, `image/webp`).
- Dung lượng tệp ảnh tải lên không được vượt quá **5MB**.
- Kết quả trích xuất từ hóa đơn luôn ở trạng thái **Bản nháp (`pending`)**, người dùng phải kiểm tra và xác nhận mới được ghi vào sổ thu/chi.
- Không lưu trữ vĩnh viễn tệp ảnh thô của người dùng trong log hệ thống.

**Alternative / Error Flows**

- Nếu người dùng chọn tệp sai định dạng (ví dụ: `.pdf`, `.exe`, `.txt`) hoặc vượt quá `5MB`, hệ thống từ chối ngay ở bước kiểm tra và thông báo giới hạn cho phép.
- Nếu ảnh bị mờ, lóa sáng hoặc không phải hóa đơn (`receipt_unreadable`), hệ thống thông báo không thể đọc rõ hóa đơn và đề nghị chụp lại ảnh rõ nét hơn.

**Acceptance Criteria**

- **AC-01:** Người dùng tải ảnh hóa đơn siêu thị rõ nét (`< 5MB`, định dạng `.jpg`) -> hệ thống trích xuất đúng tổng tiền thanh toán và tạo bản nháp.
- **AC-02:** Người dùng tải lên tệp dung lượng `8MB` -> hệ thống từ chối tải lên và hiển thị thông báo vượt quá giới hạn 5MB.
- **AC-03:** Người dùng tải lên một bức ảnh phong cảnh không có chữ/hóa đơn -> hệ thống trả về thông báo không nhận diện được hóa đơn hợp lệ.

**Ví dụ Edge Case**

Người dùng tải lên một tệp đổi đuôi từ `.txt` sang `.jpg` hoặc ảnh hóa đơn bị mờ nhòe hoàn toàn không đọc được con số.

**Expected Result:** Hệ thống bắt lỗi an toàn (`receipt_unreadable`), không làm sập máy chủ và yêu cầu người dùng chọn ảnh hóa đơn hợp lệ khác.

---

### [FR-EXP-05] Kiểm tra, chỉnh sửa và xác nhận lưu bản nháp AI

**Mô tả**

Hệ thống cho phép người dùng rà soát, chỉnh sửa trực tiếp các thông tin trên bản nháp do AI sinh ra và bấm xác nhận để lưu thành giao dịch chính thức.

**Actor**

Người dùng đã đăng nhập vào hệ thống.

**Preconditions**

- Đã có ít nhất một **Bản nháp giao dịch** được tạo từ chức năng nhập tin nhắn AI (`FR-EXP-03`) hoặc quét hóa đơn (`FR-EXP-04`).

**Luồng chính**

1. Hệ thống hiển thị danh sách các thẻ **Bản nháp giao dịch** trên giao diện.
2. Người dùng kiểm tra từng dòng bản nháp (Loại thu/chi, Số tiền, Danh mục, Ngày giao dịch, Ghi chú).
3. Nếu phát hiện sai lệch, người dùng chỉnh sửa trực tiếp giá trị trên thẻ bản nháp hoặc xóa bỏ dòng không mong muốn.
4. Người dùng nhấn nút **Xác nhận lưu**.
5. Hệ thống kiểm tra tính hợp lệ của tất cả các dòng bản nháp được chọn lưu.
6. Hệ thống ghi các giao dịch vào cơ sở dữ liệu với nguồn tạo `ai`, xóa trạng thái bản nháp chờ và cập nhật lại **Số dư hiện tại**.

**Business Rules**

- Người dùng có toàn quyền chỉnh sửa mọi trường thông tin của bản nháp trước khi lưu.
- Số tiền sau khi người dùng chỉnh sửa vẫn phải tuân thủ quy tắc là số nguyên dương (`amount > 0`).
- Thao tác bấm **Xác nhận lưu** phải đảm bảo tính toàn vẹn: tránh lưu trùng lặp nếu người dùng bấm nhiều lần liên tiếp.
- Nếu người dùng nhấn **Hủy bản nháp**, toàn bộ bản nháp tạm thời bị loại bỏ và không làm thay đổi dữ liệu sổ thu/chi.

**Alternative / Error Flows**

- Nếu người dùng sửa số tiền trên bản nháp thành `0` hoặc để trống rồi bấm **Xác nhận lưu**, hệ thống chặn lưu và báo lỗi tại dòng đó.
- Nếu người dùng xóa hết tất cả các dòng trong danh sách bản nháp, nút **Xác nhận lưu** sẽ được ẩn hoặc vô hiệu hóa.

**Acceptance Criteria**

- **AC-01:** Bản nháp AI nhận diện nhầm `40.000đ` thành `400.000đ`, người dùng sửa lại thành `40.000đ` và nhấn **Xác nhận lưu** -> hệ thống lưu đúng `40.000đ` vào lịch sử giao dịch.
- **AC-02:** Người dùng nhấn **Hủy bản nháp** -> bản nháp biến mất khỏi màn hình và số dư không thay đổi.
- **AC-03:** Người dùng nhấn **Xác nhận lưu** 3 lần liên tiếp -> hệ thống chỉ lưu bộ giao dịch đúng một lần duy nhất.

**Ví dụ Edge Case**

AI tách ra 2 mục trong bản nháp, người dùng xóa 1 mục bị dư và sửa lại danh mục của mục còn lại rồi bấm **Xác nhận lưu**.

**Expected Result:** Hệ thống chỉ lưu **1 giao dịch duy nhất** với đúng danh mục đã được người dùng chỉnh sửa.

---

### [FR-EXP-06] Theo dõi tổng quan số dư, lọc giao dịch và thống kê ngân sách

**Mô tả**

Hệ thống hiển thị động số dư tài chính, lịch sử giao dịch có bộ lọc và biểu đồ thống kê cơ cấu chi tiêu theo danh mục/ngân sách.

**Actor**

Người dùng đã đăng nhập vào hệ thống.

**Preconditions**

- Người dùng đã đăng nhập thành công vào hệ thống.

**Luồng chính**

1. Người dùng truy cập trang **Tổng quan** hoặc **Thống kê & Ngân sách**.
2. Hệ thống truy vấn dữ liệu giao dịch và hạn mức ngân sách của người dùng từ cơ sở dữ liệu.
3. Hệ thống tính toán và hiển thị các chỉ số: **Số dư hiện tại**, **Tổng thu**, **Tổng chi**.
4. Người dùng chọn điều kiện lọc (theo Loại `Thu`/`Chi`, Danh mục, hoặc nhập từ khóa tìm kiếm).
5. Hệ thống cập nhật danh sách giao dịch hiển thị tương ứng và vẽ biểu đồ tỷ trọng chi tiêu theo danh mục.

**Business Rules**

- Các chỉ số tổng hợp (`Số dư hiện tại`, `Tổng thu`, `Tổng chi`) phải luôn khớp 100% với dữ liệu giao dịch đã xác nhận trong cơ sở dữ liệu.
- Nếu người dùng chưa có giao dịch nào, hệ thống hiển thị trạng thái rỗng thân thiện (`Chưa có giao dịch nào`) và `Tổng thu = 0đ`, `Tổng chi = 0đ`.
- Khi chi tiêu của một danh mục vượt quá hạn mức ngân sách tháng đã đặt, hệ thống hiển thị cảnh báo trực quan.

**Alternative / Error Flows**

- Nếu bộ lọc không khớp với giao dịch nào, hệ thống hiển thị thông báo *"Không tìm thấy giao dịch phù hợp"* kèm nút xóa bộ lọc nhanh.

**Acceptance Criteria**

- **AC-01:** Khi thêm hoặc xóa một giao dịch, các chỉ số **Số dư hiện tại**, **Tổng thu**, **Tổng chi** và biểu đồ thống kê tự động cập nhật chính xác.
- **AC-02:** Người dùng lọc theo danh mục **Ăn uống** -> danh sách chỉ hiển thị các giao dịch thuộc danh mục **Ăn uống**.
- **AC-03:** Chi tiêu danh mục **Ăn uống** đạt `2.200.000đ` trên hạn mức `2.000.000đ` -> thanh tiến độ hiển thị trạng thái vượt ngân sách (`110%`).

**Ví dụ Edge Case**

Tài khoản mới tạo chưa có bất kỳ giao dịch nào và số dư đầu kỳ bằng `0đ`.

**Expected Result:** Hệ thống hiển thị đầy đủ giao diện khung tổng quan với số liệu `0đ`, biểu đồ không bị lỗi chia cho 0 (`NaN`) và gợi ý người dùng tạo giao dịch đầu tiên.
