const burgerMenu = document.querySelector('.burger-menu');
const mainMenu = document.querySelector('.main-list');

burgerMenu.addEventListener('click', () => {
    mainMenu.classList.toggle('show');
});