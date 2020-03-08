$(window).on('load', function() {

  $("body").removeClass("fixed");

});

$(document).ready(function() {

    $("body").addClass("fixed");

    if( $(".gallery").length > 0 ) {

      var dataPath;

        $(".gallery").on('init', function() {
          $(".gallery .slide").each(function() {
            dataPath = $(this).find("image").attr("data-image-path");
            console.log(dataPath);
            $(this).find("image").attr("href", dataPath);
          });
        });

        $(".gallery").not(".slick-initialized").slick({
            dots: false,
            arrows: true,
            infinite: false,
            autoplay: true,
            autoplaySpeed: 4000,
            speed: 1200,
            slidesToShow: 5,
            slidesToScroll: 1,
            responsive: [
                {
                  breakpoint: 1390,
                  settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                  }
                },
                {
                  breakpoint: 1124,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                  }
                },
                {
                  breakpoint: 910,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                  }
                },
                {
                  breakpoint: 520,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }
              ]
        });
    }

    // ----------

    $("input[type='tel']").mask("+7 (999) 999-99-99");

    // ----------

    $(".respmenubtn").click(function(e) {
        e.preventDefault();
        if( $("#resp_nav").is(":hidden") ) {
            $("#resp_nav").fadeIn(300);
            $(this).addClass("active");
        } else {
            $("#resp_nav").fadeOut(300);
            $(this).removeClass("active");
        }
    });
    $("#resp_nav .close_btn").on("click", function(e) {
        e.preventDefault();
        $("#resp_nav").fadeOut(300);
        $(".respmenubtn").removeClass("active");
    });
    $(this).keydown(function(eventObject){
        if (eventObject.which == 27 &&
            $("#resp_nav").is(":visible") ) {
                $("#resp_nav").fadeOut(300);
                $(".respmenubtn").removeClass("active");
        }
    });
    
    // ----------

    var this_form,
        tel,
        email,
        error;

    $("[type ='submit']").on("click", function (event) {
        event.preventDefault();
        // parentBlock = $(this).closest(".modal");
        this_form = $(this).closest("form");
        this_form.find('input, textarea').removeClass('error');
        if(this_form.find('input').is('input[name="name"]')) {
            var name = this_form.find('input[name="name"]');
            if(typeof name.attr('required') != typeof undefined) {
                if(name.val().length<=2) {
                    name.addClass('error');
                    error=1;
                }
            }
        }
        if(this_form.find('input').is('input[name="tel"]')) {
            tel = this_form.find('input[name="tel"]');
            if(typeof tel.attr('required') != typeof undefined) {
                if(tel.val() == "") {
                    tel.addClass('error');
                    error=1;
                }
            }
        }
        if(this_form.find('input').is('input[name="email"]')) {
            email = this_form.find('input[name="email"]');
            if(typeof email.attr('required') != typeof undefined) {
                if(!email.val().match(/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/)) {
                    email.addClass('error');
                    error=1;
                }
            }
        }
        if(error==1) {
            return false;
        }
        $.ajax({
            url: "mail.php",
            type:     "POST",
            dataType: "html",
            data: this_form.serialize(),
            beforeSend: function () {
            },
            success: function (response) {
                this_form.trigger("reset");
                // parentBlock.find(".close_btn").trigger("click");
                $(".result_popup").addClass("visible");
            },
            error: function () {
                alert("ошибка отправки");
            }
        });
    });


    // ------------

    $(".main_nav a, .logo").click(function(e) {
        e.preventDefault();
        var hrefAttr = $(this).attr("href");
        var visibleBlock = $(hrefAttr);
        parentBlock = $(this).closest(".main_nav");
        parentBlock.find("a").removeClass("active");
        $(this).addClass("active");
        $('html, body').stop().animate({
            'scrollTop': visibleBlock.offset().top - 90
        }, 500);
        $("#resp_nav").fadeOut(300, function() {
          $(".respmenubtn").removeClass("active");
        });
    });


});