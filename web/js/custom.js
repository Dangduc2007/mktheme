
require([
    'jquery',
    'slick',
    'accordion',
    'owlCarousel'
], function ($) {
    $(document).ready(function () {

        $('.footer-showroom-content').slick({
            dots: false,
            slidesToShow: 3,
            slidesToScroll: 1,

            responsive: [{
                breakpoint: 768,
                settings: {
                    dots: false,
                    arrows: false,
                    infinite: false,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }]
        });

        $('.banner-bottom').slick({
            dots: false,
            slidesToShow: 2,
            slidesToScroll: 1,

            responsive: [{
                breakpoint: 640,
                settings: {
                    dots: false,
                    arrows: false,
                    infinite: false,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }]
        });

        $('.menu-center-mobile').slick({
            dots: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
        });

        $('.title-slider').slick({
            dots: false,
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: false,

            responsive: [{
                breakpoint: 768,
                settings: {
                    dots: false,
                    arrows: false,
                    infinite: false,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }]
        });
        

        $('.slider-wrap').slick({
            dots: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            responsive: [{
                breakpoint: 500,
                settings: {
                    dots: false,
                    arrows: false,
                    infinite: false,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }]
        });
        
        // Accordion---------------

        if ($(window).width() < 768) {
            $(".footer-middle-content").accordion({
               "openedState": "active",
               "collapsible": true,
               "active": [2],
               "multipleCollapsible": true,
               "animate":{
      
                  timing:"ease-out",
                  duration:"500",
                  delay:"1s"
               }
            });
        }

    });
    
    
});
