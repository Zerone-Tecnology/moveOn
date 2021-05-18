var slider_first = new Swiper('.slider-first', {
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    autoplay: {
        delay: 5000,
    },
    loop: true,
    effect: 'fade',
    fadeEffect: {
        crossFade: true,
    },
});
var slider_second = new Swiper('.slider-second', {
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    loop: true,
    effect: 'fade',
    fadeEffect: {
        crossFade: true,
    },
    preloadImages: false,
    lazy: true,
});
var slider_third = new Swiper('.slider-third', {
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    loop: true,
});

$('.menu-burger__header').on('click', function () {
    if ($('header').hasClass('open')) {
        $('header').removeClass('open mobile');
        if ($(this).hasClass('open-menu')) $(this).removeClass('open-menu');
    } else {
        $('header').addClass('mobile open');
        if (!$(this).hasClass('open-menu')) $(this).addClass('open-menu');
    }
});