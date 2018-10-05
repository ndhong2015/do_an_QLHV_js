var XL_HTTP = require("http")
var XL_QueryString = require('querystring')
var So_hieu_Port = 8000
var Dich_vu = XL_HTTP.createServer((Yeu_cau, Dap_ung) => {  
        var Chuoi_Nhan = "";var Chuoi_Kq = "{}"
        var Chuoi_Tham_so = Yeu_cau.url.replace("/?","")
        var Tham_so = XL_QueryString.parse(Chuoi_Tham_so)
        var Ma_so_Xu_ly=Tham_so.Ma_so_Xu_ly
        Yeu_cau.on('data', (chunk) => { Chuoi_Nhan += chunk })
        Yeu_cau.on('end', () => {
            if (Ma_so_Xu_ly == "Doc_Danh_sach_Lop") {
                var Danh_sach=Doc_Danh_sach("LOP")
                Chuoi_Kq = JSON.stringify(Danh_sach)
            }
            else if (Ma_so_Xu_ly == "Doc_Danh_sach_Sinh_vien") {
              var Danh_sach=Doc_Danh_sach("SINH_VIEN")
              Chuoi_Kq = JSON.stringify(Danh_sach)
            }
            else if (Ma_so_Xu_ly == "Doc_Danh_sach_Giao_vien") {
              var Danh_sach=Doc_Danh_sach("GIAO_VIEN")
              Chuoi_Kq = JSON.stringify(Danh_sach)
            }
            else if (Ma_so_Xu_ly == "Doc_Danh_sach_Quan_ly") {
              var Danh_sach=Doc_Danh_sach("QUAN_LY")
              Chuoi_Kq = JSON.stringify(Danh_sach)
            }
            else if (Ma_so_Xu_ly == "Ghi_Quan_ly") {
              var Doi_tuong=JSON.parse(Chuoi_Nhan)
              Ghi_Doi_tuong(Doi_tuong,"QUAN_LY")             
            }
            else if (Ma_so_Xu_ly == "Ghi_Giao_vien") {
              var Doi_tuong=JSON.parse(Chuoi_Nhan)
              Ghi_Doi_tuong(Doi_tuong,"GIAO_VIEN")             
            }
            Dap_ung.setHeader("Access-Control-Allow-Origin", '*')
            Dap_ung.end(Chuoi_Kq);
            console.log(Chuoi_Kq);
        })
    })
Dich_vu.listen(So_hieu_Port)
//======Xử lý Lưu trữ 
var XL_File = require("fs")
var Thu_muc_Du_lieu = "Du_lieu"
function Doc_Danh_sach(Loai_Doi_tuong) {
  var Danh_sach = []
  var Duong_dan = "..//..//" + Thu_muc_Du_lieu + "//" + Loai_Doi_tuong
  var Danh_sach_Ten_Tap_tin = XL_File.readdirSync(Duong_dan, "UTF-8")
  Danh_sach_Ten_Tap_tin.forEach(Ten => {
    var Chuoi = XL_File.readFileSync(Duong_dan + "//" + Ten, "UTF-8")
    var Doi_tuong = JSON.parse(Chuoi)
    Danh_sach.push(Doi_tuong)
  })
  return Danh_sach
}
function Ghi_Doi_tuong(Doi_tuong,Loai_Doi_tuong){
  var Duong_dan = "..//..//" + Thu_muc_Du_lieu + "//" + Loai_Doi_tuong 
             + "//" + Doi_tuong.Ma_so + ".json"
  var Chuoi=JSON.stringify (Doi_tuong)     
  XL_File.writeFileSync(Duong_dan , Chuoi,"UTF-8")   
}

 
