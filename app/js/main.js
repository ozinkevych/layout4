const burgerMenu = document.querySelector('.burger-menu');
const mainMenu = document.querySelector('.main-list');

burgerMenu.addEventListener('click', () => {
    mainMenu.classList.toggle('show');
});
document.querySelector('.form-btn').addEventListener('click', function (event) {
    let form = document.querySelector('.registration-form');

    form.classList.add('submitted');

    if (!form.checkValidity()) {
        event.preventDefault();
    }
});