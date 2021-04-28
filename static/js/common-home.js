$('.btn-nav').on('click', function (e) {
    $(this).find('.icon').toggleClass('hidden');
    $('.header').toggleClass('active');
    $('body').toggleClass('scroll');
});
$('.icon-sub').on('click', function (e) {
    $(this).toggleClass('active').parent().toggleClass('active');
});
$('.header-overlay').on('click', function (e) {
    $('.btn-nav .icon').toggleClass('hidden');
    $('.header').removeClass('active');
    $('body').removeClass('scroll');
});

if ($(".hero-wrapper")[0]){
    $('.header').addClass('home-page');
}
$(window).on('scroll', function() {
    var $this = $(this),
        $header = $('.header'),
        $hero = $('.hero-wrapper').height(),
        $about = $('.about-wrapper').height();
    if ($(".hero-wrapper")[0]){
        if ($this.scrollTop() >= $hero + 120) {
            $header.addClass('scroll-nav');
        }
        else{
            $header.removeClass('scroll-nav');
        }
    } else {
        if ($this.scrollTop() > 1) {
            $header.addClass('scroll-nav');
        }
        else{
            $header.removeClass('scroll-nav');
        }
    }

});
$(window).on('load', function() {
    if ($(window).width() < 1200) {
        var aboutSwiper = new Swiper( '.about-slider', {
            navigation: {
                nextEl: '.about-button-prev',
                prevEl: '.about-button-next',
            },
        } );

        var teamTnfo = new Swiper('.team-info', {
            thumbs: {
                swiper: teamSwiper
            },
        });
        var teamSwiper = new Swiper( '.team-slider', {
            navigation: {
                nextEl: '.team-button-next',
                prevEl: '.team-button-prev',
            }
        } );

        teamSwiper.controller.control = teamTnfo;
        teamTnfo.controller.control = teamSwiper;
    }else{
        var swiper = new Swiper( '.about-slider', {
            effect: "coverflow",
            grabCursor: true,
            loop: true,
            centeredSlides: true,
            slidesPerView: "auto",
            coverflowEffect: {
                rotate: 0,
                stretch: 480,
                depth: 290,
                modifier: 1,
                slideShadows: false
            },
            navigation: {
                nextEl: '.about-button-prev',
                prevEl: '.about-button-next',
            },
        } );

        var teamTnfo = new Swiper('.team-info', {
            loop: true,
            slidesPerView: "auto",
            thumbs: {
                swiper: teamSwiper
            },
        });
        var teamSwiper = new Swiper( '.team-slider', {
            watchSlidesVisibility: true,
            watchSlidesProgress: true,
            centerInsufficientSlides: true,
            slideToClickedSlide: true,
            loop: true,
            effect: "coverflow",
            centeredSlides: true,
            slidesPerView: "auto",
            coverflowEffect: {
                rotate: 0,
                stretch: 240,
                depth: 240,
                modifier: 1,
                slideShadows: false
            },
            navigation: {
                nextEl: '.team-button-next',
                prevEl: '.team-button-prev',
            }
        } );

        teamSwiper.controller.control = teamTnfo;
        teamTnfo.controller.control = teamSwiper;
    }
});



var newsSwiper = new Swiper('.news-slider', {
    slidesPerView: 3,
    breakpoints: {
        1300: {
            slidesPerView: 3,
        },
        1200: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 1,
        }
    },
    navigation: {
        nextEl: '.news-button-next',
        prevEl: '.news-button-prev',
    },
});


function popupOpen() {
    var $popupButton = $('.btn-popup');
    $popupButton.on('click', function (e) {
        var $this = $(this);
        var popupButtonData = $this.data('popup');
        $('.popup').removeClass('active');
        $('div[data-popup = '+popupButtonData+']').addClass('active');
        $('body').addClass('scroll');
    });
}
popupOpen();
$('.popup-close').on('click', function (e) {
    var $this = $(this);
    $this.parent().parent().removeClass('active');
    $('.popup-overlay').removeClass('active');
    $('body').removeClass('scroll');
});
$('.popup-overlay').on('click', function (e) {
    var $this = $(this);
    $this.removeClass('active');
    $('.popup').removeClass('active');
    $('body').removeClass('scroll');
});
$('#payment-sum_5').on('click', function (e) {
    $('.payment-sum input').prop('checked', false);
});
$('.payment-service input').on('click', function (e) {
    $('.payment-service input').addClass('input__service');
});
