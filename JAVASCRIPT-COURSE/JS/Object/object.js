// Object in Javascript

/**
 *                             =====> Các phương thức của Object trong Javascript <=====
 * --------------------------------------------------------------------------------------------------------------------------------------------------
    *  1. Object.keys(objectName) => Lưu tất cả các key của Object vào 1 mảng
    *  2. Object.values(objectName) => Lưu tất cả các value của Object vào 1 mảng
    *  3. Object.entries(objectName) => Lưu tất cả các cặp key-value vào 1 mảng nested => [['key1','value1'],'[key2','value2'],...,['key-n','value-n']]
    *  4. Object.assign(objectName1,objectName2,..,objectName-N) => Gộp các Object lại với nhau thành 1 Object duy nhất
    *  5. Object.freeze(objectName) => Ngăn chặn hành vi chỉnh sửa key-value của object
    *  6. Object.seal(objectName) => Ngược lại với freeze => Không cho thêm và xóa, nhưng cho sửa các key-value
 * --------------------------------------------------------------------------------------------------------------------------------------------------
 */

var student = {
    fullName: 'Nguyen Huu Nhan',
    age: 21,
    studentCode: 'B1910114',
    gmail: 'nhanb19101114',
    myClass: 'DI19V7A6',
    major: 'Information technology',
    AVG: (markT, markL, markH) => {
        let total = markT + markL + markH;
        return (total/3).toFixed(3);
    }
};

var animal = {
    name: 'meo',
    kingdom: 'Viet Nam',
    domain: 'Campuchia',
    color: 'red',
    width: 100,
    height: 200,
    size: '500kg'
}

// 1. Object.keys(objectName)
console.log('===> Object.keys(objectName) <===');
var keysAnimal = Object.keys(animal);
console.log(keysAnimal);

// 2. Object.values(objectName)
console.log('===> Object.values(objectName) <===');
var valuesAminal = Object.values(animal);
console.log(valuesAminal);

// 3. Object.entries(objectName)
console.log('===> Object.entries(objectName) <===');
var entriesAnimal = Object.entries(animal);
console.log(entriesAnimal);

// 4. Object.assign(objectName)
console.log('===> Object.assign(objectName) <===');
var mergeObject = Object.assign(student,animal);
console.log(mergeObject);

// 5. Object.freeze(objectName)
console.log('===> Object.freeze(objectName) <===');
var freeAnimal = Object.freeze(animal);
freeAnimal.color = 'blue';
console.log(freeAnimal); // color: red;
console.log(animal); //color: red;


// 6. Object.seal(objectName)
console.log('===> Object.seal(objectName) <===');
var user = {
    userName: 'Coder1912',
    passWord: '123456789'
}

var newUser = Object.seal(user);

//Edit => TRUE
newUser.passWord = "************";
console.log(newUser);

// Add and Remove => FALSE
newUser.age = 21;
delete newUser.userName;
console.log(newUser);




