// bài tập 1
// TRẢ KẾT QUẢ NGÀY TRƯỚC
document.getElementById("btnHomQua").onclick = function () {
  //input: ngay,thang,nam : number
  var day = +document.getElementById("nhapNgay1").value;
  var month = +document.getElementById("nhapThang1").value;
  var year = +document.getElementById("nhapNam").value;
  var ngayHomQua = "";
  switch (month) {
    case 1:
      {
        if (day === 1 && month === 1) {
          ngayHomQua = "31/12" + "/" + (year - 1);
        } else {
          ngayHomQua = day - 1 + "/" + month + "/" + year;
        }
      }
      break;
    case 2:
      {
        if (day === 1 && month === 2) {
          ngayHomQua = "31/1" + "/" + year;
        } else {
          ngayHomQua = day - 1 + "/" + month + "/" + year;
        }
      }
      break;
    case 3:
      {
        if (day === 1 && month === 3) {
          ngayHomQua = "28/2" + "/" + year;
        } else {
          ngayHomQua = day - 1 + "/" + month + "/" + year;
        }
      }
      break;
    case 4:
      {
        if (day === 1 && month === 4) {
          ngayHomQua = "31/3" + "/" + year;
        } else {
          ngayHomQua = day - 1 + "/" + month + "/" + year;
        }
      }
      break;
    case 5:
      {
        if (day === 1 && month === 5) {
          ngayHomQua = "30/4" + "/" + year;
        } else {
          ngayHomQua = day - 1 + "/" + month + "/" + year;
        }
      }
      break;
    case 6:
      {
        if (day === 1 && month === 6) {
          ngayHomQua = "31/5" + "/" + year;
        } else {
          ngayHomQua = day - 1 + "/" + month + "/" + year;
        }
      }
      break;
    case 7:
      {
        if (day === 1 && month === 7) {
          ngayHomQua = "30/6" + "/" + year;
        } else {
          ngayHomQua = day - 1 + "/" + month + "/" + year;
        }
      }
      break;
    case 8:
      {
        if (day === 1 && month === 8) {
          ngayHomQua = "31/7" + "/" + year;
        } else {
          ngayHomQua = day - 1 + "/" + month + "/" + year;
        }
      }
      break;
    case 9:
      {
        if (day === 1 && month === 9) {
          ngayHomQua = "31/8" + "/" + year;
        } else {
          ngayHomQua = day - 1 + "/" + month + "/" + year;
        }
      }
      break;
    case 10:
      {
        if (day === 1 && month === 10) {
          ngayHomQua = "30/9" + "/" + year;
        } else {
          ngayHomQua = day - 1 + "/" + month + "/" + year;
        }
      }
      break;
    case 11:
      {
        if (day === 1 && month === 11) {
          ngayHomQua = "31/10" + "/" + year;
        } else {
          ngayHomQua = day - 1 + "/" + month + "/" + year;
        }
      }
      break;
    case 12:
      {
        if (day === 1 && month === 12) {
          ngayHomQua = "30/11" + "/" + year;
        } else {
          ngayHomQua = day - 1 + "/" + month + "/" + year;
        }
      }
      break;
  }
  document.getElementById("KetQuaLa").innerHTML = +ngayHomQua;
  // TRẢ KẾT QUẢ MAI
  var ngayMai = "";
  switch (month) {
    case 1:
      {
        if (day === 31 && month === 1) {
          ngayMai = "1/2" + "/" + year;
        } else {
          ngayMai = day + 1 + "/" + month + "/" + year;
        }
      }
      break;
    case 2:
      {
        if (day === 28 && month === 2) {
          ngayMai = "1/3" + "/" + year;
        } else {
          ngayMai = day + 1 + "/" + month + "/" + year;
        }
      }
      break;
    case 3:
      {
        if (day === 31 && month === 3) {
          ngayMai = "1/4" + "/" + year;
        } else {
          ngayMai = day + 1 + "/" + month + "/" + year;
        }
      }
      break;
    case 4:
      {
        if (day === 30 && month === 4) {
          ngayMai = "1/5" + "/" + year;
        } else {
          ngayMai = day + 1 + "/" + month + "/" + year;
        }
      }
      break;
    case 5:
      {
        if (day === 31 && month === 5) {
          ngayMai = "1/6" + "/" + year;
        } else {
          ngayMai = day + 1 + "/" + month + "/" + year;
        }
      }
      break;
    case 6:
      {
        if (day === 30 && month === 6) {
          ngayMai = "1/7" + "/" + year;
        } else {
          ngayMai = day + 1 + "/" + month + "/" + year;
        }
      }
      break;
    case 7:
      {
        if (day === 31 && month === 7) {
          ngayMai = "1/8" + "/" + year;
        } else {
          ngayMai = day + 1 + "/" + month + "/" + year;
        }
      }
      break;
    case 8:
      {
        if (day === 31 && month === 8) {
          ngayMai = "1/9" + "/" + year;
        } else {
          ngayMai = day + 1 + "/" + month + "/" + year;
        }
      }
      break;
    case 9:
      {
        if (day === 30 && month === 9) {
          ngayMai = "1/10" + "/" + year;
        } else {
          ngayMai = day + 1 + "/" + month + "/" + year;
        }
      }
      break;
    case 10:
      {
        if (day === 31 && month === 10) {
          ngayMai = "1/11" + "/" + year;
        } else {
          ngayMai = day + 1 + "/" + month + "/" + year;
        }
      }
      break;
    case 11:
      {
        if (day === 30 && month === 11) {
          ngayMai = "1/12" + "/" + year;
        } else {
          ngayMai = day + 1 + "/" + month + "/" + year;
        }
      }
      break;
    case 12:
      {
        if (day === 31 && month === 12) {
          ngayMai = "1/1" + "/" + (year + 1);
        } else {
          ngayMai = day + 1 + "/" + month + "/" + year;
        }
      }
      break;
  }
  document.getElementById("KetQuaLa").innerHTML =
    "Ngày mai là ngày :" + ngayMai;
};

// bài tập 2
document.getElementById("btnTinhNgay").onclick = function () {
  //input: nhapthang,Nam: number
  var nhapThang = Number(document.getElementById("thang").value);
  var nhapNam = Number(document.getElementById("nhapNam").value);
  //output: tinh ngày: string
  var tinhNgay = "";
  switch (nhapThang) {
    case 1:
      {
        tinhNgay = "31 ngày";
      }
      break;
    case 2:
      {
        if ((nhapNam % 4 === 0 && nhapNam % 100 != 0) || nhapNam % 400 === 0) {
          tinhNgay = "29 ngày";
        } else {
          tinhNgay = "28 ngày";
        }
      }
      break;
    case 3:
      {
        tinhNgay = "31 ngày";
      }
      break;
    case 4:
      {
        tinhNgay = "30 ngày";
      }
      break;
    case 5:
      {
        tinhNgay = "31 ngày";
      }
      break;
    case 6:
      {
        tinhNgay = "30 ngày";
      }
      break;
    case 7:
      {
        tinhNgay = "31 ngày";
      }
      break;
    case 8:
      {
        tinhNgay = "31 ngày";
      }
      break;
    case 9:
      {
        tinhNgay = "30 ngày";
      }
      break;
    case 10:
      {
        tinhNgay = "31 ngày";
      }
      break;
    case 11:
      {
        tinhNgay = "30 ngày";
      }
      break;
    case 12:
      {
        tinhNgay = "31 ngày";
      }
      break;
  }
  //in output đó ra giao diện
  document.getElementById("KetQua").innerHTML =
    "Tháng " + nhapThang + " năm " + nhapNam + " có " + tinhNgay;
};
// bài tập 3
document.getElementById("btnDocSo").onclick = function () {
  //input: nhap3so: number
  var nhap3So = Number(document.getElementById("nhapSo").value);

  var hangTram = Math.floor(nhap3So / 100);
  var hangChuc = Math.floor((nhap3So / 10) % 10);
  var hangdv = nhap3So % 10;
  //output: docso: string
  var docSo = "";

  switch (hangTram) {
    case 1:
      {
        hangTram = "Một trăm";
      }
      break;

    case 2:
      {
        hangTram = "Hai trăm";
      }
      break;

    case 3:
      {
        hangTram = "Ba trăm";
      }
      break;
    case 4:
      {
        hangTram = "Bốn trăm";
      }
      break;
    case 5:
      {
        hangTram = "Năm trăm";
      }
      break;
    case 6:
      {
        hangTram = "Sáu trăm";
      }
      break;
    case 7:
      {
        hangTram = "Bảy trăm";
      }
      break;
    case 8:
      {
        hangTram = "Tám trăm";
      }
      break;
    case 9:
      {
        hangTram = "Chín trăm";
      }
      break;
  }
  switch (hangChuc) {
    case 0:
      {
        hangChuc = " linh";
      }
      break;
    case 1:
      {
        hangChuc = " mười";
      }
      break;
    case 2:
      {
        hangChuc = " hai mươi";
      }
      break;

    case 3:
      {
        hangChuc = " ba mươi";
      }
      break;
    case 4:
      {
        hangChuc = " bốn mươi";
      }
      break;
    case 5:
      {
        hangChuc = " năm mươi";
      }
      break;
    case 6:
      {
        hangChuc = " sáu mươi";
      }
      break;
    case 7:
      {
        hangChuc = " bảy mươi";
      }
      break;
    case 8:
      {
        hangChuc = " tám mươi";
      }
      break;
    case 9:
      {
        hangChuc = " chín mươi";
      }
      break;
  }
  switch (hangdv) {
    case 0:
      {
        hangdv = "";
      }
      break;
    case 1:
      {
        hangdv = " một";
      }
      break;
    case 2:
      {
        hangdv = " hai";
      }
      break;
    case 3:
      {
        hangdv = " ba";
      }
      break;
    case 4:
      {
        hangdv = " bốn";
      }
      break;
    case 5:
      {
        hangdv = " lăm";
      }
      break;
    case 6:
      {
        hangdv = " sáu";
      }
      break;
    case 7:
      {
        hangdv = " bảy";
      }
      break;
    case 8:
      {
        hangdv = " tám";
      }
      break;
    case 9:
      {
        hangdv = " chín";
      }
      break;
  }
  //progress:
  docSo = hangTram + hangChuc + hangdv;
  //in output đó ra giao diện
  document.getElementById("KetQua1").innerHTML = docSo;
};
// bài tập 4
document.getElementById("btnTim").onclick = function () {
  //input: nhapten : string
  //input: nhaptoado x,y: number
  var Ten1 = document.getElementById("nhapTen1").value;
  var Ten2 = document.getElementById("nhapTen2").value;
  var Ten3 = document.getElementById("nhapTen3").value;
  var X1 = Number(document.getElementById("toaDoX1").value);
  var Y1 = Number(document.getElementById("toaDoY1").value);
  var X2 = Number(document.getElementById("toaDoX2").value);
  var Y2 = Number(document.getElementById("toaDoY2").value);
  var X3 = Number(document.getElementById("toaDoX3").value);
  var Y3 = Number(document.getElementById("toaDoY3").value);
  var z1 = Number(document.getElementById("toaDoX4").value);
  var z2 = Number(document.getElementById("toaDoY4").value);
  //progress:
  d1 = Math.sqrt(Math.pow(z1 - X1, 2) + Math.pow(z2 - Y1, 2));
  d2 = Math.sqrt(Math.pow(z1 - X2, 2) + Math.pow(z2 - Y2, 2));
  d3 = Math.sqrt(Math.pow(z1 - X3, 2) + Math.pow(z2 - Y3, 2));
  //output: tiM :STRING
  var tim = "";
  if (d1 > d2 && d1 > d3) {
    tim = Ten1;
  } else if (d2 > d1 && d2 > d3) {
    tim = Ten2;
  } else {
    tim = Ten3;
  }
  //in output đó ra giao diện
  document.getElementById("KetQuaToaDo").innerHTML =
    "Sinh viên xa trường nhất :" + tim;
};
