// Made by Nguyen Huu Nhan - Spread Operator in Javascript

/**
 *               =====> Đơn giản cú pháp trong Javascript và 1 số vấn đề liên quan về vùng nhớ <=====
 * -----------------------------------------------------------------------------------------------------------------
    * 1. Sao chép mảng(Clone Array) 
    * 2. Gộp mảng(Merge Array)
    * 3. Sao chép đối tượng(Clone Object)
    * 4. Gộp đối tượng(Merge Object)
    * 5. Tìm số lớn nhất số bé nhất
 * -----------------------------------------------------------------------------------------------------------------
 */

/**
 *                                ===> NOTE <===
 * --------------------------------------------------------------------------------------------------------------
 * 1. Có nhiều cách để sao chép(Clone), đơn giản nhất là dùng dấu = NHƯNG sẽ cực kì nguy hiểm đối
      với những kiểu dữ liệu phức tạp như Array và Object
   2. Có thể hiểu đơn giản là khi dùng dấu = đối với Array và Object thì Javascript sẽ hiểu là
      biến vừa gán và biến ban đầu có chung vùng nhớ nên khi có sự thay đổi nào trên biến clone thì 
      biến chính sẽ bị thay đổi theo
   3. Vì thế nên chúng ta sẽ sử dùng các phương thức hoặc Spread Operator thay cho dấu bằng
   4. Spread Operator có thể hiểu đơn giản là phân tách ra từng tham số riêng lẽ  có trong mảng hoặc trong object
   5. Còn đối với các Array và Object Nested (Các mảng hoặc đối tượng lồng nhau phức tạp thì nên sử dụng 
      JSON để sao chép) bởi vì khi nested array và object thì khi chỉnh sửa biến clone thì biến ban đầu 
      cũng sẽ bị thay đổi theo(biến ở đây là biến mảng hoặc biến object)
*/

/**
 *           ===> Các cách sao chép một Simple Array <===
 * -----------------------------------------------------------------
 *   1. Sử dụng phương thức concat có 2 tham số, tham số đầu tiên là
 *      Array cần sao chép, tham số thứ 2 là Array rỗng
 *   2. Sử dụng Spread Operator(syntax = [...array])
 * ----------------------------------------------------------------
 */
var simpleArr = ['HTML','CSS','Javascript','Java','Python','C++'];

// Use method concat
console.log('===> Use method concat() <===');
var cloneConcat = simpleArr.concat([]);
console.log(cloneConcat);

//Use Spread Operator 
console.log('===> Use Spread Operator <===');
var cloneSpread = [...simpleArr]; // Cú pháp đơn giản 
console.log(cloneSpread);

/**
 *  ===> Các cách sao chép một - Simple Object <===
 * -----------------------------------------------------------------------------
    1. Sử dụng method assign() của Object cho phép nối nhiều Object lại với nhau
       cũng sử dụng 2 tham số như tương tự như concat() của Array
    2. Sử dụng Spread Operator(syntax = {...objectName})
 * -----------------------------------------------------------------------------
 */

// Simple Object
var objectSimpleAnimal = {
    name: 'cat',
    color: 'yellow',
    weight: '5kg',
    chirp: 'MEO MEO MEO',
    age: '5 year',
    national: 'Viet Nam'
}

// Use method assign()
console.log('===> Use method assign() <===');
var cloneObject = Object.assign(objectSimpleAnimal,{});
console.log(cloneObject);

//Use Spread Operator
console.log('===> Use method Spread Operator');
var cloneObjectSpread = {...objectSimpleAnimal};
console.log(cloneObjectSpread);


/**
 *                ===> Sử dụng JSON để sao chép Array và Object Nested <===
 -------------------------------------------------------------------------------------------------
     1. Method JSON.stringify => Chuyển các kiểu dữ liệu sang string 
     2. Method JSON.parse => Chuyển từ string về các kiểu dữ liệu tương ứng
     3. Khi sử dụng JSON thì khi thay đổi trên mảng clone thì sẽ không ảnh hưởng đến mảng ban đầu
     4. Sử dụng tương tự đối với Object
 -------------------------------------------------------------------------------------------------
 */

// Array Nested
var nestedArr = ['Frontend Developer',['HTML','CSS','JS'],['Python',['Java','C++']]];
console.log('===> Clone Nested Array <===');

// Clone Nested Array
var cloneArrNested = JSON.parse(JSON.stringify(nestedArr));
console.log(cloneArrNested);

// Object Nested
var nestedStudent = {
    fullName: 'Nguyen Huu Nhan',
    age: 21,
    dream: 'Fullstack Developer',
    email: 'nhanb1910114@student.ctu.edu.vn',
    moreInfor: {
        github: 'NguyenHuuNhan1912',
        facebook: 'Nguyễn Hữu Nhân(Coder)',
        zalo: {
            zalo1: 0926099715,
            zalo2: 0342040063
        }
    }
}
// Clone Nested Object
console.log('===> Clone Nested Object <===');
var cloneNestedStudent = JSON.parse(JSON.stringify(nestedStudent));
console.log(cloneNestedStudent);


/**
 *                  ===> Gộp Array và Object <===
 * -------------------------------------------------------------------------------------------
    1. Vì bản chất của Spread Operator là phân tách Array và Object ra từng tham số riêng biệt
    2. Syntax Merge Array = {...Array1, ...Array2, ...Array3, ..., ArrayN}
    3. Syntax Merge Object = {...Object1, ...Object2, ...Object3, ..., ObjectN}
 * -------------------------------------------------------------------------------------------
 */

// Merge Array use Spread Operator 
console.log('===> Merge Array use Spread Operator <===');
var array1 = ['Nguyen Huu Nhan',21,'Frontend Developer'];
var array2 = ['Can Tho University','B1910114',2001];
var array3 = ['nhanb1910114@student.ctu.edu.vn',19122001];
var arrMerge = [...array1, ...array2, ...array3];
console.log(arrMerge);

// Merge Object use Spread Operator 
var student1 = {
    fullName: 'Nguyen Huu Nhan'
}
var student2 = {
    age: 21
}
var student3 = {
    homeTown: 'An Giang'
}
console.log('Merge Object use Spread Operator ');
var mergeObject = {...student1, ...student2, ...student3}
console.log(mergeObject);

/**
 *           ===> Tìm số lớn nhất bé nhất trong mảng <===
 * --------------------------------------------------------------------
    1. Tìm max => Syntax => Math.max(...Array)
    2. Tìm min => Syntax => Math.min(...Array)
 * --------------------------------------------------------------------
 */

// Max and Min => Spread Operator
console.log('Max and Min => Spread Operator');
var arrayNumber = [1,-1,-10,20,30,1912];

// MAX
console.log(`Max arrayNumber = ${Math.max(...arrayNumber)}`);

// MIN
console.log(`Min arrayNumber = ${Math.min(...arrayNumber)}`);









