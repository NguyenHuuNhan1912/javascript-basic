/**
 * 
                                       =====> Array Methode Simple <=====
    -----------------------------------------------------------------------------------------------------------------------------
    * 1. length - Trả về độ dài của mảng
    * 2. reverse() - Được sử dụng để đảo ngược mảng và thay đổi mảng ban đầu
    * 3. includes(value,start) - Được sử dụng để tìm kiếm một phần tử nào đó có tồn tại trong mảng hay không
    * 4. indexOf(value,start) - Trả về vị trí ĐẦU TIÊN của phần tử muốn tìm trong mảng
    * 5. lastIndexOf(value,start) - Trả về vị trí CUỐI CÙNG của phần tử muốn tìm trong mảng
    * 6. unshift(value) - Them dau
    * 7. shift() - Xoa dau
    * 8. push() - Them cuoi
    * 9. pop() - Xoa cuoi
    * 10. slice(start,end)
    * 11. join('char')
    * 12. concat(value1,value2...)
    * 13. from(); ///
    --------------------------------------------------------------------------------------------------------------------------------
 *
                                       =====> Array Method Advance (callback) <=====
   --------------------------------------------------------------------------------------------------------------------------------                                       
    * 1. forEach() - Duyệt tuần tự mảng để làm công việc gì đó khác vòng lặp for thông thường là forEach sẽ không duyệt phần tử rỗng
    * 2. every() - Kiểm tra tất cả phần tử mảng thỏa 1 điều kiện nào đó thì trả về true và ngược lại
    * 3. some() - Kiểm tra 1 phần tử mảng thỏa 1 điều kiện nào đó thì trả về true và ngược lại 
    * 4. find() - Duyệt tuần tự mảng để tìm DUY NHẤT MỘT phần tử mảng thỏa điều điện nào đó mà chúng ta muốn tìm kiếm
    * 5. filter() - Duyệt tuần tự mảng để tìm TẤT CẢ phần tử mảng thỏa điều kiện nào đó mà chúng ta muốn tìm kiếm
    * 6. reduce() - Duyệt tuần tự mảng để trả về một giá trị duy nhất thỏa điều kiện nào đó
    * 7. map() - Duyệt tuần tự mảng để chỉnh sửa mảng và trả về một mảng mới với những điều kiện đã chỉnh sửa
   --------------------------------------------------------------------------------------------------------------------------------
 */


var courses = [
    {id: 1, name: 'Javascript', money: '10$', discount: '10%'},
    {id: 2, name: 'Python', money: '20$', discount: '20%'},
    {id: 3, name: 'HTML-CSS', money: '30$', discount: '30%'},
    {id: 4, name: 'Bootstrap', money: '40$', discount: '40%'},
    {id: 5, name: 'Jquery', money: '50$', discount: '50%'}
];

/** 
 * 1. Example forEach()
 * - In ra tất cả phần tử mảng và bình phương id ?
 */

courses.forEach((self) => {
    self.id = Math.pow(self.id,2);
    console.log(self);
});


/**
 * 2. Example every()
 * - Kiểm tra tất cả id có lớn hơn 2 hay không ? 
 */

var checkCoursesEve = courses.every((self) => {
    return self.id>2;
});

console.log(checkCoursesEve); // false

/**
 * 3. Example some()
 * - Kiểm tra xem có id nào trong mảng lớn hơn 3 hay không ?
 */

var checkCoursesSome = courses.some((self) => {
    return self.id>3;
});

console.log(checkCoursesSome); // true


/**
 * 4. Example find()
 * - Trả về MỘT phần tử mảng chứ id lớn hơn 2 đầu tiên
 */

//CODE
var examFind = courses.find((self) => {
   return self.id > 2; 
});

console.log(examFind); 
// result => {id: 3, name: 'HTML-CSS', money: '30$', discount: '30%'}

/**
 * 5. Example filter()
 * - Trả về TẤT CẢ phần tử mảng chứa id > 2
 */

var examFilter = courses.filter((self)=>{
    return self.id>2;
})

console.log(examFilter);


/**
 * 6. Example map()
 * - Trả về một mảng mới với các điều kiện sau
 *      1. Thêm cụm từ khóa học vào trước trường name của object trong mảng
 *      2. Đổi tiền ngoại tệ sang Việt Nam đồng
 *      3. Thêm key mã giá với mã số được random từ 0 đến 20
 */
var examMap = courses.map((self) => {
    let convertVI = self.money.slice(0,self.money.length-1);
    return {
        id: self.id,
        name: `Khóa học ${self.name}`,
        money: Number(convertVI)*23,
        discount: self.discount,
        codeDiscount: Math.floor(Math.random()*20)
    }
});
console.log(examMap);


var random = [1,100,5,9,104,-5];

console.log(random.sort((a,b)=>{
    return (a>b)?1:-1;
}));

// array.reduce(function(total, currentValue, currentIndex, arr), initialValue)

// Example reduce
var listNumber = [1,2,[3,4],5,6,[7,8,9]];
var flatResult = listNumber.reduce((initArr,self,index)=>{
    console.log(index); 
    return initArr.concat(self);
},[]);
console.log(flatResult);
    



