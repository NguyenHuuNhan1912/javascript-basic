// var number = prompt('Nhập 2 số cách nhau khoảng trắng');

// var arr_number = number.split(" ");
// var len_arr = arr_number.length;
// var a = Number(arr_number[0]);
// var b = Number(arr_number[1]);

// if(!isNaN(a) && !isNaN(b) && len_arr<3){
//     var ask = Number(prompt('Nhập lựa chọn của bạn\n1. Phép cộng\n2. Phép trừ\n3. Phép nhân\n4. Phép chia'));
//     switch(ask){
//         case 1:
//             alert(`Tổng hai số là: ${a+b}`)
//             break;
//         case 2:
//             alert(`Hiệu hai số là: ${a-b}`);
//             break;
//         case 3:
//             alert(`Tích hai số là: ${a*b}`);
//             break;
//         case 4:
//             alert(`Thương hai số là: ${(a/b).toFixed(3)}`);
//             break;
//         default:
//             alert('Hãy Nhập các lựa chọn từ 1-4 !');
//             break;
//     }
// }
// else{
//     alert('Hãy nhập đúng 2 số để thực hiện các phép tính !');
// }

var ageYou = 18;
if(ageYou==18){
    console.log('YOU-1');
}
else if(ageYou==17){
    console.log('YOU-2');
}
else{
    console.log('YOU-3');
}
 
var mess = (ageYou==18) ? "You-1" : (ageYou==17) ? "You-2" : "You-3";
console.log(mess);
