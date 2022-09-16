// Regular Expression in Javascript

// Kiểm tra email hợp lệ
const regexEmail = /[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/igm;

/**
 * Kiểm tra độ mạnh của mật khẩu
 * 1 Ký tự hoa
 * 1 Ký tự thường
 * 1 Chữ số
 * 1 Ký tự đặc biệt
 * Độ dài tối thiểu 8 ký tự
 */
const regexPass = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/g;


/**
 * Kiểm tra tính hợp lệ của số điện thoại
 * - Nhập đúng 10 số
 * - Nhập đúng các đầu số(Viettel,Vietnamobile,...)
 * - Phải là số không phải là ký tự
 */
const regexNumber = /((09|03|07|08|05)+([0-9]{8})\b)/g;

var validationEmail = (myEmail) => {
    return regexEmail.test(myEmail);
}

console.log(validationEmail('nhanb1910114@student.ctu.edu.vn'));