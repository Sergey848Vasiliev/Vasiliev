;(function ($) {
    $(function () {

        $('.header-slider').slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 4000,
            slide: "div",
            dots: true,
            prevArrow: ".arr-left",
            nextArrow: ".arr-right"
        });

        $('.post-slider').slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 4000,
            responsive: [
                {
                    breakpoint: 960,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 540,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ],
                slide: "div",
            dots: false,
            prevArrow: ".arr-left-sm",
            nextArrow: ".arr-right-sm"
        });

        /*-----------плавный скролл----------------*/
        $("#btn-about-us, #btn-portfolio, #btn-features, #btn-blog, #btn-contact").on("click", function(e){  //на что кликаем
            var anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $(anchor.attr('href')).offset().top
            }, 777);
            e.preventDefault();
            return false;
        });

        /*-----------стрелка вверх---------------*/
        $(window).scroll(function(){
            if ($(this).scrollTop() > 100) {
                $('.scroll-up').fadeIn();
            } else {
                $('.scroll-up').fadeOut();
            }
        });

        $('.scroll-up').click(function(){
            $("html, body").animate({ scrollTop: 0 }, 600);
            return false;
        });

    });
})(jQuery);