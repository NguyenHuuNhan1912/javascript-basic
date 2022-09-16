const inputText = document.getElementById('read');
const formNode = document.querySelector('.form');

formNode.addEventListener('submit', () => {
    alert('You send form success !');
});
inputText.addEventListener('focus', () => {
    console.log('You have focuse !');
});

inputText.addEventListener('blur',() => {
    console.log('You have blur');
});

inputText.addEventListener('change', () => {
    console.log('You have change');
});