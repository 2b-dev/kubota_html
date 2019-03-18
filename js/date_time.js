$(document).ready(function () {
  currentTime = new Date();
  var day = currentTime.getDay();
  var dayDate = currentTime.getDate();
  var month = currentTime.getMonth();
  var year = currentTime.getFullYear();

  var dayWeek = [
    [1, 'จันทร์'],
    [2, 'อังคาร'],
    [3, 'พุธ'],
    [4, 'พฤหัสบดี'],
    [5, 'ศุกร์'],
    [6, 'เสาร์'],
    [0, 'อาทิตย์']
  ];

  var monthInfo = [
    [0, 'มกราคม'],
    [1, 'กุมภาพันธ์'],
    [2, 'มีนาคม'],
    [3, 'เมษายน'],
    [4, 'พฤษภาคม'],
    [5, 'มิถุนายน'],
    [6, 'กรกฎาคม'],
    [7, 'สิงหาคม'],
    [8, 'กันยายน'],
    [9, 'ตุลาคม'],
    [10, 'พฤศจิกายน'],
    [11, 'ธันวาคม']
  ];

  function getName(arg1, arrayvalue) {
    for (var i = 0; i < arrayvalue.length; i++) {
      if (arg1 === arrayvalue[i][0]) {
        return arrayvalue[i][1];
      }
    }
  }

  function addLead0(arg1) {
    if (arg1 < 10) {
      return "0" + arg1;
    } else {
      return arg1;
    }
  }

  function getMeridiem(arg1) {
    if (arg1 >= 12) {
      return "PM";
    } else {
      return "AM";
    }
  }

  function realHour(arg1) {
    var output;
    if (arg1 > 12) {
      output = arg1 - 12;
      return output;
    } else if (arg1 === 12 || arg1 === 0) {
      output = 12;
      return output;
    } else {
      return arg1;
    }
  }

  //output
  var dayname = document.getElementsByClassName("dayname");
  dayname.innerHTML = getName(day, dayWeek);
  var daynum = document.getElementsByClassName("daynum");
  daynum.innerHTML = addLead0(dayDate);
  var monthname = document.getElementsByClassName("monthname");
  monthname.innerHTML = getName(month, monthInfo);
  var yearname = document.getElementsByClassName("yearname");
  yearname.innerHTML = year;
  $('.dayname').text(getName(day, dayWeek))
  $('.daynum').text(addLead0(dayDate))
  $('.monthname').text(getName(month, monthInfo))
  $('.yearname').text(year + 543)

  function timeoutput() {
    currentTime = new Date();
    var hour = currentTime.getHours();
    var min = currentTime.getMinutes();
    var sec = currentTime.getSeconds();

    //var output = addLead0(realHour(hour)) + ":" + addLead0(min) + ":" + addLead0(sec) + " " + getMeridiem(hour);
    var output = addLead0((hour)) + ":" + addLead0(min) + ":" + addLead0(sec);
    $('.timeinfo').text(output)
  }

  setInterval(timeoutput, 1000);

});