// Made by Nguyen Huu Nhan - Date Object in Javascript

/**
 *         =====> Các phương thức phổ biến của đối tượng DATE trong JAVASCRIPT <=====
 * --------------------------------------------------------------------------------------------
 * I. Các phương thức GET
 *      1. getFullYear() => Lấy ra NĂM hiện tại
 *      2. getMonth() => Lấy ra THÁNG hiện tại
 *      3. getDate() => Lấy ra NGÀY hiện tại
 *      4. getDay() => Lấy ra THỨ hiện tại
 *      5. getHours() => Lấy ra GIỜ hiện tại
 *      6. getMinutes() => Lấy ra số PHÚT hiện tại
 *      7. getSeconds() => Lấy ra số GIÂY hiện tại
 *      8. getMilliseconds() => Lấy ra số MILLI giây hiện tại(1s = 1000ms, 1ms = 0.001s)
 *      9. getTime() => Lấy ra TIMESTAMP tính từ ngày 1 tháng 1 vào 0:00 năm 1970 đến hiện tại
 * 
 * II. Các phương thức SET
 *      1. setFullYear() => Gán NĂM hiện tại
 *      2. setMonth() => Gán THÁNG hiện tại
 *      3. setDate() => Gán NGÀY hiện tại
 *      4. setHours() => Gán GIỜ hiện tại
 *      5. setMinutes() => Gán số PHÚT hiện tại
 *      6. setSeconds() => Gán số GIÂY hiện tại
 *      7. setMilliseconds() => Gán số MILLLI giây hiện tại(1s = 1000ms, 1ms = 0.001s)
 *      8. setTime() => Gán TIMESTAMP tính từ ngày 1 tháng 1 vào 0:00 năm 1970 đến hiện tại
 * 
 * III. Những cách lấy ra DATE tổng hợp từ đối tượng DATE
 *      1. new Date() => In ra toàn bộ DATE
 *      2. new Date(Timestamp) => In ra DATE dựa vào TIMESTAMP
 *      3. new Date(String) => In ra DATE rút gọn dựa vào các method của dateString
 * 
 * IV. setTimeout và setInterval
 *      1. setTimeout(callback, time(milliseconds)) => Đợi 5s(ns) thì mới làm công việc gì đó
 *      2. setInterval(callback, time(milliseconds)) => Cứ 5s(ns) trôi qua thì lặp lại công việc gì đó
 * --------------------------------------------------------------------------------------------
 */

// My Variable
const now = new Date();

/**
 * I. Các phương thức GET
    * Syntax => now.method() 
    * Note: Đối với hàm lấy ra tháng và thứ thì phải cộng thêm 1 do mảng bắt đầu từ 0
 */
console.log('===> GETTER <===')
console.log(`Current Year = ${now.getFullYear()}`); //Current Year = 2022
console.log(`Current Month = ${now.getMonth()+1}`); //Current Month = 2
console.log(`Current Date = ${now.getDate()}`); // Current Date = 20
console.log(`Current Day = ${now.getDay()+1}`); // Current Day = 1 (1=Sunday,2=Moday,....)
console.log(`Current Hour = ${now.getHours()}`); // Current Hour = 11
console.log(`Current Minute = ${now.getMinutes()}`); // Current Minute = 55
console.log(`Current Second = ${now.getSeconds()}`); // Current Second = 50
console.log(`Current Millisecond = ${now.getMilliseconds()}`); //Current Millisecond = 619
console.log(`Current Timestamp = ${now.getTime()}`); //1645333046337


/**
 * II. Các phương thức SET
 * Syntax => now.method(value) 
 */
console.log('===> SETTER <===');
now.setFullYear(2023);
console.log(now.getFullYear()); // 2023
now.setMonth(3);
console.log(now.getMonth()); // 3
now.setDate(19); //19
console.log(now.getDate()); 
now.setHours(10);
console.log(now.getHours()); // 10
now.setMinutes(10);
console.log(now.getMinutes()); // 10
now.setSeconds(15);
console.log(now.getSeconds()); // 15
now.setMilliseconds(19121010); 
console.log(now.getMilliseconds()); // 19121010
now.setTime(101010101);
console.log(now.getTime()); // 101010101


/**
 * III. Những cách lấy ra DATE tổng hợp từ đối tượng DATE
 */

console.log('===> GET ALL DATE <===')
console.log('1. RUN new Date()');
console.log(new Date()); 
/**
 * RESULT CONSOLE.LOG = Sun Feb 20 2022 12:13:12 GMT+0700 (Giờ Đông Dương)
    * Timezone(Múi giờ) => GMT+0700 (Giờ Đông Dương)
    * Year => Năm 2022
    * Month => Feb(Tháng 2)
    * Date => Ngày 20
    * Day => Sun(Chủ nhật)
    * Hour => 12 giờ
    * Minute => 13 phút
    * Second => 12 giây
 */

console.log('2. RUN new Date(timeStamp)');
var now2 = new Date();
var timeStamp = now2.getTime();
console.log(new Date(timeStamp));
/**
 * RESULT CONSOLE.LOG = Sun Feb 20 2022 12:13:12 GMT+0700 (Giờ Đông Dương)
    * Meaning => Lấy toàn bộ thông số DATE dựa vào timeStamp
 */

console.log('3. RUN Date String')
var now3 = new Date();
console.log(now3.toDateString()); // Sun Feb 20 2022
console.log(now3.toLocaleDateString()); // 20/2/2022
console.log(now3.toTimeString()); // 12:24:49 GMT+0700 (Giờ Đông Dương)
console.log(now3.toLocaleTimeString()); // 12:24:34

/**
 * IV. setTimeout(callback, time(milliseconds)) và setInterVal(callback, time(milliseconds))
 */

console.log('===> setTimeout <===')

var showMess = setTimeout(()=>{
    console.log('Nguyen Huu Nhan');
},5000);
// Sau 5s thì mới console.log('Nguyen Huu Nhan') mới được thực thi

console.log('===> setInterval <===');

var showMess2 = setInterval(()=>{
    console.log('Fullstack Developer');
},1000)
// Cứ 1s trôi qua thì console.log('Fullstack Developer') sẽ được thực thi
// Thực thi theo setInterval sẽ rất tốn bộ nhớ nên sẽ có hàm để dừng sự thực thi đó lại => clearInterval(value)
clearInterval(showMess2);
