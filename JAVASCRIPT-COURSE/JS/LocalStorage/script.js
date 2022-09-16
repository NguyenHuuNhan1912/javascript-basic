/**
 * Local Storage
 * 1. localStorage.setItem('key','value');
 * 2. localStorage.getItem('key');
 * 3. localStorage.remove('key');
 * 4. localStorage.clear();
 */
const headDrink = document.querySelector('.dropdown');
const bodyDrink = document.querySelector('.dropdown-body');
bodyDrink.classList.add('hide');

headDrink.addEventListener('mouseover', () => {
    bodyDrink.classList.remove('hide');
});

headDrink.addEventListener('mouseout', () => {
    bodyDrink.classList.add('hide');
});