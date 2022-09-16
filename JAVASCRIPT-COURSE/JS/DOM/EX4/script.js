const arrBtn = document.querySelectorAll('button');
const arrImgs = document.querySelectorAll('img');
const razBtnNode = document.querySelector('.btn--raz');
const razImgNode = document.querySelector('.img-raz');


arrImgs.forEach((self)=>{
    self.classList.add('show');
});

var show = (btnNode,imgNode) => {
    btnNode.onclick = () => {
        imgNode.classList.toggle('show');
    }
}

for(let i=0;i<3;i++){
    show(arrBtn[i],arrImgs[i]);
}


