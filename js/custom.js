$(document).ready(function () {

    //    preloder
    
    $(window).load(function(){
        
        $(".preloder").fadeOut(1000)
        
    });
    
    //smooth scroll and active menu button code
    var html_body = $('html, body');
    $('.navbar-nav .nav-item .nav-link').on('click', function () {
        //for active menu button
        $('.navbar-nav .nav-item .nav-link').removeClass("active");
        $(this).addClass("active");
        //smooth scroll on menu click
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                html_body.animate({
                    scrollTop: target.offset().top - 0
                }, 1000);
                return false;
            }
        }
    });



    //    navbar code

    $(window).scroll(function () {

        var scrolling = $(this).scrollTop();

        if (scrolling > 350) {

            $(".navbar").addClass("active-navbar");
        } else {

            $(".navbar").removeClass("active-navbar");
        }

        if (scrolling > 450) {

            $(".scroll-btn").fadeIn(1000);
        } else {

            $(".scroll-btn").fadeOut(1000);
        }


    });

    $(".scroll-btn").on("click", function () {

        $("html,body").animate({

            scrollTop: "0px"
        }, 1500);

    });


    //    jackpot type

    var typed = new Typed('#jackpot-type', {
        // Waits 1000ms after typing "First"
        strings: ['', 'oday’s Jackpot'],
        typeSpeed: 300,
        loop: true,
        backSpeed: 300,
        smartBackspace: true,
    });

    // timer 
    $('.time-down').countdown({

        date: '06/25/2022 24:59:59'

    });


});
