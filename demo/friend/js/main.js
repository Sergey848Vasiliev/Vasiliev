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
            arrows: true,
            prevArrow: ".arr-left",
            nextArrow: ".arr-right"
        });

        $('.post-slider').slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 4000,
            slide: "div",
            dots: false,
            arrows: false
            //prevArrow: ".arr-left",
            //nextArrow: ".arr-right"
        });

        /*-----------плавный скролл----------------*/
        $("#btn-card, #btn-about-us, #btn-help").on("click", function(e){  //на что кликаем
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