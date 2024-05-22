
$(document).ready(function(){
    $('.slider-container-block').slick({
        infinite: true,
        slidesToShow: 3,
        adaptiveWidth: true,
        responsive:[{
            breakpoint: 1300,
            settings:{
                slidesToShow: 2,
                dots: true
            }
        },
        {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1
                }
            }
        ],


    });
});
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
