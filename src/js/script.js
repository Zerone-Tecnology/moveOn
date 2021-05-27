var slider_first = new Swiper('.slider-first', {
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    autoplay: {
        delay: 5000,
    },
    loop: true,
});
var slider_second = new Swiper('.slider-second', {
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    loop: true,
    autoplay: {
        delay: 8000,
    },
});
var slider_third = new Swiper('.slider-third', {
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    loop: true,
    autoplay: {
        delay: 4000,
    },
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

function mailSend(req) {
    $.ajax(
        {
            type: "POST",
            url: '/src/ajax/mail.php',
            data: req,
            dataType: "json",
            success: function (response) {
                if (response.status != undefined && response.status == true) {
                    modalIsSuccess();
                } else {
                    console.log('Не удалось отправить письмо!');
                }
            },
            error: function (errMsg) {
                console.log(errMsg);
            }
        }
    );
    return true;
}

function modalIsSuccess() {
    if (!$('.modal-title').hasClass('hidden')) {
        $('.modal-title').addClass('hidden');
    }
    if (!$('.modal-fields').hasClass('hidden')) {
        $('.modal-fields').addClass('hidden');
    }
    if ($('.modal-success').hasClass('hidden')) {
        $('.modal-success').removeClass('hidden');
    }
}

$('.modal-submit').on('click', function () {
    if ($('input[name="email"]').val() == '') {
        return 0; // пользователь не указал почту
    }

    const req = {
        action: 'mail',
        to: $('input[name="email"]').val(),
        dataset: [
            {
                name: 'Фамилия Имя',
                value: $('input[name="email"]').val()
            },
            {
                name: 'Должность',
                value: $('input[name="position"]').val()
            },
            {
                name: 'Компания',
                value: $('input[name="company"]').val()
            },
            {
                name: 'Телефон',
                value: $('input[name="phone"]').val()
            },
            {
                name: 'Почта',
                value: $('input[name="email"]').val()
            },
        ]
    }

    mailSend(req);
});

$(".menu-li").on('click', () => {
    if ($(".open-menu").length) {
        $(".open-menu").click();
    }
});