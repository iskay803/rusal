$(function () {
    var animateLines = function () {
        $('.decorate-lines').each(function (i, el) {
            const offset = $(el).offset().top;
            const scrolled = $(document).scrollTop();
            const height = $(window).height();
            const max = scrolled + height;

            if (offset >= scrolled && offset <= max) {
                $(el).addClass('animated');
            }
        });
    }

    $(document).scroll(animateLines);
    animateLines();

    new Swiper('.promo-slider', {
        slidesPerView: 1,
    });

    $('.nav-list__item').hover(function () {
        $('.submenu', $(this)).fadeIn();
    }, function () {
        $('.submenu', $(this)).fadeOut();
    })

    $('.burger-btn').click(function () {
        $('.mobile-menu, .overlay').fadeIn();
    });
    $('.close-btn, .overlay').click(function () {
        $('.mobile-menu, .overlay').fadeOut();
    });
});


