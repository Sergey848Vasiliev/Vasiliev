;(function ($) {
    $(function () {

        $('.slider').slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            slide: "div",
            dots: true,
            // arrows: false,
            prevArrow: ".left",
            nextArrow: ".right"
        });

        $("#about-btn, #services-btn, #contact-btn, #portfolio-btn, #testimonial-btn").on("click", function(e){  //на что кликаем
            var anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $(anchor.attr('href')).offset().top
            }, 777);
            e.preventDefault();
            return false;
        });

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