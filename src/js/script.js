$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1300,
        dotsClass: 'slick-dots',
        // adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/chevron-left-solid.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/chevron-right-solid.svg"></button>',
        responsive: [
            {
            breakpoint: 992,
            settings: {
                arrows: false,
                dots: true,
            }
        },
        {
            breakpoint: 425,
            settings: {
                arrows: false,
                dots: true,
            }
        }
    ]        
    });
});
      