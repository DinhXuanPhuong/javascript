let user = {
    hoTen: "Đinh Xuân Phương",
    tuoi: 19,
    gioiTinh: "Nam",
    nganhHoc: "Công nghệ thông tin",
    truong: "Đại học Lạc Hồng",

    tinhNamSinh: function() {
        return new Date().getFullYear() - this.tuoi;
    }
};
console.log("Xin chào! Mình tên là " + user.hoTen);
console.log("Tuổi: " + user.tuoi);
console.log("Năm sinh: " + user.tinhNamSinh());