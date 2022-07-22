// Bài tập sắp xếp tăng dần
document.getElementById("sapXep").onclick = function () {
  // Input
  var num1 = document.getElementById("soThu1").value * 1;
  var num2 = document.getElementById("soThu2").value * 1;
  var num3 = document.getElementById("soThu3").value * 1;
  var thuTuTangDan;

  // Process
  if (num1 > num2 && num1 > num3) {
    thuTuTangDan = num1 + ">" + num2 + ">" + num3;
  } else if (num1 > num2 && num3 > num2) {
    thuTuTangDan = num1 + ">" + num3 + ">" + num2;
  } else if (num1 > num2 && num3 > num1) {
    thuTuTangDan = num3 + ">" + num1 + ">" + num2;
  } else if (num2 > num1 && num2 > num3) {
    thuTuTangDan = num2 + ">" + num1 + ">" + num3;
  } else if (num2 > num3 && num3 > num1) {
    thuTuTangDan = num2 + ">" + num3 + ">" + num1;
  } else {
    thuTuTangDan = num3 + ">" + num2 + ">" + num1;
  }

  // Output
  var result = "Thứ tự tăng dần là: " + thuTuTangDan;
  document.getElementById("thongBaoSoLonNhat").innerHTML = result;
};

// Bài tập gửi lời chào
document.getElementById("loiChao").onclick = function () {
  // Input
  var dad = document.getElementById("chonTen").value;
  var mom = document.getElementById("chonTen").value;
  var brother = document.getElementById("chonTen").value;
  var sister = document.getElementById("chonTen").value;
  var loiChao;

  // Process
  if (dad) {
    loiChao = dad;
  } else if (mom) {
    loiChao = mom;
  } else if (brother) {
    loiChao = brother;
  } else if (sister) {
    loiChao = sister;
  } else {
    loiChao = "Vui lòng chọn người sử dụng";
  }

  // Output
  var result = "Xin chào: " + loiChao;
  document.getElementById("thongBaoLoiChao").innerHTML = result;
};

// Bài tập tính số chẵn, số lẽ
document.getElementById("tinhToan").onclick = function () {
  // Input
  var number1 = document.getElementById("soDauTien").value * 1;
  var number2 = document.getElementById("soThuHai").value * 1;
  var number3 = document.getElementById("soThuBa").value * 1;
  var so1;
  var so2;
  var so3;

  // Process
  if (number1 % 2 === 0) {
    so1 = 1;
  } else {
    so1 = 0;
  }

  if (number2 % 2 === 0) {
    so2 = 1;
  } else {
    so2 = 0;
  }

  if (number3 % 2 === 0) {
    so3 = 1;
  } else {
    so3 = 0;
  }

  var tongSoChan = so1 + so2 + so3;
  var tongSoLe = 3 - tongSoChan;

  // Output
  var showInfo = "";
  showInfo += "<p>Số chẵn là : " + tongSoChan + "</p>";
  showInfo += "<p>Số lẻ là : " + tongSoLe + "</p>";
  document.getElementById("thongBaoTinhToan").innerHTML = showInfo;
};

// Bài tập dự đoán loại tam giác
document.getElementById("duDoan").onclick = function () {
  // Input
  var canhDaiA = document.getElementById("canhA").value * 1;
  var canhDaiB = document.getElementById("canhB").value * 1;
  var canhDaiC = document.getElementById("canhC").value * 1;
  var tamGiac;

  // Process
  if (canhDaiA === 3 && canhDaiB === 3 && canhDaiC === 3) {
    tamGiac = "Tam Giác Đều";
  } else if (canhDaiA === 2 && canhDaiB === 2 && canhDaiC === 1) {
    tamGiac = "Tam Giác Cân";
  } else if (canhDaiA === 3 && canhDaiB === 4 && canhDaiC === 5) {
    tamGiac = "Tam Giác Vuông";
  } else {
    tamGiac = "Tam Giác Khác";
  }

  // Output
  document.getElementById("thongBaoLoaiTamGiac").innerHTML = tamGiac;
};
