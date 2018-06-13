;(function ($) {
    $(function () {
       /* var arrowUp = $('<div />');
        arrowUp
            .attr({
                id: 'arrow-up',
                style: 'position:fixed;right:10px'
            })
            .css({
                width: '50px',
                height: '50px',
                bottom: '10px',
                display: 'none',
                background: 'url(../img/up.png) center',
                cursor: 'pointer'
            })
            .text('Up');
        $('body').append(arrowUp);
        var offset = $('#about-us').offset().top;
        console.log(offset);

        function arrowShow() {
            if ($(window).scrollTop() >= offset) {
                $('#arrow-up').show(500);
            } else {
                $('#arrow-up').hide(500);
            }
        }

        arrowShow();
        $(window).on('scroll', function () {
            arrowShow();
        });
        $('body').on('click', '#arrow-up', function () {
            $(window).scrollTop(0);
        });*/

        $(document).ready(function(){
/*---------------------стрелка вверх-------------------------------*/
            $(window).scroll(function(){
                if ($(this).scrollTop() > 100) {
                    $('.scrollup').fadeIn();
                } else {
                    $('.scrollup').fadeOut();
                }
            });

            $('.scrollup').click(function(){
                $("html, body").animate({ scrollTop: 0 }, 600);
                return false;
            });

/*----------плавная прокрутка до якоря--------------------------------*/

            $("#logo, #home, #about").on("click", function(e){  //на что кликаем
                var anchor = $(this);
                $('html, body').stop().animate({
                    scrollTop: $(anchor.attr('href')).offset().top
                }, 777);
                e.preventDefault();
                return false;
            });
/*-------------------движение фона от мыши----------------------------*/
            var left = 0,
                top = 0,
                element = $('.header-section'), //какой фон двигать
                offset =  { left: element.offset().left, top: element.offset().top };
            element.bind('mousemove', function(e){
                left = (e.pageX-offset.left);
                top = (e.pageY-offset.top);
                $(this).css({
                    backgroundPosition: '-'+(0.2*left)+'px -'+(0.15*top)+'px'
                });
            });

        });
    })
})(jQuery);