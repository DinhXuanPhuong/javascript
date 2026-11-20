
let form = document.getElementById("register-form");

let username = document.getElementById("username");
let email = document.getElementById("email");

let usernameError = document.getElementById("username-error");
let emailError = document.getElementById("email-error");

// Kiểm tra tên đăng nhập
function checkUsername() {
    if (username.value.length < 5) {
        usernameError.textContent = "Tên quá ngắn!";
        username.style.border = "2px solid red";
        return false;
    } else {
        usernameError.textContent = "";
        username.style.border = "2px solid green";
        return true;
    }
}

// Kiểm tra email
function checkEmail() {
    if (!email.value.includes("@")) {
        emailError.textContent = "Email không hợp lệ!";
        email.style.border = "2px solid red";
        return false;
    } else {
        emailError.textContent = "";
        email.style.border = "2px solid green";
        return true;
    }
}

// Kiểm tra ngay khi người dùng nhập
username.addEventListener("input", checkUsername);
email.addEventListener("input", checkEmail);

// Kiểm tra khi nhấn Submit
form.addEventListener("submit", function(e) {
    e.preventDefault();

    let userValid = checkUsername();
    let emailValid = checkEmail();

    if (userValid && emailValid) {
        alert("Đăng ký thành công!");
        console.log("Username: " + username.value);
        console.log("Email: " + email.value);
    }
});
