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


var galleryThumbs = new Swiper('.gallery-thumbs', {
    spaceBetween: 10,
    slidesPerView: 8,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    slideToClickedSlide: true,
    breakpoints: {
        1200: {
            slidesPerView: 8,
        },
        992: {
            slidesPerView: 5,
        },
        768: {
            slidesPerView: 4,
        },
        576: {
            slidesPerView: 3,
        },
        480: {
            slidesPerView: 3,
        }
    },
});
var galleryTop = new Swiper('.gallery-top', {
    spaceBetween: 10,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    thumbs: {
        swiper: galleryThumbs
    },
    on: {
        slideChange: function () {
            let activeIndex = this.activeIndex + 1;

            let activeSlide = document.querySelector(`.gallery-thumbs .swiper-slide:nth-child(${activeIndex})`);
            let nextSlide = document.querySelector(`.gallery-thumbs .swiper-slide:nth-child(${activeIndex + 1})`);
            let prevSlide = document.querySelector(`.gallery-thumbs .swiper-slide:nth-child(${activeIndex - 1})`);

            if (nextSlide && !nextSlide.classList.contains('swiper-slide-visible')) {
                this.thumbs.swiper.slideNext()
            } else if (prevSlide && !prevSlide.classList.contains('swiper-slide-visible')) {
                this.thumbs.swiper.slidePrev()
            }

        }
    }
});
// galleryTop.controller.control = galleryThumbs;
// galleryThumbs.controller.control = galleryTop;

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
$('#payment-sum_5').on('click', function (e) {
    $('.payment-sum input').prop('checked', false);
});
$('.payment-service input').on('click', function (e) {
    $('.payment-service input').addClass('input__service');
});

$('.video-item').on('click', function() {
    $('.fond-media-btn').toggleClass('hidden');
});
