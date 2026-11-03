# Giải thích logic lời chào theo thời gian

Trang web hiển thị lời chào phù hợp ngay khi được tải. Mã JavaScript được đặt ở cuối `baitap8thachthuc.html`, sau phần tử có `id="welcome-message"` để trình duyệt đã tạo phần tử này trước khi chạy script.

## Cách hoạt động

1. `document.getElementById('welcome-message')` dùng DOM (Document Object Model) để tìm phần tử HTML sẽ chứa lời chào.
2. `new Date().getHours()` tạo thời điểm hiện tại và lấy giờ theo giờ địa phương của thiết bị, với giá trị từ `0` đến `23`.
3. Các điều kiện phân loại giờ:
   - Từ 5 đến trước 12 giờ: **Chào buổi sáng!**
   - Từ 12 đến trước 18 giờ: **Chào buổi chiều!**
   - Từ 18 đến trước 22 giờ: **Chào buổi tối!**
   - Các giờ còn lại: **Chúc bạn một đêm an lành!**
4. `welcomeMessage.innerHTML` chèn lời chào vào phần tử trang dưới dạng HTML. Trong ví dụ, thẻ `<strong>` làm nổi bật nội dung.

Phần tử thông báo có `role="status"` và `aria-live="polite"` để công nghệ hỗ trợ có thể thông báo nội dung khi được cập nhật.

## Liên kết GitHub

https://github.com/DinhXuanPhuong/javascript
