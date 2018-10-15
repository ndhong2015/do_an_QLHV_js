//===== Xử lý Lưu trữ 
var Dia_chi_Dich_vu = "http://localhost:4000"
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
function Ghi_Giao_vien(Giao_vien) {
    var Doi_tuong = []
    var Chuoi_Goi = JSON.stringify(Giao_vien)
    var Xu_ly_HTTP = new XMLHttpRequest()
    var Dia_chi = `${Dia_chi_Dich_vu}?Ma_so_Xu_ly=Ghi_Giao_vien`
    Xu_ly_HTTP.open("POST", Dia_chi, false)
    Xu_ly_HTTP.send(Chuoi_Goi)
    var Chuoi_Kq = Xu_ly_HTTP.responseText
    Doi_tuong = JSON.parse(Chuoi_Kq)
    return Doi_tuong
}
//===== Xử lý Thể hiện
function Tao_Chuoi_HTML_Giao_vien_Khi_Chao(Giao_vien) {
    var Chuoi_Hinh = `<img src='${Dia_chi_Dich_vu_Media}/${Giao_vien.Ma_so}.png'
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
// Tao chuoi ve thong tin sinh vien
function Tao_Chuoi_HTML_Sinh_vien(Sinh_vien) {
    var Chuoi_Hinh = `<img src='${Dia_chi_Dich_vu_Media}/${Sinh_vien.Ma_so}.png'
                     style='width:60px;height:60px' />`  
    var Chuoi_Tom_tat = `<div class='btn' >
                    Thông tin sinh viên  ${Sinh_vien.Ho_ten}
                      <br />Số lần đăng nhập là  ${Sinh_vien.Danh_sach_Dang_nhap.length}
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
        Chuoi_HTML = `<div style='border-style: solid; border-color: orangered; width:100%'> ${Chuoi_HTML} <div class='alert' style='height:40px; float:left'><button class='btn btn-danger' onclick="Xu_ly_cho_diem_Sinh_vien('${Sinh_vien.Ma_so}')">Cho điểm sinh viên</button></div><div style='clear:both'></div></div>`
        Chuoi_HTML_Danh_sach += Chuoi_HTML
    })
    Chuoi_HTML_Danh_sach += `</div>`

    return Chuoi_HTML_Danh_sach
}
function Tao_Chuoi_HTML_Chi_tiet_Sinh_vien(Sinh_vien){
    var Chuoi_Hinh = `<div class='btn' style="color:red; text-align: left; border-style: solid; border-color: orangered"><img src='${Dia_chi_Dich_vu_Media}/${Sinh_vien.Ma_so}.png'
    style='width:60px;height:60px' /></div>`
    var Chuoi_Tom_tat = `<div class='btn' style="color:red; text-align: left">
        <span style = "text-align: center">HỒ SƠ SINH VIÊN:</span><br>Họ và tên: ${Sinh_vien.Ho_ten}<br>MSSV: ${Sinh_vien.Ma_so}<br>Mã số lớp: ${Sinh_vien.Ma_so_Lop}<br>Giới tính: ${Sinh_vien.Gioi_tinh}<br>CMND: ${Sinh_vien.CMND}<br>Địa chỉ: ${Sinh_vien.Dia_chi}<br>Email: ${Sinh_vien.Email}<br>Số lần đăng nhập vào hệ thống: ${Sinh_vien.Danh_sach_Dang_nhap.length}   
        </div>`
    var Chuoi_HTML = `<div class='btn' style="color:red; text-align: left; border-style: solid; border-color: orangered"><div class='btn' > 
    ${Chuoi_Hinh}  ${Chuoi_Tom_tat} 
    </div></div>`
    Chuoi_HTML =`
        <div onclick="this.style.display='none'">
            ${Chuoi_HTML}
        </div>`
    return Chuoi_HTML
}
function Tao_Chuoi_HTML_Danh_sach_Diem(Sinh_vien){
    var Danh_sach_Diem = Sinh_vien.Qua_trinh_hoc_tap;
    var Chuoi_Qua_trinh_hoc_tap =`
        <div class="thong-tin-thong-bao" style=
        "clear: both">                    	
        <div class="tieu-de-thong-tin-chi-tiet">
            <h3 style="color: Red; text-Align: center">Quá trình học tập</h3>
        </div>					
        <div class="noi-dung">
            <div id="bang-bieu" style="color:#2B2B2B; margin:0px">
                <table class="col-sm-12 table-bordered table-striped table-condensed" style="padding:0px; width:100%;">
                    <thead>
                        <tr style="background-color:orangered; color:#ffffff; height:38px; text-align: center;">
                            <td style="width:6%">STT</td>
                            <td style="width:10%">Niên khóa</td>
                            <td style="width:8%">Học kỳ</td>
                            <td style="width:10%">Mã môn</td>
                            <td style="width:48%">Tên lớp học</td>
                            <td style="width:10%">Loại điểm</td>
                            <td style="width:8%">Điểm</td>
                        </tr>
                    </thead>
                    <tbody>`
    for (var i = 0; i < Danh_sach_Diem.length; i++){
        Chuoi_Qua_trinh_hoc_tap +=`<tr class='chieu-cao'>
        <td data-title='STT' style='text-align: center;'>${i+1}</td>
        <td data-title='Niên khóa' style='text-align: center;'>${Danh_sach_Diem[i].Nien_khoa}</td>
        <td data-title='Học kỳ' style='text-align: center;'>${Danh_sach_Diem[i].Hoc_ky}</td>
        <td data-title='Mã môn' style='text-align: center;'>${Danh_sach_Diem[i].Ma_mon}</td>
        <td data-title='Tên lớp học' style='text-align: left;'>${Danh_sach_Diem[i].Ten_lop_hoc}</td>
        <td data-title='Loại điểm' style='text-align: left;'>${Danh_sach_Diem[i].Loai_diem}</td>
        <td data-title='Điểm' style='text-align: center;'>${Danh_sach_Diem[i].Diem}</td>
    </tr>`
    }
    Chuoi_Qua_trinh_hoc_tap +=       
                    `</tbody>
                </table>
            </div>
            <div style="clear:both"></div>
        </div>                
    </div>`
    Chuoi_Qua_trinh_hoc_tap =`
        <div onclick="this.style.display='none'">
            ${Chuoi_Qua_trinh_hoc_tap}
        </div>`
    return Chuoi_Qua_trinh_hoc_tap 
}

function Tao_Chuoi_HTML_Nhap_Diem(Giao_vien){
    
    var Chuoi_Qua_trinh_hoc_tap =`
        <div class="thong-tin-thong-bao" style=
    "clear: both">                    	
        <div class="tieu-de-thong-tin-chi-tiet">
            <h3 style="color: Red; text-Align: center">Nhập thông tin điểm môn học</h3>
        </div>					
        <div class="noi-dung">
            <div id="bang-bieu" style="color:#2B2B2B; margin:0px">
                <table class="col-sm-12 table-bordered table-striped table-condensed" style="padding:0px; width:100%;">
                    <thead>
                        <tr style="background-color:orangered; color:#ffffff; height:38px; text-align: center;">
                            <td style="width:6%">STT</td>
                            <td style="width:10%">Niên khóa</td>
                            <td style="width:8%">Học kỳ</td>
                            <td style="width:10%">Mã môn</td>
                            <td style="width:48%">Tên lớp học</td>
                            <td style="width:10%">Loại điểm</td>
                            <td style="width:8%">Điểm</td>
                        </tr>
                    </thead>
                    <tbody>`
    
        var today = new Date()
        var year = today.getFullYear()
        var hoc_ky = 'I'
        if (today.getMonth() > 5) {
            hoc_ky = 'II'
        }
        
        var Chuoi_HTML_Danh_sach_Ma_mon = `<select style='width: 100%' >`
        var Danh_sach_Mon_day = Giao_vien.Danh_sach_Mon_day
        for (var i = 0; i < Danh_sach_Mon_day.length;i++){
            Chuoi_HTML_Danh_sach_Ma_mon += `<option value="">${Danh_sach_Mon_day[i].Ma_mon}</option>`
        }
        Chuoi_HTML_Danh_sach_Ma_mon += `</select>`

        var Chuoi_HTML_Danh_sach_Ten_lop_hoc = `<select style='width: 100%'>`
        var Danh_sach_Mon_day = Giao_vien.Danh_sach_Mon_day
        for (var i = 0; i < Danh_sach_Mon_day.length;i++){
            Chuoi_HTML_Danh_sach_Ten_lop_hoc += `<option value="">${Danh_sach_Mon_day[i].Ten_lop_hoc}</option>`
        }
        Chuoi_HTML_Danh_sach_Ten_lop_hoc += `</select>`

        Chuoi_Qua_trinh_hoc_tap +=`<tr class='chieu-cao'>
        <td data-title='STT' style='text-align: center;'>${1}</td>
        <td data-title='Niên khóa' style='text-align: center;'>${year}-${year+1}</td>
        <td data-title='Học kỳ' style='text-align: center;'>${hoc_ky}</td>
        <td data-title='Mã môn' style='text-align: center;'>${Chuoi_HTML_Danh_sach_Ma_mon}</td>
        <td data-title='Tên lớp học' style='text-align: left;'>${Chuoi_HTML_Danh_sach_Ten_lop_hoc}</td>
        <td data-title='Loại điểm' style='text-align: left;'><input id="Loai_diem" type="text" style="width:100%" name="Loai_diem" required value='Thi lần 1'></td>
        <td data-title='Điểm' style='text-align: center;'><input id="Diem" type="text" style="width:100%" name="Diem" required ></td>
    </tr>`
    
    Chuoi_Qua_trinh_hoc_tap +=       
                    `</tbody>
                </table>
            </div>
            <div style="clear:both"></div>
        </div>                
    </div>`
    return Chuoi_Qua_trinh_hoc_tap 
}
function Tao_Chuoi_HTML_Danh_sach_nghi_phep(Sinh_vien){
    var Danh_sach_Don_xin_nghi = Sinh_vien.Danh_sach_Don_xin_nghi;
    var Chuoi_Danh_sach_Don_xin_nghi =`
        <div class="thong-tin-thong-bao">                    	
        <div class="tieu-de-thong-tin-chi-tiet">
            <h3 style="color: Red; text-Align: center">Danh sách nghỉ phép</h3>
        </div>					
        <div class="noi-dung">
            <div id="bang-bieu" style="color:#2B2B2B; margin:0px">
                <table class="col-sm-12 table-bordered table-striped table-condensed" style="padding:0px; width:100%;">
                    <thead>
                        <tr style="background-color:orangered; color:#ffffff; height:38px; text-align: center;">
                            <td style="width:6%">STT</td>
                            <td style="width:10%">Ngày nộp đơn</td>
                            <td style="width:10%">Ngày bắt đầu</td>
                            <td style="width:10%">Số ngày</td>
                            <td style="width:30%">Lý do</td>
                            <td style="width:26%">Ý kiến</td>
                            <td style="width:8%">Trạng thái</td>
                        </tr>
                    </thead>
                    <tbody>`
    for (var i = 0; i < Danh_sach_Don_xin_nghi.length; i++){
        var Chuoi_trang_thai = ""
        if (Danh_sach_Don_xin_nghi[i].Y_kien.Da_co_Y_kien == true){
            Chuoi_trang_thai = "Đã duyệt"
        } else{
            Chuoi_trang_thai = "Chưa duyệt"
        }
        Chuoi_Danh_sach_Don_xin_nghi +=`<tr class='chieu-cao'>
        <td data-title='STT' style='text-align: center;'>${i+1}</td>
        <td data-title='Ngay_Nop_don' style='text-align: center;'>${Danh_sach_Don_xin_nghi[i].Ngay_Nop_don}</td>
        <td data-title='Ngay_Bat_dau' style='text-align: center;'>${Danh_sach_Don_xin_nghi[i].Ngay_Bat_dau}</td>
        <td data-title='So_ngay' style='text-align: center;'>${Danh_sach_Don_xin_nghi[i].So_ngay}</td>
        <td data-title='Ly_do' style='text-align: left;'>${Danh_sach_Don_xin_nghi[i].Ly_do}</td>
        <td data-title='Noi_dung' style='text-align: left;'>${Danh_sach_Don_xin_nghi[i].Y_kien.Noi_dung}</td>
        <td data-title='Chuoi_trang_thai' style='text-align: center;'>${Chuoi_trang_thai}</td>
    </tr>`
    }
    Chuoi_Danh_sach_Don_xin_nghi +=       
                    `</tbody>
                </table>
            </div>
            <div style="clear:both"></div>
        </div>                
    </div>`
    Chuoi_Danh_sach_Don_xin_nghi =`
        <div onclick="this.style.display='none'">
            ${Chuoi_Danh_sach_Don_xin_nghi}
        </div>`
    return Chuoi_Danh_sach_Don_xin_nghi 
}
//==== Xử lý Nghiệp vụ
function Tim_Sinh_vien(Ma_so, Danh_sach_Sinh_vien){
    var Sinh_vien = {}
        var Hop_le = Danh_sach_Sinh_vien.some(x => x.Ma_so == Ma_so)
        if (Hop_le) {
        Sinh_vien = Danh_sach_Sinh_vien.find(x => x.Ma_so == Ma_so)
        return Sinh_vien
    } 
    return 0 
}
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