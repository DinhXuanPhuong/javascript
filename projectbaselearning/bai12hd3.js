
let sanPham = [
    { ten: "Laptop Lenovo", gia: 18000000, giamGia: true },
    { ten: "iPhone 15", gia: 15000000, giamGia: false },
    { ten: "Chuột Logitech", gia: 500000, giamGia: true },
    { ten: "Bàn phím cơ", gia: 1200000, giamGia: true },
    { ten: "Tai nghe Sony", gia: 2500000, giamGia: false },
    { ten: "Màn hình Samsung", gia: 4500000, giamGia: true },
    { ten: "USB 64GB", gia: 200000, giamGia: false },
    { ten: "iPad Air", gia: 14000000, giamGia: true },
    { ten: "Loa Bluetooth", gia: 900000, giamGia: false },
    { ten: "Webcam Logitech", gia: 1600000, giamGia: true }
];

// Lấy vị trí hiển thị sản phẩm
let productList = document.getElementById("product-list");

// Dùng map() tạo giao diện cho từng sản phẩm
let html = sanPham.map(sp => {
    return `
        <div class="card">
            <h3>${sp.ten}</h3>
            <p>Giá: ${sp.gia.toLocaleString("vi-VN")} VNĐ</p>
            <p class="${sp.giamGia ? 'sale' : ''}">
                ${sp.giamGia ? "Đang giảm giá" : "Không giảm giá"}
            </p>
        </div>
    `;
}).join("");

// Đưa giao diện lên trang web
productList.innerHTML = html;
