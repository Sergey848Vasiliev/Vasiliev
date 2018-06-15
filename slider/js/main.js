;(function ($) {
    $(function () {
       $('.white-slider').slick({
           infinite: true,
           slidesToShow: 3,
           slidesToScroll: 1,
           autoplay: true,
           autoplaySpeed: 2000,
           slide: "div",
           prevArrow: ".white-left",
           nextArrow: ".white-right"
       });
       $('.black-slider').slick({
           infinite: true,
           slidesToShow: 1,
           slidesToScroll: 1,
           dots: true, 
           autoplay: true,
           autoplaySpeed: 1500,
           slide: "div",
           prevArrow: ".black-right",
           nextArrow: ".black-left"
       });

        $(document).ready(function(){
            /*--------стрелка вверх--------*/
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
    });
})(jQuery);