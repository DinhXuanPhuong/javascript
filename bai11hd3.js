
const form = document.querySelector("#userForm");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    // Lấy danh sách sở thích đã chọn
    const hobbies = [];

    document.querySelectorAll('input[name="hobby"]:checked')
        .forEach(function(cb) {
            hobbies.push(cb.value);
        });

    // Lấy giới tính
    const genderInput = document.querySelector(
        'input[name="gender"]:checked'
    );

    if (!genderInput) {
        alert("Vui lòng chọn giới tính!");
        return;
    }

    const gender = genderInput.value;

    // Tạo Object chứa thông tin người dùng
    const userData = {
        name: document.querySelector("#name").value,
        email: document.querySelector("#email").value,
        gender: gender,
        hobbies: hobbies,
        city: document.querySelector("#city").value
    };

    // In kết quả ra Console
    console.log(userData);

    alert("Thu thập dữ liệu thành công!");
});

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^(0|\+84)[3-9][0-9]{8}$/;

const emails = [
    "abc@gmail.com",
    "abc@gmail",
    "abc@",
    "hello@yahoo.com"
];

const phones = [
    "0912345678",
    "+84912345678",
    "1234567890",
    "09123"
];

console.log("KIỂM TRA EMAIL:");

emails.forEach(email => {
    console.log(email, emailRegex.test(email));
});

console.log("KIỂM TRA SỐ ĐIỆN THOẠI:");

phones.forEach(phone => {
    console.log(phone, phoneRegex.test(phone));
});
