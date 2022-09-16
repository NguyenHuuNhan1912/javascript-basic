var todos = [];

const inputNode = document.querySelector('.input');
const buttonNode = document.querySelector('.btn');
var ulNode = document.querySelector('.list');

buttonNode.onclick = () => {
    if (inputNode.value) {
        let valueInput = inputNode.value;
        todos.push(valueInput);
        inputNode.focus();
        var html = todos.map((todo) => {
            return `<li>${todo}</li>`;
        })
        ulNode.innerHTML = html.join('');
    }
    else{
        alert('Hãy nhập 1 giá trị')
    }
}





