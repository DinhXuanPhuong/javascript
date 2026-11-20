
let form = document.getElementById("myForm");

form.addEventListener("submit", function(event) {

    // Ngăn trang web tải lại
    event.preventDefault();

    // Lấy dữ liệu người dùng nhập
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    // In dữ liệu ra Console
    console.log("Họ và tên: " + name);
    console.log("Email: " + email);

    console.log("Gửi thông tin thành công!");

});
