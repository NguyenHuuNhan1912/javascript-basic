// Made by Nguyen Huu Nhan - String in Javascript

/**
 *                             =====> Những phương thức PHỔ BIẾN trong JAVASCRIPT <=====
 * ----------------------------------------------------------------------------------------------------------------
    * 1. length => Trả về độ dài của chuỗi
    * 2. split(value,limit) => Được sử dụng để chuyển chuỗi thành mảng 
    * 3. toLowerCase() => In hoa chuỗi
    * 4. toUpperCase() => In thường chuỗi
    * 5. startsWith(value, start) => Kiểm tra chuỗi mẹ có được bắt đầu bằng chuỗi con truyền vào hay không
    * 6. endsWith(value, length) => Kiểm tra chuỗi mẹ có được kết thúc bằng chuỗi con truyền vào hay không( bắt đầu ở cuối chuỗi)
    * 7. indexOf(value, start) => Trả về vị trí xuất hiện đầu tiên của ký tự(hoặc chuỗi ký tự)
    * 8. lastIndexOf(value, start) => Trả về vị trí xuất hiện cuối cùng của ký tự(hoặc chuỗi ký tự)
    * 9. trim() => Xóa khoảng trắng dư thừa ở đầu và cuối chuỗi
    * 10. includes(value, start) => Hàm kiểm tra xem kí tự(hoặc chuỗi kí tự) có xuất hiện trong chuỗi ban đầu hay không
    * 11. replace(oldValue, newValue) => Hàm thay thế chuỗi
    * 12. slice (start, end) => Hàm cắt chuỗi
    * 13. charAt(index) => Hàm trả về ký tự theo vị trí nhập vào
    * 14. charCodeAt(value) => Hàm trả về ký tự NHỊ PHÂN theo vị trí nhập vào
    * 15. repeat(n) => Hàm lặp lại chuỗi n lần
    * 16. str1.concat(str2,str3,...,strN) => Nối hai hay nhiều chuỗi lại với nhau
    * 17. String(value) => Chuyển các kiểu dữ liệu khác về String
* ----------------------------------------------------------------------------------------------------------------
*/

// myString
var myString = 'Fullstack Developer';


console.log('==> length <==');
/**
 * 1. length 
    * Syntax => myString.length 
    * Meaning => Hàm trả về ĐỘ DÀI của chuỗi bắt đầu từ vị trí index = 0 
 */

console.log(myString.length); 
// 19(0-18 là 19 kí tự)

console.log('==> split(value, limit) <==');
/**
 * 2. split(value,limit)
    *  Syntax => myString.split(value, limit) 
    * Meaning => Hàm chuyển từ chuỗi(string) sang mảng(array)
 */

console.log(myString.split(''));
// ['F', 'u', 'l', 'l', 's', 't', 'a', 'c', 'k', ' ', 'D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r']

console.log(myString.split(' '));
// ['Fullstack', 'Developer']

console.log(myString.split('/'));
// ['Fullstack Developer']

console.log(myString.split(' ', 1));
// ['Fullstack']

console.log('==> toLowerCase() and toUpperCase() <==');
/**
 * 3,4 toLowerCase() and toUpperCase()
    * Syntax => myString.toLowerCase() and myString.toUpperCase()
    * Meaning => In thường toàn bộ chuỗi - In hoa toàn bộ chuỗi
 */

console.log(myString.toLowerCase());
// fullstack developer

console.log(myString.toUpperCase());
// FULLSTACK DEVELOPER

console.log('==> startsWith(value, start) <==');
/**
 * 5. startsWith()
    *  Syntax => myString.startsWith(value, start)
    *  Meaning => Kiểm tra xem chuỗi mẹ ban đầu có bắt đầu với kí tự(hoặc chuỗi kí tự) từ chuỗi con được truyền vào hay không 
 */

console.log(myString.startsWith('Fullstack'));
// true

console.log(myString.startsWith('fullstack'));
// false

console.log(myString.startsWith('Fullstack',10));
// fasle

console.log(myString.startsWith('F'));
// true

console.log('==> endsWith(value,start) <==');
/**
 * 6. endsWith(value, length)
    *  Syntax => myString.endsWith(value, length)
    *  Meaning => Kiểm tra xem chuỗi mẹ ban đầu có kết thúc với kí tự(hoặc chuỗi kí tự) từ chuỗi con được truyền vào hay không 
 */

console.log(myString.endsWith('Developer'));
// true
 
console.log(myString.endsWith('D'));
// false

console.log(myString.endsWith('r'));
// true

console.log(myString.endsWith('er',18));
// false

console.log(myString.endsWith('er',myString.length));
//true

console.log('===> indexOf(value,start) <===');
/**
 * 7. indexOf(value, start)
    * Syntax => myString.indexOf(value, start)
    * Meaning => Trả về vị trí xuất hiện ĐẦU TIÊN của ký tự(hoặc chuỗi ký tự)
 */

console.log(myString.indexOf('Fullstack'));
// 0

console.log(myString.indexOf('fullstack',1));
// -1

console.log(myString.indexOf('Dev'));
//10

console.log(myString.indexOf('F'));
// 0

console.log(myString.indexOf('F',1));
// -1

console.log('===> lastIndexOf(value, start) <===')
/**
 * 8. lastIndexOf(value,start)
    * Syntax => myString.lastIndexOf(value, start)
    * Meaning => Trả về vị trí xuất hiện cuối cùng của ký tự(hoặc chuỗi ký tự)
 */

console.log(myString.lastIndexOf('l'));
// 14

console.log(myString.lastIndexOf('D'));
// 10

console.log('===> trim() <===')
/**
 * 9. trim()
    * Syntax => myString.trim()
    * Meaning => Xóa khoảng trắng dư thừa ở đầu và cuối chuỗi
 */

var myStringHaveSpace = '        Nguyen Huu Nhan       ';
var myStringTrim = myStringHaveSpace.trim();
console.log(myStringTrim);
// Nguyen Huu Nhan

console.log('===> includes(value,start) <===')
/**
 * 10. includes(value, start)
    * Syntax => myString.includes(value, start) 
    * Meaning => Hàm kiểm tra xem kí tự(hoặc chuỗi kí tự) có xuất hiện trong chuỗi ban đầu hay không
 */

console.log(myString.includes('Fullstack'));
// true

console.log(myString.includes('fullstack'));
// false

console.log(myString.includes('F'));
// true

console.log(myString.includes('F',1));
// false

console.log('===> replace(oldValue,newValue) <===');
/**
 * 11. replace(oldValue, newValue)
    * Syntax => myString.replace(oldVale, newValue) 
    * Meaning => Thay thế chuỗi với hai tham số oldValue và newValue
 */

console.log(myString.replace('Fullstack','Frontend'));
// Frontend Developer

console.log(myString.replace('F','Nguyen Huu Nhan F'));
// Nguyen Huu Nhan Fullstack Developer

console.log('===> slice(start, end) <===');
/**
 * 12. slice(start, end)
    * Syntax => myString.slice(start, end)
    * Meaning => Hàm cắt chuỗi với 2 tham số start và end 
 */

console.log(myString.slice(4));
// stack Developer

console.log(myString.slice(4,10));
// stack 

console.log(myString.slice(-9))
// Developer


console.log('==> charAt(index) <===')
/**
 * 13. charAt(index)
    * Syntax => myString.charAt(index) 
    * Meaning => Hàm trả về ký tự theo vị trí nhập vào
 */

console.log(myString.charAt(0));
// F

console.log(myString.charAt(myString.length-1));
//r

console.log(myString.charAt(15));
// o

console.log('===> charCodeAt(index) <===')
/**
 * 14. charCodeAt(index)
    * Syntax => myString.charCodeAt(index)
    * Meaning => Hàm trả về ký tự NHỊ PHÂN theo vị trí nhập vào 
 */

console.log(myString.charCodeAt(0));
// 70

console.log(myString.charCodeAt(1));
// 117

console.log(myString.charCodeAt(999));
// NaN

console.log('===> repeat(n) <===')
/**
 * 15. repeat(n)
    * Syntax => myString.repeat(n)
    * Meaning => Hàm lặp lại chuỗi n lần 
 */

console.log(myString.repeat(2));
//Fullstack DeveloperFullstack Developer

console.log(myString.repeat(3));
// Fullstack DeveloperFullstack DeveloperFullstack Developer

//console.log(myString.repeat(-1));
// Error => Invalid count value

console.log('===> str1.concat(str2,str3,..,strN) <===');
/**
 * 16. concat()
    * Syntax =>  str1.concat(str2,str3,..,strN)
    * Meaning => Nối 2 hay nhiều chuỗi lại với nhau
 */

var firstName = 'Nguyen Huu';
var lastName = 'Nhan';
var homeTown = 'From An Giang Province';

console.log(firstName.concat(' ',lastName,' ',homeTown));
//Nguyen Huu Nhan From An Giang Province

console.log('===> String(dataType) <===');
/**
 * 17. String()
    * Syntax => myString.String(datatypes)
    * Meaning => Chuyển các kiểu dữ liệu khác về String  
 */

var dataTypes = [
    'STRING',
    1912,
    10.10,
    true,
    null,
    undefined,
    {
        fullName: 'Nguyen Huu Nhan',
        age: 21,
        job: myString
    },
    [1,2,3,5,6,7,8,9,10]
];

for(let key in dataTypes){
    console.log(String(dataTypes[key]));
    console.log(typeof String(dataTypes[key]))
}
