const todoClickNode = document.querySelector('.todo-click');
const parentNode = document.querySelector('.nav-list');
const inputNode = document.getElementById('todo-input');
const todoBodyNode = document.querySelector('.todo-body');

// CreateNode and addClass function
var createNode = (tagName, ...arrClass) => {
    let tagNameNode = document.createElement(`${tagName}`);
    for (let key in arrClass) {
        tagNameNode.classList.add(`${arrClass[key]}`);
    }
    return tagNameNode;
}


inputNode.onkeyup = (e) => {

    // Lấy dữ liệu người dùng nhập vào
    let dataInput = inputNode.value;

    // Tạo thẻ li có class là nav-item 
    const liNode = createNode('li', 'nav-item');

    // Tạo thẻ span có class là nav-item-value
    const spanNode = createNode('span', 'nav-item-value');

    // Tạo thẻ i có các class là: fa-solid fa-circle-xmark icon-time
    const iTimeXNode = createNode('li', 'fa-solid', 'fa-circle-xmark', 'icon-time');

    if (e.keyCode === 13) {

        // Dữ liệu khác rỗng
        if (dataInput) {
            todoBodyNode.classList.add('show');
            spanNode.textContent = dataInput;
            parentNode.appendChild(liNode);
            liNode.appendChild(spanNode);
            liNode.appendChild(iTimeXNode);
            inputNode.value = '';
            inputNode.focus();
            iTimeXNode.onclick = (e) => {
                e.target.parentNode.remove();
                let liNode = document.querySelector('li');
                if (liNode === null) {
                    todoBodyNode.classList.remove('show');
                }
            }
        }
        else {
            alert('Không được nhập giá trị rỗng !');
        }
    }
    else if (e.keyCode === 46) {
        let lastChildNode = parentNode.lastElementChild;
        lastChildNode.remove();
        let liNode = document.querySelector('li');
        if (liNode === null) {
            todoBodyNode.classList.remove('show');
        }
    }
}

todoClickNode.onclick = () => {

    // Tạo thẻ li có class là nav-item 
    const liNode = createNode('li', 'nav-item');

    // Tạo thẻ span có class là nav-item-value
    const spanNode = createNode('span', 'nav-item-value');

    // Tạo thẻ i có các class là: fa-solid fa-circle-xmark icon-time
    const iTimeXNode = createNode('li', 'fa-solid', 'fa-circle-xmark', 'icon-time');

    // Lấy dữ liệu người dùng nhập vào
    let dataInput = inputNode.value;
    
    // Dữ liệu khác rỗng
    if (dataInput) {
        todoBodyNode.classList.add('show');
        spanNode.textContent = dataInput;
        parentNode.appendChild(liNode);
        liNode.appendChild(spanNode);
        liNode.appendChild(iTimeXNode);
        inputNode.value = '';
        inputNode.focus();
        iTimeXNode.onclick = (e) => {
            e.target.parentNode.remove();
            let liNode = document.querySelector('li');
            if (liNode === null) {
                todoBodyNode.classList.remove('show');
            }
        }
    }
    else {
        alert('Không được nhập giá trị rỗng !');
        
    }
}

