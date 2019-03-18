new WOW().init();

function click_login() {
  let ipusername = $('input[name="input_username"]').val()
  let ippassword = $('input[name="input_password"]').val()
  if (ipusername === '' || ippassword === '') {
    Swal.fire({
      type: 'error',
      title: 'ผิดพลาด',
      text: 'กรุณากรอกข้อมูลให้ครบถ้วน',
      confirmButtonColor: '#009da5',
      confirmButtonText: 'ปิด'
    })
  } else {
    /*Swal.fire({
      type: 'error',
      title: 'ผิดพลาด',
      text: 'บัญชีผู้ใช้หรือรหัสผ่านไม่ถูกต้อง',
      confirmButtonColor: '#009da5',
      confirmButtonText: 'ปิด'
    })*/
    Swal.fire({
      type: 'success',
      title: 'สำเร็จ',
      text: 'เข้าสู่ระบบสำเร็จ',
      confirmButtonColor: '#009da5',
      confirmButtonText: 'ปิด'
    }).then((result) => {
      window.location = 'home.html'
    })
  }
}