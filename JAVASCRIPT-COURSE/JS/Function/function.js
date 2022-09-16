// Global scope
// Block scope
// Function scope
// Lexical scope
// Closure
// Declaration function
// Expression function
// Arrow function
// callback https://viblo.asia/p/javascript-callback-la-gi-07LKXMdkZV4
// khai niem dong bo:  https://viblo.asia/p/tong-hop-xu-ly-bat-dong-bo-trong-javascript-callback-promise-va-async-Az45ba6LlxY
/** 
 * HÀM(Function) TRONG JAVASCRIPT | Nguyen Huu Nhan
 * - Các loại Function 
 *      + Declaration function -> Function đơn giản, nguyên thủy
 *      + Expression function(Anonymous function) -> Gán function cho 1 biến
 *      + Arrow function(ES6) -> Các viết tối ưu hơn của Expression function
 *      + Callback function -> Một function có tham số là 1 function khác
 *      + IIFE(Immediately Invoked Function Expression) function -> Khai báo hàm và chạy ngay lập tức
 * - Các vấn đề của funtion
 *      + Parameter và Argument -> Tham số và đối số trong function
 *      + Object arguments
 *      + Function scope -> Function sử dụng global scope(Biến toàn cục) gọi là function scope
 *      + Flexical scope -> Định nghĩa 1 biến mà biến đó chỉ được truy xuất trong function, ra ngoài function thì sẽ không truy cập được
 *      + Closures -> Cho phép định nghĩa các function lồng nhau, các function con được cấp quyền để sử dụng các biến của function cha
 *      + Hoisting -> Thứ tự ưu tiên khi chạy của function
 */


// Tính tổng hai số sử dụng Declaration function
function sum(a, b) {
    return a + b;
}
console.log(sum(12, 12)); // result: 24


// Tính tổng hai số sử dụng Expression function
var sum2 = function(a, b) {
    return a + b;
}
console.log(sum2(10, 10)); // result: 20

// Tính tổng hai số sử dụng Arrow function
var sum3 = (a, b) => {
    return a + b;
}
console.log(sum3(19, 12)); // result: 31


//Tính tổng hai số sử dụng Callback function
function sumTwo(a,b) {
    return a+b;
}

function myCallBackSumTwo(a,b,suTmwo){
    console.log(`Tong hai so la ${sumTwo(a,b)}`);
}

myCallBackSumTwo(10,19,sumTwo);

// Anonymous Callback function
function myCallBack(message, sayHi){
    sayHi(message);
}

myCallBack('Nhan Coder', function sayhi(message) {
    console.log(message);
});


// Object arguments trong javascript
function sum4() {
    let total = 0;
    for(let i=0; i<arguments.length; i++){
        total += arguments[i];
    }
    return total;
}
console.log(sum4(10,20,30,40,60));

/**
 * Hoisting trong javascript
 * Định nghĩa: là cơ chế của JavaScript cho phép các khai báo biến hoặc hàm được dời lên trên đầu phạm vi của chúng trước khi thực thi đoạn code.là cơ chế của JavaScript cho phép các khai báo biến hoặc hàm được dời lên trên đầu phạm vi của chúng trước khi thực thi đoạn code.
 * Những trường hợp ngoại lệ không hoisting được
 *  + Hoisting không áp dụng cho Expression function
 */

// Hoisting đối với biến
myFullName = 'Nguyen Huu Nhan';
console.log(myFullName);
var myFullName;

/**
*   - Trong trường hợp trên chúng ta thấy biến myFullName được khai báo sau khi nó thực thi mà kết quả của
      console.log vẫn không bị lỗi là do cơ chế hoisting trong javascript đã chuyển biến myFullName lên đầu trước khi
      nó thực thi(Link tham khảo chi tiết: https://niithanoi.edu.vn/hoisting-trong-javascript.html)
*/

//Trường hợp lỗi đối hoisting đối với biến
console.log(myFullName2);
var myFullName2 = 'Nguyen Trong Nghia';
/**
 * Như chúng ta đã biết các biến mặc định có giá trị undefined, đối với cơ chế hoisting mặc dù chúng ta đã gán trị
 * cho chúng nhưng thực chất vẫn là undefined
 * Đoạn code trên javascript sẽ thực thi như thế này
 * var myFullName2;
 * console.log(myFullName2);
 * myFullName2 = 'Nguyen Trong Nghia';
 * -> Như chúng ta thấy thì phần gán trị cho biến vẫn nằm phía sau console.log và đó lưu ý khi chúng ta sử dụng hoisting trong javascript
 */

// Còn hoisting đối với hàm thì tương tự như biến
showFullName('Nguyen Huu Nhan');
function showFullName(myName) {
    console.log(myName);
}
// Chúng ta gọi hàm thực thi trước khi nó được khởi tạo -> Cơ chế hoisting đối với hàm được xác lập

// Đối với Expression function thì không sử dụng được hoisting
// showAge(21);
// var showAge = (myAge) => {
//     console.log(myAge);
// }
/**
 * Đoạn code trên sẽ bị lỗi vì Expression function chỉ cho phép khởi tạo trước và thực thi sau
   Để hiểu sâu hơn thì bản chất của nó là vừa khai báo biến vừa khởi tạo nên hoisting thực thi chỉ lấy phần
   khởi tạo và gán cho nó là undefined đưa lên đầu và phần gán giá trị nó vẫn nằm nguyên ở đấy nên đoạn code thực thi không nhận được 
   giá trị 
*/

// Thực khi ngay lập tức khi hàm vừa được triển khai
(function(a,b){
    console.log(a+b);
})(10,10);


var showNameUpperCase = (yourName="") => {
    let myString = yourName.toLowerCase();
    let firstMyString = yourName.charAt(0);
    let firstMyStringUpperCase = yourName.charAt(0).toUpperCase();
    return myString.replace(firstMyString,firstMyStringUpperCase);
}
console.log(`Name upperCase: ${showNameUpperCase('nhan')}`);