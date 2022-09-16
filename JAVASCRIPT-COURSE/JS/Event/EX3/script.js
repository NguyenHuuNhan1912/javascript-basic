const tabHead = document.querySelectorAll('.btn');
const tabBody = document.querySelectorAll('p');
let arrTabBody = Array.from(tabBody);

// add class hide all p
tabBody.forEach((self,index) => {
    if(index!==0){
        self.classList.add('hide');
    }
});

tabHead.forEach((selfHead, indexHead) => {
    selfHead.addEventListener('click', () => {
        tabBody[indexHead].classList.toggle('hide');
        let result = arrTabBody.filter((selfBody, indexBody) => {
            if(indexBody !== indexHead){
                return selfBody;
            }
        });  
        result.forEach((self) => {
            self.classList.add('hide');
        });
    });
});