const btnNode = document.querySelector('.btn');
const spanNode = document.querySelector('span');
const bodyNode = document.querySelector('body');
const arrColor = ['red', 'yellow', 'green', 'blue','lightblue','blueviolet','grey'];

btnNode.addEventListener('click', (e) => {
    const colorRandom = arrColor[Math.ceil(Math.random()*arrColor.length-1)];
    console.log(colorRandom);
    bodyNode.setAttribute('style',`background-color: ${colorRandom}`);
});