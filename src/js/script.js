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



$('.onModal').on('click', function () {
    if ($('.modal').hasClass('show')) {
        $('.modal').removeClass('show');
    } else {
        $('.modal').addClass('show');
    }


    if ($('.modal-title').hasClass('hidden')) {
        $('.modal-title').removeClass('hidden');
    }
    if ($('.modal-fields').hasClass('hidden')) {
        $('.modal-fields').removeClass('hidden');
    }
    if (!$('.modal-success').hasClass('hidden')) {
        $('.modal-success').addClass('hidden');
    }
});

$('.modal-submit').on('click', function () {
    if (!$('.modal-title').hasClass('hidden')) {
        $('.modal-title').addClass('hidden');
    }
    if (!$('.modal-fields').hasClass('hidden')) {
        $('.modal-fields').addClass('hidden');
    }
    if ($('.modal-success').hasClass('hidden')) {
        $('.modal-success').removeClass('hidden');
    }
});