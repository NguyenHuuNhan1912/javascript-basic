// array.map(function(currentValue, index, arr), thisValue)
// BT1 - Map
// var courses = [
//     {id: 1, name: 'Javascript', money: '20$'},
//     {id: 2, name: 'Bootstrap', money: '10$'},
//     {id: 3, name: 'Jquery', money: '90$'},
//     {id: 4, name: 'Java', money: '80$'},
//     {id: 5, name: 'Python', money: '900$'}
// ]

// var resultUpdate = courses.map((self,index)=>{
//     var convertVI = Number(self.money.slice(0,self.money.length-1)) * 23;
//     var cashVND = String(convertVI).concat('VNĐ');
//     return {
//         id: self.id,
//         name: `Khóa học ${self.name}`,
//         money: `Giá tiền: ${cashVND}`,
//         note: 'Còn hàng',
//         total: `Khóa học số ${index+1}`
//     }
// })

// console.log(resultUpdate);

// Base

// var arrNumber = [];
// var lengtArrNumber = 10;

// // Random number
// var randomNumber = () => {
//     for(let i=0;i<lengtArrNumber;i++){
//         arrNumber[i] = Math.floor(Math.random()*10);
//     }
// }

// // Call function random number
// randomNumber();

// // BT2 Tính trung bình cộng các số lẻ ở vị trí chẵn
// // Return result
// var result = () => {
//     let index = 0,total=0;
//     for(let key in arrNumber){
//         if((arrNumber[key]%2!=0) && (key%2==0)){
//             total += arrNumber[key];
//             index += 1;
//         }
//     }
//     return total/index;
// }

// // Show arrNumber and show result
// console.log(arrNumber);
// console.log(`Result = ${result().toFixed(3)}`);


// BT3 - Tìm số lớn nhất trong mảng vừa nhập
// var maxArrNumber = () => {
//     let max = 0;
//     for(let key in arrNumber){
//         if(arrNumber[key] > max){
//             max = arrNumber[key];
//         }
//     }
//     return max;
// }
// console.log(arrNumber);
// console.log(`Max array: ${maxArrNumber()}`);


// const myString = 'Nguyen Huu Nhan';


// var reverseMyString = () => {
//     let arrMyString = myString.split('');
//     arrMyString.reverse();
//     return arrMyString.join('');
// }
// console.log(reverseMyString());


var courses = [
    { id: 1, name: 'Javascript', money: '20$' },
    { id: 2, name: 'Bootstrap', money: '10$' },
    { id: 3, name: 'Jquery', money: '90$' },
    { id: 4, name: 'Java', money: '80$' },
    { id: 5, name: 'Python', money: '900$' }
];

/** 
 * Trả về một mảng mới với các điều kiện sau đây
 * 1.  Đổi tiền đô sang tiền việt
 * 2. Thêm khóa học vào trước value name
 * 3. Thêm một cặp key-value là mã giảm giá với mã là số có 2 chữ số được random ngẫu nhiên từ 10 đến 100
 * 4. Chỉ trả về những khóa học nào có id lớn hơn 2
 */


// let arrFilter = courses.filter((self) => {
//     return (self.id > 2);
// });

// let arrMap = arrFilter.map((self) => {
//     let moneyUSD = self.money;
//     let moneyVND = Number(moneyUSD.slice(0, moneyUSD.length - 1));
//     let codeRandom = Math.floor(Math.random() * 10 + 10);
//     return {
//         id: self.id,
//         name: `Khóa học ${self.name}`,
//         money: `${moneyVND * 23} VNĐ`,
//         codeDiscount: codeRandom
//     };
// });
// console.log(arrMap);

//BT2 Tính trung bình cộng các số lẻ ở vị trí chẵn
// const arrNumber = [1,2,3,4,5,6,7,8,9,10];

// var result = () => {
//     var total = 0;
//     var arrFilter = arrNumber.filter((self,index) => {
//         return (index % 2 === 0) && ( self % 2 !== 0);
//     });
//     var total = arrFilter.reduce((init,self) => {
//         return init += self;
//     },0);
//     return total/arrFilter.length;
// }
// console.log(result());
// result();

// // Example reduce
// var listNumber = [1,2,[3,4],5,6,[7,8,9]];
// var flatResult = listNumber.reduce((initArr,self,index)=>{
//     console.log(index); 
//     return initArr.concat(self);
// },[]);
// console.log(flatResult); 

//Thay thế các phần tử âm có trong mảng bằng giá trị 0
var arrNumber = [1, 2, -3, -4, 5, -6, 7, -8, 9, -10, -1, -912];

var result = () => {
    var handLing = [];
    arrNumber.forEach((self, index) => {
        (self<0) ? handLing[index]=0 : handLing[index]=self;
    });
    arrNumber = handLing;
}
result();
console.log(arrNumber);