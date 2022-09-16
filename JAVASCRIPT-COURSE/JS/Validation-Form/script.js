/**
 * 1. blur
 * 2. change
 * 3. focus
 * 4. submit
 */
const arrInput = [...document.querySelectorAll(`[id^='input-']`)];
const formLog = document.querySelector('.form');
const regexEmail = /[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/igm;
const regexPass = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/g;
const regexNumber = /((09|03|07|08|05)+([0-9]{8})\b)/g;



// Validation Email
var validationEmail = (myEmail) => {
    return regexEmail.test(myEmail);
}

// Validation Number Phone
var validationNumber = (myNumber) => {
    return regexNumber.test(myNumber);
}

// Validation Password
var validationPass = (myPass) => {
    return regexPass.test(myPass);
}

// Message Success
var success = (node) => {
    node.classList.remove('error');
    node.classList.add('success');
    node.nextElementSibling.textContent = 'Success';
    node.nextElementSibling.style.color = 'green';
}

// Message Error
var error = (node) => {
    node.classList.add('error');
    node.classList.remove('success');
    node.nextElementSibling.textContent = 'Error';
    node.nextElementSibling.style.color = 'red';
}

// Message Normal
var normal = (node) => {
    node.classList.remove('error');
    node.classList.remove('success');
    node.nextElementSibling.textContent = '';
}

// Function check Form
var formValidation = () => {
    arrInput.forEach((inputNode) => {
        inputNode.addEventListener('blur', (e) => {
            let inputValue = e.target.value;
            let getId = e.target.id;
            if(getId === 'input-phone'){
                if((inputValue === '') || (validationNumber(inputValue)===false) ){
                    error(e.target);
                }
                else if(validationNumber(inputValue)===true){
                    success(e.target);
                }
                else{
                    success(e.target);
                }
            }
            else if(getId === 'input-email'){
                if((inputValue === '') || (validationEmail(inputValue)===false) ){
                    error(e.target);
                }
                else if(validationEmail(inputValue)===true){
                    success(e.target);
                }
                else{
                    success(e.target);
                }
            }
            else if(getId === 'input-pass'){
                if((inputValue === '') || (validationPass(inputValue)===false) ){
                    error(e.target);
                }
                else if(validationPass(inputValue)===true){
                    success(e.target);
                }
                else{
                    success(e.target);
                }
            }
        });
        inputNode.addEventListener('focus', (e) => {
            normal(e.target);
        });
    });
}
//form submit
var formSubmit = () => {
    formLog.addEventListener('submit', (e) => {
        e.preventDefault();
        let check1 = arrInput.filter((self) => {
            return self.value === '';
        });
        let check2 = arrInput.every((self) => {
            return self.value !== '';
        });
        if(!check2){
            check1.forEach((self) => {
                error(self);
            });
        }
        else{
            alert('Thanh cong')
            arrInput.forEach((self) => {
                normal(self);
                self.value = '';
            });
        }
    });
}

formValidation();
formSubmit();