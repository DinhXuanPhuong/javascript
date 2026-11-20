
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
// Bước 1: Lọc sản phẩm đang giảm giá
let sanPhamGiamGia = sanPham.filter(sp => sp.giamGia === true);
console.log("DANH SÁCH SẢN PHẨM ĐANG GIẢM GIÁ:");
console.log(sanPhamGiamGia);
// Bước 2: Lọc sản phẩm có giá lớn hơn 1 triệu
let sanPhamGiaCao = sanPham.filter(sp => sp.gia > 1000000);
// Bước 3: Dùng map() lấy tên sản phẩm
let tenSanPham = sanPhamGiaCao.map(sp => sp.ten);
console.log("DANH SÁCH SẢN PHẨM GIÁ TRÊN 1 TRIỆU:");
console.log(tenSanPham);
