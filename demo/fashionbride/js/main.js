;(function ($) {
    $(function () {

        $('.carousel').carousel({
            interval: 5000
        })

       /* $('.header-slider').slick({
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
        });*/

        /*-----------плавный скролл----------------*/
       /* $("#btn-card, #btn-about-us, #btn-help").on("click", function(e){  //на что кликаем
            var anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $(anchor.attr('href')).offset().top
            }, 777);
            e.preventDefault();
            return false;
        });*/

        /*-----------стрелка вверх---------------*/
       /* $(window).scroll(function(){
            if ($(this).scrollTop() > 100) {
                $('.scroll-up').fadeIn();
            } else {
                $('.scroll-up').fadeOut();
            }
        });

        $('.scroll-up').click(function(){
            $("html, body").animate({ scrollTop: 0 }, 600);
            return false;
        });*/

    });
})(jQuery);

/*--------карта---------*/

/*function initMap() {
    var MonticelloPlace = {lat: 40.6804484, lng: -73.9445065},
        centerPlace = {lat: 40.6754484, lng: -73.9445065},
        infoWindowMonticello = document.getElementById('info-window'),
        map = new google.maps.Map(document.getElementById('map'), {
            center: centerPlace,
            zoom: 15,
            disableDefaultUI: true
        }),
        markerMonti = {
            url: 'img/marker.svg',
            size: new google.maps.Size(150, 150),
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(17, 34),
            scaledSize: new google.maps.Size(100, 100)
        },
        markerMonti = new google.maps.Marker({
            position: MonticelloPlace,
            map: map,
            title: 'Welcome :)',
            icon: markerMonti,
            animation: google.maps.Animation.DROP
        }),
        infoWindowMonti = new google.maps.InfoWindow({
            content: infoWindowMonticello
        });

    markerMonti.addListener('click', function() {
        infoWindowMonti.open(map, markerMonti);
    });

    $.getJSON("js/map-style.json", function(data) {
        map.setOptions({styles: data});
    });
}*/