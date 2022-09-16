//Made by Nguyen Huu Nhan - Math in Javascript

/**
 *                  =====> Những phương thức phổ biến của đối tượng Math trong Javascript <=====
 * -------------------------------------------------------------------------------------------------------------------
 * 1. abs(number) => Trả về giá trị tuyệt đối của một số                                                           
 * 2. sqrt(number) => Tính căn bậc 2 của một số
 * 3. pow(x,y) => Tính x mủ y
 * 4. max(x,y,z,...,n) => Tìm số lớn nhất với n tham số
 * 5. min(x,y,z,...,n) => Tìm số bé nhất với n tham số
 * 6. random() => Random ra 1 số thập phân
 * 7. floor(value) => value = n.m => Làm tròn xuống số nguyên gần nó nhất => kết quả làm tròn là n
 * 8. ceil(value) => value = n.m => Làm tròn lên số nguyên rần nó nhất => kết quả làm tròn là n+1
 * 9. round(value) => value = n.m thì nếu m = 5 thì kết quả làm trong là n+1 còn m<5 thì kết quả làm trong là n
 * 10. log10(value) => Tính log cơ số 10
 * 11. log2(value) => Tính log cơ số 2
 * 12. sin(value) => Tìm sin của 1 số (Trả về số dạng radians, để chuyển sang độ cần nhân Math.PI / 180)
 * 13. cos(value) => Tìm cos của 1 số (Trả về số dạng radians, để chuyển sang độ cần nhân Math.PI / 180)
 * 14. tan(value) => Tìm tan của 1 số (Trả về số dạng radians, để chuyển sang độ cần nhân Math.PI / 180)
 * 15. [PI,E,LN2,LN10] => Các hằng số toán học của đối tượng Math gồm [PI, EULER, LN(2), LN(10)]
 * --------------------------------------------------------------------------------------------------------------------
 */


/**
 * 1. abs(value)
    * Syntax => Math.abs(value)
    * Meaning => Trả về giá trị tuyệt đối của một số
 */
var absNumber = -1912;
console.log(`abs(${absNumber}) = ${Math.abs(absNumber)}`); //1912

/**
 * 2. sqrt(value)
    * Syntax => Math.sqrt(value)
    * Meaning => Tính căn bậc 2 của một số
 */

var sqrtNumber = 8;
console.log(`sqrt(${sqrtNumber}) = ${Math.sqrt(sqrtNumber)}`); //sqrt(8) = 2.8284271247461903

/**
 * 3. pow(x,y)
    * Syntax => Math.pow(x,y)
    * Meaning => Tính x mủ y
 */

var xNumber = 6;
var yNumber = 3;
console.log(`pow(${xNumber},${yNumber}) = ${Math.pow(xNumber, yNumber)}`); // pow(6,3) = 216

/**
 * 3. max(x,y,z,...,n)
    * Syntax => Math.max(x,y,z,...,n)
    * Meaning => Tìm số lớn nhất với n tham số
 */
var x = 19, y = 12, z = 2001;
console.log(`max(${x},${y},${z}) = ${Math.max(x, y, z)}`); // max(19,12,2001) = 2001
// var maxArr = [1,-1,1000,50,63,19,12,100,1912];
// console.log(`maxArr = ${Math.max(...maxArr)}`);

/**
 * 5. min(x,y,z,...,n)
    * Syntax => Min.max(x,y,z,...,n)
    * Meaning => Tìm số bé nhất với n tham số
 */
var x1 = 10, y1 = 10, z1 = 20001;
console.log(`min(${x1},${y1},${z1}) = ${Math.min(x1, y1, z1)}`); // min(19,12,2000) = 10 

/**
 * 6. random()
    * Syntax => Math.random()
    * Meaning => Random ra 1 số thập phân
*/

var randomNumber1 = Math.random();
var randomNumber2 = Math.random() * 10; // Float[0;10]
var randomNumber3 = Math.random() * 90 + 10; // Float[10;100]

console.log(`Math.random() = ${randomNumber1.toFixed(3)}`); //Math.random() = 0.322
console.log(`INTEGER[0;10] = ${Math.floor(randomNumber2)}`); // INTEGER[0;10] = 8
console.log(`INTEGER[10,100] = ${Math.floor(randomNumber3)}`); // INTEGER[10;100] = 19

/**
 * 7. floor(value) 
   * Syntax => Math.floor(value)
   * Meaning => value = n.m => Làm tròn xuống số nguyên gần nó nhất => kết quả làm tròn là n
 */
var floorNumber = 19.12;
console.log(`floor(${floorNumber}) = ${Math.floor(floorNumber)}`); // floor(19.2) = 19

/**
 * 8. ceil(value) 
   * Syntax => Math.ceil(value)
   * Meaning => value = n.m => Làm tròn lên số nguyên rần nó nhất => kết quả làm tròn là n+1
 */
var ceilNumber = 19.12;
console.log(`ceil(${ceilNumber}) = ${Math.ceil(ceilNumber)}`); // ceil(19.12) = 20

/**
 * 9. round(value)
   * Syntax => Math.round(value)
   * Meaning => value = n.m thì nếu m = 5 thì kết quả làm trong là n+1 còn m<5 thì kết quả làm trong là n
 */

var roundNumber1 = 19.10;
var roundNumber2 = 19.50;
console.log(`round(${roundNumber1}) = ${Math.round(roundNumber1)}`); //19
console.log(`round(${roundNumber2}) = ${Math.round(roundNumber2)}`); //20


/**
 * [10,11] => log10() và log2()
   * Syntax => Math.log10(value) and Math.log2(value)
   * Meaning => 2 hàm trên dùng để tính log cơ số 10 và 2
 */

var log10Number = 63;
var log2Number = 67;
console.log(`log10(${log10Number}) = ${Math.log10(log10Number)}`); // log10(63) = 1.7993405494535817
console.log(`log2(${log2Number}) = ${Math.log2(log2Number)}`); // log2(67) = 6.066089190457772

/**
 * [12,13,14] => sin(value) and cos(value) and tan(value)
   * Syntax => Math.sin(value), Math.cos(value), Math.tan(value) 
   * Meaning => Hàm được sử dụng để tìm sin,cos,tan của một số dưới dạng radians
   * Note: Muốn chuyển từ radians sang độ thì nhân thêm cho Math.PI/180
 */
var sinNumber = 90;
var cosNumber = 180;
var tanNumber = 0;

console.log(`sin(${sinNumber}) = ${Math.sin(sinNumber * (Math.PI / 180))}`); // 1
console.log(`cos(${cosNumber}) = ${Math.cos(cosNumber * (Math.PI / 180))}`); // -1
console.log(`tan(${tanNumber}) = ${Math.tan(tanNumber * (Math.PI / 180))}`); // 0


/**
 * 15. Các hằng số toán học của đối tượng MATH trong JS
   * [Math.PI, Math.Euler, Math.LN2, Math.LN10]
 */

const constNumberMath = [Math.PI, Math.E, Math.LN2, Math.LN10];
for (let index in constNumberMath) {
    console.log(constNumberMath[index]);
}
 // 3.141592653589793, 2.718281828459045, 0.6931471805599453, 2.302585092994046
