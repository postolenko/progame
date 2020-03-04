var w = window,
d = document,
e = d.documentElement,
g = d.getElementsByTagName('body')[0],
bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;


$(window).load(function() {



});

$(window).resize(function() {



});

$(document).scroll(function() {



});

$(document).ready(function() {

    if( $(".gallery").length > 0 ) {
        $(".gallery").not(".slick-initialized").slick({
            dots: false,
            arrows: true,
            // autoplay: true,
            // autoplaySpeed: 4000,
            speed: 1200,
            slidesToShow: 5,
            slidesToScroll: 1,
            // fade: true,
            // responsive: [
            //     {
            //       breakpoint: 900,
            //       settings: {
            //         slidesToShow: 2,
            //         slidesToScroll: 2
            //       }
            //     },
            //     {
            //       breakpoint: 540,
            //       settings: {
            //         slidesToShow: 1,
            //         slidesToScroll: 1
            //       }
            //     }
            //   ]
        });
    }

    // ----------

    $("input[type='tel']").mask("+7 (999) 999-99-99");

});