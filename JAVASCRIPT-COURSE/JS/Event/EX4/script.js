const $ = document.querySelector.bind(document);
const dropdown = $('.dropdown');
const dropdownBody = $('.dropdown-body');
const navItemFirst = $('.nav-item:first-child');
const triIcon = $('.tri-icon');

navItemFirst.addEventListener('mouseover', () => {
    triIcon.setAttribute('style','color: black');
});

navItemFirst.addEventListener('mouseout', () => {
    triIcon.setAttribute('style','color: blueviolet');
});

dropdown.addEventListener('mouseover', () => {
    dropdownBody.classList.remove('hide');
});

dropdown.addEventListener('mouseout', () => {
    dropdownBody.classList.add('hide');
});