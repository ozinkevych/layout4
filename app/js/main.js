const burgerMenu = document.querySelector('.burger-menu');
const mainMenu = document.querySelector('.main-menu');

burgerMenu.addEventListener('click', () => {
    mainMenu.classList.toggle('show');
});