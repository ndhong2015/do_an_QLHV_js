//===== Xử lý Lưu trữ 
var Dia_chi_Dich_vu = "http://localhost:7000"
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
function Ghi_Sinh_vien(Sinh_vien) {
    var Doi_tuong = []
    var Chuoi_Goi = JSON.stringify(Sinh_vien)
    var Xu_ly_HTTP = new XMLHttpRequest()
    var Dia_chi = `${Dia_chi_Dich_vu}?Ma_so_Xu_ly=Ghi_Sinh_vien`
    Xu_ly_HTTP.open("POST", Dia_chi, false)
    Xu_ly_HTTP.send(Chuoi_Goi)
    var Chuoi_Kq = Xu_ly_HTTP.responseText
    Doi_tuong = JSON.parse(Chuoi_Kq)
    return Doi_tuong
}
//===== Xử lý Thể hiện
function Tao_Chuoi_HTML_Sinh_vien_Khi_Chao(Sinh_vien) {
    var Chuoi_Hinh = `<img src='${Dia_chi_Dich_vu_Media}/${Sinh_vien.Ma_so}.png'
                     style='width:60px;height:60px' />`  
    var Chuoi_Tom_tat = `<div class='btn' >
                    Xin chào sinh viên  ${Sinh_vien.Ho_ten}
                      <br />Số lần đăng nhập là  ${Sinh_vien.Danh_sach_Dang_nhap.length}
                     </div>`
    var Chuoi_HTML = `<div class='btn' > 
                   ${Chuoi_Hinh}  ${Chuoi_Tom_tat}
                  </div>`

    return Chuoi_HTML
}
function Tao_Chuoi_HTML_Chi_tiet_Sinh_vien(Sinh_vien){
    var Chuoi_Hinh = `<div class='btn' style="color:red; text-align: left; border-style: solid; border-color: orangered"><img src='${Dia_chi_Dich_vu_Media}/${Sinh_vien.Ma_so}.png'
    style='width:60px;height:60px' /></div>`
    var Chuoi_Tom_tat = `<div class='btn' style="color:red; text-align: left">
        <span style = "text-align: center">HỒ SƠ SINH VIÊN:</span><br>Họ và tên: ${Sinh_vien.Ho_ten}<br>MSSV: ${Sinh_vien.Ma_so}<br>Mã số lớp: ${Sinh_vien.Ma_so_Lop}<br>Giới tính: ${Sinh_vien.Gioi_tinh}<br>CMND: ${Sinh_vien.CMND}<br>Địa chỉ: ${Sinh_vien.Dia_chi}<br>Email: ${Sinh_vien.Email}<br>Số lần đăng nhập vào hệ thống: ${Sinh_vien.Danh_sach_Dang_nhap.length}   
        </div>`    
    // var Chuoi_Qua_trinh_hoc_tap = `<div class='alert' style='height:40px'><button class='btn btn-danger' onclick='Xu_ly_Qua_trinh_hoc_tap()'>Xem điểm</button></div>`
    // var Chuoi_Danh_sach_nghi_phep = `<div class='alert' style='height:40px'><button class='btn btn-danger' onclick='Xu_ly_Danh_sach_nghi_phep()'>Danh sách nghỉ phép</button></div>`
    var Chuoi_HTML = `<div class='btn' style="color:red; text-align: left; border-style: solid; border-color: orangered"><div class='btn' > 
    ${Chuoi_Hinh}  ${Chuoi_Tom_tat} 
    </div></div>`
    Chuoi_HTML =`<div class='alert' style='height:40px'>
            <button class='btn btn-danger' onclick='Xu_ly_Chi_tiet_Sinh_vien()'>Thông tin chi tiết</button>
        </div>
        <div onclick="this.style.display='none'">
            ${Chuoi_HTML}
        </div>`
        // <div>
        // ${Chuoi_Qua_trinh_hoc_tap} ${Chuoi_Danh_sach_nghi_phep} 
        // </div>
    return Chuoi_HTML 
}
function Tao_Chuoi_HTML_Ho_so_sinh_vien(Sinh_vien){
    var Chuoi_Hinh = `<div class='btn' style="color:red; text-align: left; border-style: solid; border-color: orangered"><img src='${Dia_chi_Dich_vu_Media}/${Sinh_vien.Ma_so}.png'
    style='width:60px;height:60px' /></div>`
    var Chuoi_Tom_tat = `<div class='btn' style="color:red; text-align: left">
        <span style = "text-align: center">HỒ SƠ SINH VIÊN:</span><br>Họ và tên: ${Sinh_vien.Ho_ten}<br>MSSV: ${Sinh_vien.Ma_so}<br>Mã số lớp: ${Sinh_vien.Ma_so_Lop}<br>Giới tính: ${Sinh_vien.Gioi_tinh}<br>CMND: ${Sinh_vien.CMND}<br>Địa chỉ: ${Sinh_vien.Dia_chi}<br>Email: ${Sinh_vien.Email}<br>Số lần đăng nhập vào hệ thống: ${Sinh_vien.Danh_sach_Dang_nhap.length}   
        </div>`    
    var Chuoi_HTML = `<div class='btn' style="color:red; text-align: left; border-style: solid; border-color: orangered"><div class='btn' > 
    ${Chuoi_Hinh}  ${Chuoi_Tom_tat} 
    </div></div>`
    // Chuoi_HTML =`<div class='alert' style='height:40px'>
    //         <button class='btn btn-danger' onclick='Xu_ly_Chi_tiet_Sinh_vien()'>Thông tin chi tiết</button>
    //     </div>
    //     <div onclick="this.style.display='none'">
    //         ${Chuoi_HTML}
    //     </div>`
        // <div>
        // ${Chuoi_Qua_trinh_hoc_tap} ${Chuoi_Danh_sach_nghi_phep} 
        // </div>
    return Chuoi_HTML 
}
function Tao_Chuoi_HTML_Danh_sach_Diem(Sinh_vien){
    var Chuoi_Qua_trinh_hoc_tap =`
        <div class="thong-tin-thong-bao">                    	
        <div class="tieu-de-thong-tin-chi-tiet">
            Quá trình học tập
        </div>					
        <div class="noi-dung">
            <div id="bang-bieu" style="color:#2B2B2B; margin:0px">
                <table class="col-sm-12 table-bordered table-striped table-condensed" style="padding:0px; width:100%;">
                    <thead>
                        <tr style="background-color:#0082c8; color:#ffffff; height:38px; text-align: center;">
                            <td style="width:6%">STT</td>
                            <td style="width:10%">Niên khóa</td>
                            <td style="width:8%">Học kỳ</td>
                            <td style="width:10%">Mã môn</td>
                            <td style="width:48%">Tên lớp học</td>
                            <td style="width:10%">Loại điểm</td>
                            <td style="width:8%">Điểm</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class='chieu-cao'>
                <td data-title='STT' style='text-align: center;'>1</td>
                <td data-title='Niên khóa' style='text-align: center;'>2015-2016</td>
                <td data-title='Học kỳ' style='text-align: center;'>II</td>
                <td data-title='Mã môn' style='text-align: center;'>CTT003</td>
                <td data-title='Tên lớp học' style='text-align: left;'>Lớp Nhập môn lập trình (2010) (2015K2)</td>
                <td data-title='Loại điểm' style='text-align: left;'>Thi lần 1</td>
                <td data-title='Điểm' style='text-align: center;'>6.5</td>
            </tr><tr class='chieu-cao'>
                <td data-title='STT' style='text-align: center;'>2</td>
                <td data-title='Niên khóa' style='text-align: center;'>2015-2016</td>
                <td data-title='Học kỳ' style='text-align: center;'>II</td>
                <td data-title='Mã môn' style='text-align: center;'>CTT002</td>
                <td data-title='Tên lớp học' style='text-align: left;'>Lớp Tin học cơ sở (2015K2)</td>
                <td data-title='Loại điểm' style='text-align: left;'>Thi lần 1</td>
                <td data-title='Điểm' style='text-align: center;'>10.0</td>
            </tr><tr class='chieu-cao'>
                <td data-title='STT' style='text-align: center;'>3</td>
                <td data-title='Niên khóa' style='text-align: center;'>2015-2016</td>
                <td data-title='Học kỳ' style='text-align: center;'>II</td>
                <td data-title='Mã môn' style='text-align: center;'>CTH001</td>
                <td data-title='Tên lớp học' style='text-align: left;'>Lớp Những nguyên lý cơ bản của Chủ nghĩa Mác-Lênin (2015K2)</td>
                <td data-title='Loại điểm' style='text-align: left;'>Thi lần 1</td>
                <td data-title='Điểm' style='text-align: center;'>7.0</td>
            </tr><tr class='chieu-cao'>
                <td data-title='STT' style='text-align: center;'>4</td>
                <td data-title='Niên khóa' style='text-align: center;'>2016-2017</td>
                <td data-title='Học kỳ' style='text-align: center;'>I</td>
                <td data-title='Mã môn' style='text-align: center;'>CTT008</td>
                <td data-title='Tên lớp học' style='text-align: left;'>Lớp Kỹ thuật lập trình (2010) (2016K1)</td>
                <td data-title='Loại điểm' style='text-align: left;'>Thi lần 1</td>
                <td data-title='Điểm' style='text-align: center;'>9.0</td>
            </tr><tr class='chieu-cao'>
                <td data-title='STT' style='text-align: center;'>5</td>
                <td data-title='Niên khóa' style='text-align: center;'>2016-2017</td>
                <td data-title='Học kỳ' style='text-align: center;'>I</td>
                <td data-title='Mã môn' style='text-align: center;'>CTT006</td>
                <td data-title='Tên lớp học' style='text-align: left;'>Lớp P.pháp lập trình hướng đối tượng (2016K1)</td>
                <td data-title='Loại điểm' style='text-align: left;'>Thi lần 1</td>
                <td data-title='Điểm' style='text-align: center;'>9.0</td>
            </tr><tr class='chieu-cao'>
                <td data-title='STT' style='text-align: center;'>6</td>
                <td data-title='Niên khóa' style='text-align: center;'>2016-2017</td>
                <td data-title='Học kỳ' style='text-align: center;'>I</td>
                <td data-title='Mã môn' style='text-align: center;'>TTH030</td>
                <td data-title='Tên lớp học' style='text-align: left;'>Lớp Giải tích (2016K1)</td>
                <td data-title='Loại điểm' style='text-align: left;'>Thi lần 1</td>
                <td data-title='Điểm' style='text-align: center;'>6.0</td>
            </tr><tr class='chieu-cao'>
                <td data-title='STT' style='text-align: center;'>7</td>
                <td data-title='Niên khóa' style='text-align: center;'>2016-2017</td>
                <td data-title='Học kỳ' style='text-align: center;'>I</td>
                <td data-title='Mã môn' style='text-align: center;'>CTT101</td>
                <td data-title='Tên lớp học' style='text-align: left;'>Lớp Cấu trúc dữ liệu và giải thuật (2016K1)</td>
                <td data-title='Loại điểm' style='text-align: left;'>Thi lần 1</td>
                <td data-title='Điểm' style='text-align: center;'>9.0</td>
            </tr><tr class='chieu-cao'>
                <td data-title='STT' style='text-align: center;'>8</td>
                <td data-title='Niên khóa' style='text-align: center;'>2016-2017</td>
                <td data-title='Học kỳ' style='text-align: center;'>II</td>
                <td data-title='Mã môn' style='text-align: center;'>CTT102</td>
                <td data-title='Tên lớp học' style='text-align: left;'>Lớp Cơ sở dữ liệu (2016K2)</td>
                <td data-title='Loại điểm' style='text-align: left;'>Thi lần 1</td>
                <td data-title='Điểm' style='text-align: center;'>6.5</td>
            </tr><tr class='chieu-cao'>
                <td data-title='STT' style='text-align: center;'>9</td>
                <td data-title='Niên khóa' style='text-align: center;'>2016-2017</td>
                <td data-title='Học kỳ' style='text-align: center;'>II</td>
                <td data-title='Mã môn' style='text-align: center;'>CTT104</td>
                <td data-title='Tên lớp học' style='text-align: left;'>Lớp Kiến trúc máy tính và hợp ngữ (2016K2)</td>
                <td data-title='Loại điểm' style='text-align: left;'>Thi lần 1</td>
                <td data-title='Điểm' style='text-align: center;'>6.5</td>
            </tr><tr class='chieu-cao'>
                <td data-title='STT' style='text-align: center;'>10</td>
                <td data-title='Niên khóa' style='text-align: center;'>2016-2017</td>
                <td data-title='Học kỳ' style='text-align: center;'>II</td>
                <td data-title='Mã môn' style='text-align: center;'>CTT105</td>
                <td data-title='Tên lớp học' style='text-align: left;'>Lớp Mạng Máy tính (2016K2)</td>
                <td data-title='Loại điểm' style='text-align: left;'>Thi lần 1</td>
                <td data-title='Điểm' style='text-align: center;'>7.0</td>
            </tr><tr class='chieu-cao'>
                <td data-title='STT' style='text-align: center;'>11</td>
                <td data-title='Niên khóa' style='text-align: center;'>2016-2017</td>
                <td data-title='Học kỳ' style='text-align: center;'>II</td>
                <td data-title='Mã môn' style='text-align: center;'>CTT702</td>
                <td data-title='Tên lớp học' style='text-align: left;'>Lớp Quản trị Cơ sở dữ liệu (2016K2)</td>
                <td data-title='Loại điểm' style='text-align: left;'>Thi lần 1</td>
                <td data-title='Điểm' style='text-align: center;'>7.0</td>
            </tr><tr class='chieu-cao'>
                <td data-title='STT' style='text-align: center;'>12</td>
                <td data-title='Niên khóa' style='text-align: center;'>2017-2018</td>
                <td data-title='Học kỳ' style='text-align: center;'>I</td>
                <td data-title='Mã môn' style='text-align: center;'>CTH003</td>
                <td data-title='Tên lớp học' style='text-align: left;'>Lớp Tư tưởng HCM (2017K1)</td>
                <td data-title='Loại điểm' style='text-align: left;'>Thi lần 1</td>
                <td data-title='Điểm' style='text-align: center;'>7.0</td>
            </tr><tr class='chieu-cao'>
                <td data-title='STT' style='text-align: center;'>13</td>
                <td data-title='Niên khóa' style='text-align: center;'>2017-2018</td>
                <td data-title='Học kỳ' style='text-align: center;'>I</td>
                <td data-title='Mã môn' style='text-align: center;'>CTT005</td>
                <td data-title='Tên lớp học' style='text-align: left;'>Lớp Lý thuyết đồ thị (2017K1)</td>
                <td data-title='Loại điểm' style='text-align: left;'>Thi lần 1</td>
                <td data-title='Điểm' style='text-align: center;'>8.5</td>
            </tr><tr class='chieu-cao'>
                <td data-title='STT' style='text-align: center;'>14</td>
                <td data-title='Niên khóa' style='text-align: center;'>2017-2018</td>
                <td data-title='Học kỳ' style='text-align: center;'>I</td>
                <td data-title='Mã môn' style='text-align: center;'>CTT021</td>
                <td data-title='Tên lớp học' style='text-align: left;'>Lớp Logic toán (2017K1)</td>
                <td data-title='Loại điểm' style='text-align: left;'>Thi lần 1</td>
                <td data-title='Điểm' style='text-align: center;'>9.0</td>
            </tr><tr class='chieu-cao'>
                <td data-title='STT' style='text-align: center;'>15</td>
                <td data-title='Niên khóa' style='text-align: center;'>2017-2018</td>
                <td data-title='Học kỳ' style='text-align: center;'>I</td>
                <td data-title='Mã môn' style='text-align: center;'>CTT203</td>
                <td data-title='Tên lớp học' style='text-align: left;'>Lớp Hệ quản trị cơ sở dữ liệu (2017K1)</td>
                <td data-title='Loại điểm' style='text-align: left;'>Thi lần 1</td>
                <td data-title='Điểm' style='text-align: center;'>6.0</td>
            </tr><tr class='chieu-cao'>
                <td data-title='STT' style='text-align: center;'>16</td>
                <td data-title='Niên khóa' style='text-align: center;'>2017-2018</td>
                <td data-title='Học kỳ' style='text-align: center;'>I</td>
                <td data-title='Mã môn' style='text-align: center;'>CTT705</td>
                <td data-title='Tên lớp học' style='text-align: left;'>Lớp Lập trình Ứng dụng Quản lý I (2016) (2017K1)</td>
                <td data-title='Loại điểm' style='text-align: left;'>Thi lần 1</td>
                <td data-title='Điểm' style='text-align: center;'>7.0</td>
            </tr><tr class='chieu-cao'>
                <td data-title='STT' style='text-align: center;'>17</td>
                <td data-title='Niên khóa' style='text-align: center;'>2017-2018</td>
                <td data-title='Học kỳ' style='text-align: center;'>I</td>
                <td data-title='Mã môn' style='text-align: center;'>TTH063</td>
                <td data-title='Tên lớp học' style='text-align: left;'>Lớp Toán rời rạc (2017K1)</td>
                <td data-title='Loại điểm' style='text-align: left;'>Thi lần 1</td>
                <td data-title='Điểm' style='text-align: center;'>8.0</td>
            </tr><tr class='chieu-cao'>
                <td data-title='STT' style='text-align: center;'>18</td>
                <td data-title='Niên khóa' style='text-align: center;'>2017-2018</td>
                <td data-title='Học kỳ' style='text-align: center;'>II</td>
                <td data-title='Mã môn' style='text-align: center;'>CTT103</td>
                <td data-title='Tên lớp học' style='text-align: left;'>Lớp Hệ Điều hành (2017K2)</td>
                <td data-title='Loại điểm' style='text-align: left;'>Thi lần 1</td>
                <td data-title='Điểm' style='text-align: center;'>8</td>
            </tr><tr class='chieu-cao'>
                <td data-title='STT' style='text-align: center;'>19</td>
                <td data-title='Niên khóa' style='text-align: center;'>2017-2018</td>
                <td data-title='Học kỳ' style='text-align: center;'>II</td>
                <td data-title='Mã môn' style='text-align: center;'>CTT204</td>
                <td data-title='Tên lớp học' style='text-align: left;'>Lớp Phân tích thiết kế hệ thống thông tin (2017K2)</td>
                <td data-title='Loại điểm' style='text-align: left;'>Thi lần 1</td>
                <td data-title='Điểm' style='text-align: center;'>8</td>
            </tr><tr class='chieu-cao'>
                <td data-title='STT' style='text-align: center;'>20</td>
                <td data-title='Niên khóa' style='text-align: center;'>2017-2018</td>
                <td data-title='Học kỳ' style='text-align: center;'>II</td>
                <td data-title='Mã môn' style='text-align: center;'>CTT703</td>
                <td data-title='Tên lớp học' style='text-align: left;'>Lớp Lập trình Web I (2017K2)</td>
                <td data-title='Loại điểm' style='text-align: left;'>Thi lần 1</td>
                <td data-title='Điểm' style='text-align: center;'>7.5</td>
            </tr><tr class='chieu-cao'>
                <td data-title='STT' style='text-align: center;'>21</td>
                <td data-title='Niên khóa' style='text-align: center;'>2017-2018</td>
                <td data-title='Học kỳ' style='text-align: center;'>II</td>
                <td data-title='Mã môn' style='text-align: center;'>CTT732</td>
                <td data-title='Tên lớp học' style='text-align: left;'>Lớp Lập trình Ứng dụng Quản lý II (2016) (2017K2)</td>
                <td data-title='Loại điểm' style='text-align: left;'>Thi lần 1</td>
                <td data-title='Điểm' style='text-align: center;'>7.5</td>
            </tr><tr class='chieu-cao'>
                <td data-title='STT' style='text-align: center;'>22</td>
                <td data-title='Niên khóa' style='text-align: center;'>2017-2018</td>
                <td data-title='Học kỳ' style='text-align: center;'>II</td>
                <td data-title='Mã môn' style='text-align: center;'>CTT524</td>
                <td data-title='Tên lớp học' style='text-align: left;'>Lớp Công nghệ XML và ứng dụng (2017) (2017K2)</td>
                <td data-title='Loại điểm' style='text-align: left;'>Thi lần 1</td>
                <td data-title='Điểm' style='text-align: center;'>8.5</td>
            </tr><tr class='chieu-cao'>
                <td data-title='STT' style='text-align: center;'>23</td>
                <td data-title='Niên khóa' style='text-align: center;'>2017-2018</td>
                <td data-title='Học kỳ' style='text-align: center;'>II</td>
                <td data-title='Mã môn' style='text-align: center;'>CTT504</td>
                <td data-title='Tên lớp học' style='text-align: left;'>Lớp Phân tích Thiết kế Phần mềm (2017A) (2017K2)</td>
                <td data-title='Loại điểm' style='text-align: left;'>Thi lần 1</td>
                <td data-title='Điểm' style='text-align: center;'>6.5</td>
            </tr>
                    </tbody>
                </table>
            </div>
            <div style="clear:both"></div>
        </div>                
    </div>`

    return Chuoi_Qua_trinh_hoc_tap 
}



// Tạo Chuỗi HTML Danh sách 

// function Tao_Chuoi_HTML_Danh_sach_Diem(Danh_sach) {
//     var Chuoi_HTML_Danh_sach = `<div class='row'>`
//     Danh_sach.forEach(Sinh_vien => {
//         var Chuoi_Hinh = `<img src='../Media/${Sinh_vien.Ma_so}.png'
//                   style='width:40px;height:40px' />`
//         var Chuoi_Tom_tat = `<div class='btn'
//               style='text-align:left' >
//             ${Sinh_vien.Ten}<br />MSSV: ${Sinh_vien.Ma_so}<br/>Lớp: ${Sinh_vien.Ma_so_Lop}</div>`
//         var Chuoi_HTML = `<div class='col-md-4'  > 
//              ${Chuoi_Hinh}  ${Chuoi_Tom_tat}
//                      </div>`
//         Chuoi_HTML_Danh_sach += Chuoi_HTML
//     })
//     Chuoi_HTML_Danh_sach += `</div>`

//     return Chuoi_HTML_Danh_sach
// }

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