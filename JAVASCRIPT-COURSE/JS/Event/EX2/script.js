const btnPrev = document.querySelector('.btn--left');
const btnNext = document.querySelector('.btn--right');
const numberNode = document.querySelector('.number');

var count = 0;

btnNext.addEventListener('click', () => {
    if(count<0){
        count = 0;
    }
    count += 1;
    numberNode.innerText = count;
});

btnPrev.addEventListener('click', () => {
    if(count>=1){
        count--;
        numberNode.innerText = count;
    }
});