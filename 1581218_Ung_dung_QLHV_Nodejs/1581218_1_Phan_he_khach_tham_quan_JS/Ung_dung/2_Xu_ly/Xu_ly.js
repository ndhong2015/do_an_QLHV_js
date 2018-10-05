//===== Xử lý Lưu trữ 
var Dia_chi_Dich_vu = "http://localhost:1000"
var Dia_chi_Dich_vu_Media = "http://localhost:2000"
function Doc_Danh_sach_Lop() {
    var Danh_sach = []
    var Xu_ly_HTTP = new XMLHttpRequest()
    var Dia_chi = `${Dia_chi_Dich_vu}?Ma_so_Xu_ly=Doc_Danh_sach_Lop`
    Xu_ly_HTTP.open("POST", Dia_chi, false)
    Xu_ly_HTTP.send("")
    var Chuoi = Xu_ly_HTTP.responseText
    Danh_sach = JSON.parse(Chuoi)
    return Danh_sach
}
function Doc_Danh_sach_Sinh_vien() {
    var Danh_sach = []
    var Xu_ly_HTTP = new XMLHttpRequest()
    var Dia_chi = `${Dia_chi_Dich_vu}?Ma_so_Xu_ly=Doc_Danh_sach_Sinh_vien`
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
function Doc_Danh_sach_Giao_vien() {
    var Danh_sach = []
    var Xu_ly_HTTP = new XMLHttpRequest()
    var Dia_chi = `${Dia_chi_Dich_vu}?Ma_so_Xu_ly=Doc_Danh_sach_Giao_vien`
    Xu_ly_HTTP.open("POST", Dia_chi, false)
    Xu_ly_HTTP.send("")
    var Chuoi = Xu_ly_HTTP.responseText
    Danh_sach = JSON.parse(Chuoi)
    return Danh_sach
}

//===== Xử lý Thể hiện
function Tao_Chuoi_HTML_Khach_Tham_quan_Khi_Chao(Khach_Tham_quan) {
    var Dia_chi = `${Dia_chi_Dich_vu_Media}/icon_khach_tham_quan.png`
    var Chuoi_Hinh = `<img src='${Dia_chi}'
                     style='width:60px;height:60px' />`
    var Chuoi_Tom_tat = `<div class='btn' >
                      Xin chào ${Khach_Tham_quan.Ho_ten}
                     </div>`
    var Chuoi_HTML = `<div class='btn' > 
                   ${Chuoi_Hinh}  ${Chuoi_Tom_tat}
                  </div>`

    return Chuoi_HTML
}
// Tạo Chuỗi HTML Danh sách 
function Tao_Chuoi_HTML_Danh_sach_Lop(Danh_sach) {
    var Chuoi_HTML_Danh_sach = `<div class='row'>`
    Danh_sach.forEach(Lop => {
        var Chuoi_Hinh = `<img src='${Dia_chi_Dich_vu_Media}/icon_lop.png'
                  style='width:40px;height:40px' />`
        var Chuoi_Tom_tat = `<div class='btn' >
            ${Lop.Ten}  </div>`
        var Chuoi_HTML = `<div class='btn' > 
             ${Chuoi_Hinh}  ${Chuoi_Tom_tat}
                     </div>`
        Chuoi_HTML_Danh_sach += Chuoi_HTML
    })
    Chuoi_HTML_Danh_sach += `</div>`

    return Chuoi_HTML_Danh_sach
}
//==== Xử lý Nghiệp vụ
function Dang_nhap(Ten_dang_nhap, Mat_khau)
{
        // var express = require('express');
        // var session = require('express-session');    
        // var app = express();
        // app.use(session());
        // app.use(session({ secret: 'Ten_dang_nhap', cookie: { maxAge: 60000 }}));
        // app.get('/', function(req, res, next) {
        //     var sessData = req.session;
        //     sessData.someAttribute = "foo";
        //     res.send('Returning with some text');
        //   });

        var Danh_sach_Sinh_vien = Doc_Danh_sach_Sinh_vien()
        var Danh_sach_Quan_ly = Doc_Danh_sach_Quan_ly()
        var Danh_sach_Giao_vien = Doc_Danh_sach_Giao_vien()
        var Chuoi_HTML = "Đăng nhập không hợp lệ"
        var Tham_so = `Th_Ten_Dang_nhap=${Ten_dang_nhap}&Th_Mat_khau=${Mat_khau}`
        if (Danh_sach_Quan_ly.some(x => x.Ten_dang_nhap == Ten_dang_nhap
            && x.Mat_khau == Mat_khau )) {
            var Dia_chi_Dang_nhap = "../../../1581218_2_Phan_he_quan_ly_JS/Ung_dung/1_Giao_dien/MH_Quan_ly.html"
            var Dia_chi_Xu_ly = `${Dia_chi_Dang_nhap}?${Tham_so}`
            window.location.href = Dia_chi_Xu_ly
            }
        else if (Danh_sach_Sinh_vien.some(x => x.Ten_dang_nhap == Ten_dang_nhap
                    && x.Mat_khau == Mat_khau )) {
            var Dia_chi_Dang_nhap = "../../../1581218_3_Phan_he_sinh_vien_JS/Ung_dung/1_Giao_dien/MH_Sinh_vien.html"
            var Dia_chi_Xu_ly = `${Dia_chi_Dang_nhap}?${Tham_so}`
            window.location.href = Dia_chi_Xu_ly
        } 
        else if (Danh_sach_Giao_vien.some(x => x.Ten_dang_nhap == Ten_dang_nhap
                    && x.Mat_khau == Mat_khau )) {
            var Dia_chi_Dang_nhap = "../../../1581218_4_Phan_he_giao_vien_JS/Ung_dung/1_Giao_dien/MH_Giao_vien.html"
            var Dia_chi_Xu_ly = `${Dia_chi_Dang_nhap}?${Tham_so}`
            window.location.href = Dia_chi_Xu_ly
        }                              
        return Chuoi_HTML;
    }
            