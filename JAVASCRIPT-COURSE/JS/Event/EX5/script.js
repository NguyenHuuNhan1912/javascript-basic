const btnLogin = document.querySelector('.btn--login');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const close = document.querySelector('.time-icon');
const sub = document.querySelector('.form-group:last-child');
sub.addEventListener('click', (e) => {
    e.preventDefault();
});
close.addEventListener('click', () => {
    modal.classList.toggle('hide');
    overlay.classList.toggle('hide');
});
btnLogin.addEventListener('click', () => {
    modal.classList.toggle('hide');
    overlay.classList.toggle('hide');
});

overlay.addEventListener('click', (e) => {
    modal.classList.toggle('hide');
    e.target.classList.toggle('hide');
});