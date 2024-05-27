$(document).ready(function() {
    // Burger menu toggle
    const burgerMenu = document.querySelector('.burger-menu');
    const mainMenu = document.querySelector('.main-list');

    burgerMenu.addEventListener('click', () => {
        mainMenu.classList.toggle('show');
    });

    // Initialize the slider
    $('.slider-container-block').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        responsive: [
            {
                breakpoint: 850,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    // Initialize the testimonials slider
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
        swipeToSlide: true
    });
    $('.mentors-slider').slick({
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
        swipeToSlide: true
    });
    // Form validation
    document.querySelector('.form-btn').addEventListener('click', function(event) {
        let form = document.querySelector('.registration-form');

        form.classList.add('submitted');

        if (!form.checkValidity()) {
            event.preventDefault();
        }
    });
});