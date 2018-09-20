//===== Xử lý Lưu trữ 
var Dia_chi_Dich_vu = "http://localhost:1000"
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
function Tao_Chuoi_HTML_Khach_Tham_quan_Khi_Chao(Khach_Tham_quan) {
    var Chuoi_Hinh = `<img src='../Media/icon_khach_tham_quan.jpg'
                     style='width:60px;height:60px' />`
    var Chuoi_Tom_tat = `<div class='btn' >
                      Xin chào ${Khach_Tham_quan.Ho_ten}
                     </div>`
    var Chuoi_HTML = `<div class='btn' > 
                   ${Chuoi_Hinh}  ${Chuoi_Tom_tat}
                  </div>`

    return Chuoi_HTML
}
function Tao_Chuoi_HTML_Sinh_vien_Khi_Chao(Sinh_vien) {
    var Chuoi_Hinh = `<img src='../Media/${Sinh_vien.Ma_so}.png'
                     style='width:60px;height:60px' />`
    var Chuoi_Tom_tat = `<div class='btn' >
                      Xin chào sinh viên ${Sinh_vien.Ho_ten}
                     </div>`
    var Chuoi_HTML = `<div class='btn' > 
                   ${Chuoi_Hinh}  ${Chuoi_Tom_tat}
                  </div>`

    return Chuoi_HTML
}
function Tao_Chuoi_HTML_Chi_tiet_Sinh_vien(Sinh_vien){
    var Chuoi_Hinh = `<img src='../Media/${Sinh_vien.Ma_so}.png'
    style='width:60px;height:60px' />`
    var Chuoi_Tom_tat = `<div class='btn' style="color:red" >
        Thông tin chi tiết của Sinh viên:<br>Họ và tên: ${Sinh_vien.Ho_ten}<br>MSSV: ${Sinh_vien.Ma_so}<br>Mã số lớp: ${Sinh_vien.Ma_so_Lop}<br>Giới tính: ${Sinh_vien.Gioi_tinh}<br>CMND: ${Sinh_vien.CMND}<br>Địa chỉ: ${Sinh_vien.Dia_chi}<br>Email: ${Sinh_vien.Email}<br>Số lần đăng nhập vào hệ thống: ${Sinh_vien.Danh_sach_Dang_nhap.length}   
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
function Tao_Chuoi_HTML_Giao_vien_Khi_Chao(Giao_vien) {
    var Chuoi_Hinh = `<img src='../Media/${Giao_vien.Ma_so}.png'
                     style='width:60px;height:60px' />`
    var Chuoi_Tom_tat = `<div class='btn' >
                      Xin chào Giáo viên  ${Giao_vien.Ho_ten}
                      <br />Số lần đăng nhập là  ${Giao_vien.Danh_sach_Dang_nhap.length}
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
        var Chuoi_Hinh = `<img src='../Media/icon_lop.jpg'
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
        var Chuoi_Hinh = `<img src='../Media/${Sinh_vien.Ma_so}.png'
                  style='width:40px;height:40px' />`
        var Chuoi_Tom_tat = `<div class='btn'
              style='text-align:left' >
            ${Sinh_vien.Ten}<br />MSSV: ${Sinh_vien.Ma_so}<br/>Lớp: ${Sinh_vien.Ma_so_Lop}</div>`
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