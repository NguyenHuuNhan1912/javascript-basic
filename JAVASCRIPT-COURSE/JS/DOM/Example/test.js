/**
 * 1. ''
 * 2. null
 * 3. undefined
 * 4. false
 * 5. NaN
 * 6. 0
 */

// && => Tìm giá trị false đầu tiên, không tìm thấy trả về giá trị cuối cùng
// || => Tìm giá trị true đầu tiên, không tìm thấy trả về giá trị cuối cùng
var result = '' || 0 || 123;

console.log(result);