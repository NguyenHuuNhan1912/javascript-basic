// 1. Viết 1 hàm kiểm tra xem đối số có phải là 1 object hay không
// Trong javascript: array,null,object => data types là object

var isObject = (value) => {
    if(typeof value==="object" && Array.isArray(value) === false && value!==null){
        return true;
    }
    else{
        return false;
    }
}


// 2. Viết 1 hàm lấy key và value của object lưu vào 1 mảng nested

var arrNestedObject = (myObject) => {
    let arrResult = Object.entries(myObject);
    return arrResult;
}

console.log(arrNestedObject({
    fullName: 'Nguyen Huu Nhan',
    age: 21,
    homeTown: 'An Giang'
}));