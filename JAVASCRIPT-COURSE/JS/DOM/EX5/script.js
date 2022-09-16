const clickTymNode = document.querySelector('.click-tym');
const showTymNode = document.querySelector('.show-tym');
const appNode = document.querySelector('.app');
const warningNode = document.querySelector('h2');


let count = localStorage.getItem('tym') || 0;


showTymNode.textContent = count;

clickTymNode.onclick = () => {
    if (count < 100) {
        clickTymNode.classList.toggle('border-red');
        appNode.classList.toggle('border-red');
        count++;
        showTymNode.textContent = count;
        localStorage.setItem('tym', JSON.stringify(count));
    }
    else {
        warningNode.style.display = 'block';
    }
}

console.log('Nguyen Huu Nhan')