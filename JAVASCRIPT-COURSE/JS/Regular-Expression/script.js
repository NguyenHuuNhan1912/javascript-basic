// Regular Expression trong Javascript

/**
 * 1. test
 * 2. ^ -> Tìm xem chuỗi trong test có bắt đầu với ký tự được cho vào hay không
 * 3. $ -> Tìm xem chuỗi trong test có kết thúc với ký tự được cho vào hay không
 */

// console.log(/nguyen$/.test('Nhan Huu nguyen'));
// console.log(/^Nhan/.test('Nhan nguyen huu'));

// console.log(/[0-9]/.test('hello123'));

const myString = 'Nguyen Huu Nhan 0342040063';

// var result = myString.match(/[0-9]+/img);
    
const regexEmail = /[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/igm;
// Kiểm tra email hợp lệ

const regexPass = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/g;
/**
 * Mật khẩu chứa ít nhất
 * 1 Ký tự hoa
 * 1 Ký tự thường
 * 1 Chữ số
 * 1 Ký tự đặc biệt
 * Độ dài tối thiểu 8 ký tự
 */

const regexNumber = /((09|03|07|08|05)+([0-9]{8})\b)/g;
// Kiểm tra số điện thoại
/**
 * 1. Nhập đúng 10 số
 * 2. Nhập đúng các đầu số
 * 3. Phải  là số không phải là ký tự
 */

// var functionRegexEmail = (email) => {
//     return regexEmail.test(email);
// }
// var functionRegexPass = (pass) => {
//     return regexPass.test(pass);
// }
// var functionRegexNumber = (number) => {
//     return regexNumber.test(number);
// }
// console.log(functionRegexEmail('Nhanb1910114@student.ctu.edu.vn'));
// console.log(functionRegexPass('Nhancoder1912@'));
// console.log(functionRegexNumber('0103558394'));