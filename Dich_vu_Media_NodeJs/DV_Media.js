var File = require("fs")
var NodeJs_Dich_vu = require("http")
var Duong_dan_Thu_muc_Media = "Media"
var Port = 2000
var Dich_vu = NodeJs_Dich_vu.createServer((Yeu_cau, Dap_ung) => {
    var Chuoi_Nhan=""
    var Dia_chi_Xu_ly = Yeu_cau.url
    Yeu_cau.on('data', (chunk) => {Chuoi_Nhan += chunk})
    Yeu_cau.on('end', () => {
         var Duong_dan_Tap_tin = Duong_dan_Thu_muc_Media + Dia_chi_Xu_ly
         if ( Dia_chi_Xu_ly !="/" 
                   && File.existsSync(Duong_dan_Tap_tin)) {
           var Nhi_phan = File.readFileSync(Duong_dan_Tap_tin)
           
           Dap_ung.setHeader("Access-Control-Allow-Origin", '*')
           Dap_ung.writeHead(200, {'Content-Type': 'image/png'})
           Dap_ung.end(Nhi_phan, 'binary')
        }
        else {
          Dap_ung.end("")
        }
    })
})

Dich_vu.listen(Port);
