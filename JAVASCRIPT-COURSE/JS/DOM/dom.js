//Made by Nguyen Huu Nhan - DOM in Javascript
// DOM - Document Object Model - Mô hình tài liệu dưới dạng đối tượng
// Mỗi thẻ html là một node(Object)
// Các loại node: elementNode, textNode



/**
 *                                          =====> DOM trong Javascript <=====
 * ------------------------------------------------------------------------------------------------------------------
 * I. Vì mỗi node(các thẻ trong HTML là 1 đối tượng) nên sẽ có thuộc tính và phương thức
      1. document.querySelector('selector') => Truy xuất node ĐẦU TIÊN trong DOM thông qua các bộ chọn(selector)
      2. document.querySelectorAll('selector') => Truy xuất TẤT CẢ node trong DOM thông qua các bộ chọn(selector)
      2. document.getElementById('nameId') => Truy xuất node trong DOM thông qua Id
      4. document.getElementsByClassName('nameClassName') => Truy xuất TẤT CẢ node trong DOM thông qua tên class
      5. document.getElementsByTagName('nameTagName') => Truy xuất TẤT CẢ node trong DOM thông qua tên thẻ(tag) html

   II. Những cách tạo, thêm, sửa, xóa Node trong DOM
      1. Tạo node
            1.1. document.createElement('tag_name') => Tạo ra một node mới
            1.2. nameNode.cloneNode(bool) => Sao chép một node từ node có sẵng trong DOM
                  + bool = true -> Lấy cả node 
                  + bool = false -> Chỉ lấy node cha không lấy node con cháu
      2. Thêm node
            2.1. parentNode.appendChild(childNode) => Thêm phần tử childNode(con) vào cuối phần tử parentNode(cha)
            2.2. parentNode.insertBefore(newNode, node2) => Chèn phần tử newNode nằm phía trước node2

      3. Sửa node
            3.1 parentNode.replaceChild(newNode, oldNode) => Thay thế phần tử oldNode bằng phần tử newNode
      4. Xóa node
            4.1  node.remove() => Xóa node hiện tại
            4.2  parentNode.removeChild(childNode) => Chọn phần tử cha rồi xóa đi phần tử con 
            
    III. Những phương thức phổ biến khác của DOM
            1. parentNode.children => Trả về danh sách các element node con
            2. parentNode.firstElementChild => Trả về element node con đâu tiên
            3. parentNode.lastElementChild => Trả về element node con cuối cùng
            4. childNode.parentNode => Trả về node cha của một node

     IV. Sự khác nhau của innerText, innerHTML, textContent
            1. elementNode.innerText => Trả về nội dung của node(Không khoảng trắng, không css ẩn) 
            2. elementNode.textContent => Trả về nội dung của node(Gồm khoảng trắng, có css ẩn)
            3. elementNode.innerHTML => Trả về nội dung của node(Gồm mã HTMl và khoảng trắng)

     V. Thêm, sửa, xóa các thuộc tính của node 
            1. getAttribute('property')
            2. setAttribute('property','value')
            3. removeAttribute('property')
            4. hasAttribute('property')
            
    VI. classList trong Javascript
            1. elementNode.classList.add('nameClass') => Thêm 1 class vào node
            2. elementNode.classList.remove('nameClass') => Xóa 1 class ra khỏi node
            3. elementNode.classList.toggle('nameClass') => Nếu chưa có thì thêm, có thì bỏ class đó đi
            4. elementNode.classList.contains('nameClass') => Kiểm tra nameClass có trong elementNode chưa (true/false)
 * ------------------------------------------------------------------------------------------------------------------
 */


// Example 1
console.log('===> Example document.querySelector("selector") <===');
const courseNode = document.querySelector('.course');
console.log(courseNode); // <h2 class="course">HTML</h2> => Lấy node đầu tiên được tìm thấy

// Example 2
console.log('===> Example document.querySelectorAll("selector") <===');
const coursesNode = document.querySelectorAll('.course');
console.log(coursesNode); // NodeList(3) [h2.course, h2.course, h2.course] => Trả về Node List

// Example 3
console.log('===> Example document.getElementById("nameId") <===');
const submitNode = document.getElementById('submit');

console.log(submitNode); // <button id="submit">Submit</button>

// Example 4
const h2Node = document.getElementsByClassName('course');
console.log('===> Example document.getElementsByClassName("nameClass") <===');
console.log(h2Node); // HTMLCollection(3) [h2.course, h2.course, h2.course] => Trả về HTML collection 
// Khác với id là duy nhất, các tên class có thể đặt giống nhau nên sẽ lưu tất cả vào một HTML collection


// Example 5
const h2TagNode = document.getElementsByTagName('h2');
console.log('===> Example document.getElementsByTagName("nameTag") <===');
console.log(h2TagNode); // HTMLCollection(3) [h2.course, h2.course, h2.course]
// Truy xuất qua tagName tương tự như class name có thể đặt tên tag giống nhau => Trả về HTML collection

// Tạo node

// Use document.createElement(tag_name) - Tạo ra thẻ h2 có textContent là This is h2 tag
console.log('===> use document.createElement(tag_name) <===');
const newNode = document.createElement('h2');
newNode.innerText = 'This is h2 tag';
console.log(newNode);

/**
        ===> nameNode.cloneNode(bool) <===
    --------------------------------------------
    * bool = true =>  Sao chép các node con cháu
    * bool = false => Sao chép node hiện tại
    --------------------------------------------
 */
console.log('===> use nameNode.cloneNode(bool) <===');

console.log('Content node navList');
const navList = document.querySelector('.nav-list');
console.log(navList);

console.log('Content node cloneNavList');
const cloneNavList = navList.cloneNode(true);
console.log(cloneNavList);

console.log('Content node cloneNavListFasle');
const cloneNavListFalse = navList.cloneNode(false);
console.log(cloneNavListFalse);

// Thêm node

// navList Node - Node cha của các node con(li)
const parentNode = document.querySelector('.nav-list');

// Use element.appendChild(newNode) - Thêm phần tử li có textContent là ITEM-6 vào cuối Node cha
console.log('===> Use element.appendChild(newNode) <===');
const childNode = document.createElement('li');
childNode.textContent = 'ITEM-6'
parentNode.append(childNode); // Thêm vào cuối phần tử cha

// Use element.inserBefore() - Thêm phần tử li có texContent là ITEM-7 phía trước li có textContent là item-2
console.log('===> Use element.insertBefore(newNode) <===');

// Node cần thêm có textContent là ITEM-7
const childNode2 = childNode.cloneNode(true);
childNode2.textContent = 'ITEM-7';

//Node có textContent là item-2
const li2Node = document.querySelector('li:nth-child(2)');

// Tiến hành thêm childNode2 có textContent là ITEM-7 vào trước li2Node có textContent là item-2
parentNode.insertBefore(childNode2, li2Node);


// Sửa(Những thay đổi) Node - Thay đổi button mới cho button cũ đã tồn tại trong header
console.log('===> use parent.replaceChild(newNode, oldNode) <==');

// parentNode header - Node cha
const headerNode = document.querySelector('.header');

// Tạo button mới
const newButtonNode = document.createElement('button');
newButtonNode.className = 'button button-header';
newButtonNode.textContent = 'Click here';

// Lấy button cũ cần thay thế
const oldButtonNode = document.getElementById('submit');


// Tiến hành thay thế
headerNode.replaceChild(newButtonNode, oldButtonNode);


// Xóa node - Xóa đi node con trong header có textContent là CSS

//Lấy ra node cần xóa
var deleteNode = document.querySelector('.course-css');
console.log(deleteNode);


// Tiến hành xóa
headerNode.removeChild(deleteNode);

// Các phương thức phổ biến khác của DOM
console.log('===> Các phương thức khác của DOM <===');

// Use parentNode.children
console.log('===> parentNode.children <===');

// Parent Node Animal - Node cha
var parentAnimalNode = document.querySelector('.nav-list-animal');

// HTML Collection chứa các node con của node cha
var arrChildAnimalNode = parentAnimalNode.children;
console.log(arrChildAnimalNode);

// Use parentNode.firstElementChild
console.log('===> parentNode.firstElementNodeChild <===');
var firstChildAnimalNode = parentAnimalNode.firstElementChild;
console.log(firstChildAnimalNode);

// Use parentNode.lastElementChild
console.log('===> parentNode.lastElementChild');
var lastChildAnimalNode = parentAnimalNode.lastElementChild;
console.log(lastChildAnimalNode);

// Use childNode.parentNode
console.log('===> childNode.parentNode <===');

// Lấy ra node con li 
var itemAmimal = document.querySelector('.item-animal:nth-child(1)');
console.log(itemAmimal);

// Tìm node cha của node con li
var keyParent = itemAmimal.parentNode;
console.log(keyParent);

// IV. Sự khác nhau của innerText, innerHTML, textContent

console.log('==> innerText <===');
const myInforNode = document.querySelector('.myInfor');
console.log(myInforNode.innerText); // Không khoảng trắng, không css ẩn

console.log('===> textContent <===');
console.log(myInforNode.textContent); // Có khoảng trắng, có css ẩn

console.log('===> innerHTML <===');
console.log(myInforNode.innerHTML); // Khoảng trắng và mã HTML

//Example
var h5ParentNode = document.querySelector('.myInfor');
var h6ChildNode = document.createElement('h6');
h6ChildNode.innerHTML = '<h2 class="myJob" style="color: red; font-size: 50px;">Backend Developer</h2>';
h5ParentNode.append(h6ChildNode);


// V. Thêm, sửa, xóa các thuộc tính của node 

const getMyinforNode = document.querySelector('.myInfor');

// Use getAttribute(property) 
console.log('===> getAttribute(property) <===');
console.log(getMyinforNode.getAttribute('class'));

// Use setAttribute('property','value');
console.log('===> setAttribute("property","value) <===');
getMyinforNode.setAttribute('style', 'color: red; font-size: 30px');

// Use removeAttribute(property)
console.log('===> removeAttribute(property) <===');
getMyinforNode.removeAttribute('style');

// Use hasAttribute(property)
console.log('===> hasAttribute(property) <===');
console.log(myInforNode.hasAttribute('class')); // true

// classList trong Javascript
console.log('===> elementNode.classList.add("property") <===');
const contactNode = document.querySelector('.contact');
contactNode.classList.add('follow-me');
console.log(contactNode);


console.log('===> elementNode.classList.remove("property") <===');
const childContactNode = document.querySelector('.contact > h1:nth-child(2)');
childContactNode.classList.remove('mxh');
console.log(childContactNode);

console.log('===> elementNode.classList.toggle("property") <===');
const childContactNode2 = document.querySelector('.contact > h1:nth-child(3)');
childContactNode2.classList.toggle('mxh2');
console.log(childContactNode2);




