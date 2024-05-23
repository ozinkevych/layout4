
$(document).ready(function(){
    $('.slider-container-block').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,

        responsive:[{
            breakpoint: 1200,
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
$(document).ready(function() {
    $('.testimonials-slider').slick({
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: false,
        centerMode: true,
        slidesToScroll: 1,
        centerPadding: '0',
        fade: true,
        dots: true,
        cssEase: 'linear',
        draggable: false,
        swipe: false,
        swipeToSlide: true,
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
