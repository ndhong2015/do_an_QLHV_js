//===== Xử lý Lưu trữ 
var Dia_chi_Dich_vu = "http://localhost:3000"
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
function Tao_Chuoi_HTML_Quan_ly_Khi_Chao(Quan_ly) {
    var Chuoi_Hinh = `<img src='${Dia_chi_Dich_vu_Media}/${Quan_ly.Ma_so}.png'
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
function Tao_Chuoi_HTML_Danh_sach_Sinh_vien(Danh_sach) {
    var Chuoi_HTML_Danh_sach = `<div class='row'>`
    Danh_sach.forEach(Sinh_vien => {
        var Chuoi_Hinh = `<img src='${Dia_chi_Dich_vu_Media}/${Sinh_vien.Ma_so}.png'
                  style='width:40px;height:40px' />`
        var Chuoi_Tom_tat = `<div class='btn'
              style='text-align:left' >
            ${Sinh_vien.Ho_ten}<br />MSSV: ${Sinh_vien.Ma_so}<br/>Lớp: ${Sinh_vien.Ma_so_Lop}</div>`
        var Chuoi_HTML = `<div class='col-md-4'  > 
             ${Chuoi_Hinh}  ${Chuoi_Tom_tat}
                     </div>`
        Chuoi_HTML_Danh_sach += Chuoi_HTML
    })
    Chuoi_HTML_Danh_sach += `</div>`

    return Chuoi_HTML_Danh_sach
}
//==== Xử lý Nghiệp vụ
function Tao_Danh_sach_Lop_cua_Giao_vien(Giao_vien,
    Danh_sach_Tat_ca_Lop) {
    var Danh_sach = []
    Giao_vien.Danh_sach_Ma_so_Lop.forEach(
        Ma_so_Lop => {
            var Lop = Danh_sach_Tat_ca_Lop.find(x => x.Ma_so == Ma_so_Lop)
            if (Lop)
                Danh_sach.push(Lop)
        })
    return Danh_sach
}
function Tao_Danh_sach_Sinh_vien_cua_Giao_vien(Giao_vien, Danh_sach_Tat_ca_Sinh_vien) {
    var Danh_sach = []
    Giao_vien.Danh_sach_Ma_so_Lop.forEach(
        Ma_so_Lop => {
            var DS_Sinh_vien = Danh_sach_Tat_ca_Sinh_vien.filter(x => x.Ma_so_Lop == Ma_so_Lop)
            Array.prototype.push.apply(Danh_sach, DS_Sinh_vien)
        })
    return Danh_sach
}
// public XL_NGUOI_DUNG Dang_nhap(string Ten_Dang_nhap, string Mat_khau)
// {
//         var Nguoi_dung = Danh_sach_Nguoi_dung.FirstOrDefault(
//                                 x => x.Ten_Dang_nhap == Ten_Dang_nhap
//                                       && x.Mat_khau == Mat_khau 
//                                       && x.Nhom_Nguoi_dung.Ma_so=="NHAN_VIEN_BAN_HANG");

//         if (Nguoi_dung != null)
//         {   //Khởi động  Thông tin Online  
             
//             Nguoi_dung.Danh_sach_Tivi_Xem = Nguoi_dung.Danh_sach_Tivi;
//             Nguoi_dung.Danh_sach_Tivi_Chon = new List<XL_TIVI>();
//             Nguoi_dung.Danh_sach_Nhom_Tivi_Xem = Nguoi_dung.Danh_sach_Nhom_Tivi;
//             HttpContext.Current.Session["Nguoi_dung_Dang_nhap"] = Nguoi_dung;
//         }
            
//         return Nguoi_dung;
// }