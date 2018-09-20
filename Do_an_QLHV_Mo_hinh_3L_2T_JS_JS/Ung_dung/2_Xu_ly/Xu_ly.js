﻿//===== Xử lý Lưu trữ 
var Dia_chi_Dich_vu = "http://localhost:1000"
function Doc_Danh_sach_Nhom_hang() {
    var Danh_sach = []
    var Xu_ly_HTTP = new XMLHttpRequest()
    var Dia_chi = `${Dia_chi_Dich_vu}?Ma_so_Xu_ly=Doc_Danh_sach_Nhom_hang`
    Xu_ly_HTTP.open("POST", Dia_chi, false)
    Xu_ly_HTTP.send("")
    var Chuoi = Xu_ly_HTTP.responseText
    Danh_sach = JSON.parse(Chuoi)
    return Danh_sach
}
function Doc_Danh_sach_Mat_hang() {
    var Danh_sach = []
    var Xu_ly_HTTP = new XMLHttpRequest()
    var Dia_chi = `${Dia_chi_Dich_vu}?Ma_so_Xu_ly=Doc_Danh_sach_Mat_hang`
    Xu_ly_HTTP.open("POST", Dia_chi, false)
    Xu_ly_HTTP.send("")
    var Chuoi = Xu_ly_HTTP.responseText
    Danh_sach = JSON.parse(Chuoi)
    return Danh_sach
}
function Doc_Danh_sach_Quan_ly() {
    var Danh_sach = []
    var Xu_ly_HTTP = new XMLHttpRequest()
    var Dia_chi = `${Dia_chi_Dich_vu}?Ma_so_Xu_ly=Doc_Danh_sach_Quan_ly`
    Xu_ly_HTTP.open("POST", Dia_chi, false)
    Xu_ly_HTTP.send("")
    var Chuoi = Xu_ly_HTTP.responseText
    Danh_sach = JSON.parse(Chuoi)
    return Danh_sach
}
function Doc_Danh_sach_Nhan_vien() {
    var Danh_sach = []
    var Xu_ly_HTTP = new XMLHttpRequest()
    var Dia_chi = `${Dia_chi_Dich_vu}?Ma_so_Xu_ly=Doc_Danh_sach_Nhan_vien`
    Xu_ly_HTTP.open("POST", Dia_chi, false)
    Xu_ly_HTTP.send("")
    var Chuoi = Xu_ly_HTTP.responseText
    Danh_sach = JSON.parse(Chuoi)
    return Danh_sach
}
function Ghi_Quan_ly(Quan_ly) {
    var Doi_tuong = []
    var Chuoi_Goi = JSON.stringify(Quan_ly)
    var Xu_ly_HTTP = new XMLHttpRequest()
    var Dia_chi = `${Dia_chi_Dich_vu}?Ma_so_Xu_ly=Ghi_Quan_ly`
    Xu_ly_HTTP.open("POST", Dia_chi, false)
    Xu_ly_HTTP.send(Chuoi_Goi)
    var Chuoi_Kq = Xu_ly_HTTP.responseText
    Doi_tuong = JSON.parse(Chuoi_Kq)
    return Doi_tuong
}
//===== Xử lý Thể hiện
function Tao_Chuoi_HTML_Khach_Tham_quan_Khi_Chao(Khach_Tham_quan) {
    var Chuoi_Hinh = `<img src='../Media/${Khach_Tham_quan.Ma_so}.png'
                     style='width:60px;height:60px' />`
    var Chuoi_Tom_tat = `<div class='btn' >
                      Xin chào ${Khach_Tham_quan.Ho_ten}
                     </div>`
    var Chuoi_HTML = `<div class='btn' > 
                   ${Chuoi_Hinh}  ${Chuoi_Tom_tat}
                  </div>`

    return Chuoi_HTML
}
function Tao_Chuoi_HTML_Khach_hang_Khi_Chao(Khach_hang) {
    var Chuoi_Hinh = `<img src='../Media/${Khach_hang.Ma_so}.png'
                     style='width:60px;height:60px' />`
    var Chuoi_Tom_tat = `<div class='btn' >
                      Xin chào ${Khach_hang.Ho_ten}
                     </div>`
    var Chuoi_HTML = `<div class='btn' > 
                   ${Chuoi_Hinh}  ${Chuoi_Tom_tat}
                  </div>`

    return Chuoi_HTML
}
function Tao_Chuoi_HTML_Quan_ly_Khi_Chao(Quan_ly) {
    var Chuoi_Hinh = `<img src='../Media/${Quan_ly.Ma_so}.png'
                     style='width:60px;height:60px' />`
    var Chuoi_Tom_tat = `<div class='btn' >
                      Xin Trân trọng kính chào Quản lý  ${Quan_ly.Ho_ten}
                      <br />Số lần đăng nhập là  ${Quan_ly.Danh_sach_Dang_nhap.length}
                     </div>`
    var Chuoi_HTML = `<div class='btn' > 
                   ${Chuoi_Hinh}  ${Chuoi_Tom_tat}
                  </div>`

    return Chuoi_HTML
}
function Tao_Chuoi_HTML_Nhan_vien_Khi_Chao(Nhan_vien) {
    var Chuoi_Hinh = `<img src='../Media/${Nhan_vien.Ma_so}.png'
                     style='width:60px;height:60px' />`
    var Chuoi_Tom_tat = `<div class='btn' >
                      Xin chào Nhân viên  ${Nhan_vien.Ho_ten}
                      <br />Số lần đăng nhập là  ${Nhan_vien.Danh_sach_Dang_nhap.length}
                     </div>`
    var Chuoi_HTML = `<div class='btn' > 
                   ${Chuoi_Hinh}  ${Chuoi_Tom_tat}
                  </div>`

    return Chuoi_HTML
}

// Tạo Chuỗi HTML Danh sách 
function Tao_Chuoi_HTML_Danh_sach_Nhom_hang(Danh_sach) {
    var Chuoi_HTML_Danh_sach = `<div class='row'>`
    Danh_sach.forEach(Nhom_hang => {
        var Chuoi_Hinh = `<img src='../Media/${Nhom_hang.Ma_so}.png'
                  style='width:40px;height:40px' />`
        var Chuoi_Tom_tat = `<div class='btn' >
            ${Nhom_hang.Ten}  </div>`
        var Chuoi_HTML = `<div class='btn' > 
             ${Chuoi_Hinh}  ${Chuoi_Tom_tat}
                     </div>`
        Chuoi_HTML_Danh_sach += Chuoi_HTML
    })
    Chuoi_HTML_Danh_sach += `</div>`

    return Chuoi_HTML_Danh_sach
}
function Tao_Chuoi_HTML_Danh_sach_Mat_hang(Danh_sach) {
    var Chuoi_HTML_Danh_sach = `<div class='row'>`
    Danh_sach.forEach(Mat_hang => {
        var Chuoi_Hinh = `<img src='../Media/${Mat_hang.Ma_so}.png'
                  style='width:40px;height:40px' />`
        var Chuoi_Tom_tat = `<div class='btn'
              style='text-align:left' >
            ${Mat_hang.Ten}<br />${Mat_hang.Don_gia_Ban} </div>`
        var Chuoi_HTML = `<div class='col-md-4'  > 
             ${Chuoi_Hinh}  ${Chuoi_Tom_tat}
                     </div>`
        Chuoi_HTML_Danh_sach += Chuoi_HTML
    })
    Chuoi_HTML_Danh_sach += `</div>`

    return Chuoi_HTML_Danh_sach
}
//==== Xử lý Nghiệp vụ
function Tao_Danh_sach_Nhom_hang_cua_Nhan_vien(Nhan_vien,
    Danh_sach_Tat_ca_Nhom_hang) {
    var Danh_sach = []
    Nhan_vien.Danh_sach_Ma_so_Nhom_hang.forEach(
        Ma_so_Nhom_hang => {
            var Nhom_hang = Danh_sach_Tat_ca_Nhom_hang.find(x => x.Ma_so == Ma_so_Nhom_hang)
            if (Nhom_hang)
                Danh_sach.push(Nhom_hang)
        })
    return Danh_sach
}
function Tao_Danh_sach_Mat_hang_cua_Nhan_vien(Nhan_vien, Danh_sach_Tat_ca_Mat_hang) {
    var Danh_sach = []
    Nhan_vien.Danh_sach_Ma_so_Nhom_hang.forEach(
        Ma_so_Nhom_hang => {
            var DS_Mat_hang = Danh_sach_Tat_ca_Mat_hang.filter(x => x.Ma_so_Nhom_hang == Ma_so_Nhom_hang)
            Array.prototype.push.apply(Danh_sach, DS_Mat_hang)
        })
    return Danh_sach
}