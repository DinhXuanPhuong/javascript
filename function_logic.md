# Giải thích hàm hiển thị danh sách dự án

Danh sách dự án được lưu trong mảng `projects` ở cuối `baitap8thachthuc.html`. Mỗi phần tử là một object gồm tên dự án (`name`), mô tả (`description`) và nội dung giới thiệu bản demo (`demoDescription`).

Hàm `renderProjects(projectList)` nhận mảng dữ liệu qua tham số `projectList`. Khi gọi `renderProjects(projects)`, mảng `projects` được truyền vào hàm. Hàm dùng vòng lặp `for...of` đọc từng object, ghép thông tin của object vào mẫu HTML của một thẻ dự án, sau đó gán toàn bộ HTML vào phần tử có `id="projects-list"`.

Nhờ vậy, nội dung các thẻ dự án được tạo từ dữ liệu thay vì phải viết từng thẻ `<article>` thủ công. Muốn thêm dự án, chỉ cần thêm một object có đủ các thuộc tính vào mảng `projects`.

## Liên kết GitHub

https://github.com/DinhXuanPhuong/javascript
