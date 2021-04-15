//

// $('.header-logo a, .footer-logo a').on('click', function (e) {
//     e.preventDefault();
//     $('html, body').animate({
//         scrollTop: 0
//     }, 1000);
//     return false;
// });
// $(document).mouseup(function (e){
//     var div = $('.header-phone');
//     if (!div.is(e.target)
//         && div.has(e.target).length === 0) {
//         $('.header-phone ul').removeClass('is-open');
//     }
// });
// $(function() {
//     var headerHeight = $('header').outerHeight(); // Target your header navigation here
//     $('.header-nav a').click(function(e) {
//         var targetHref   = $(this).attr('href');
//         $('html, body').animate({
//             scrollTop: $(targetHref).offset().top - headerHeight // Add it to the calculation here
//         }, 1000);
//         $('.header-nav__button').find('.icon').toggleClass('hidden');
//         $('.header-nav, .header-overlay').toggleClass('is-hidden');
//         $('body').toggleClass('scroll');
//         e.preventDefault();
//     });
// });
// $('.header-nav__button').on('click', function () {
//    var $this = $(this);
//     $this.find('.icon').toggleClass('hidden');
//     $('.header-nav, .header-overlay').toggleClass('is-hidden');
//     $('body').toggleClass('scroll');
// });
// $('.footer-nav').on('click', function () {
//     $('.header-nav__button').find('.icon').toggleClass('hidden');
//     $('.header-nav, .header-overlay').toggleClass('is-hidden');
//     $('body').toggleClass('scroll');
// });
// $('.header-overlay').on('click', function () {
//     $('.header-nav__button').find('.icon').toggleClass('hidden');
//     $('.header-nav, .header-overlay').toggleClass('is-hidden');
//     $('body').toggleClass('scroll');
// });
// $('.header-phone__btn').on('click', function () {
//     var $this = $(this);
//     $this.next().toggleClass('is-open');
// });

// function tabsInner(){
//     var tabItemNav = $('.tab-nav a');
//     var tabItem = $('.tab-item' );
//     tabItemNav.on('click', function(e){
//         e.preventDefault();
//         var $this = $(this),
//             tabItemId = $this.attr('href');
//         tabItemNav.removeClass('active');
//         $this.addClass('active');
//         tabItem.removeClass('active');
//         $('.tab-item__media').removeClass('media-animation');
//         $(tabItemId).addClass('active');
//         function explode(){
//             $('.tab-item__media').addClass('media-animation');
//         }
//         setTimeout(explode, 500);
//     });
// }
// tabsInner();
//
// if ($('.reviews-item').length > 3) {
//     $('.reviews-item:gt(2)').hide().removeClass('aos-init aos-animate');
//     $('.show-more').show();
// }
// $('.reviews-wrapper .show-more').on('click', function (e) {
//     var $this = $(this);
//     $this.find('span').toggleClass('hidden');
//     $('.reviews-item:gt(2)').toggle();
// });
// if ($('.product-item').length > 3) {
//     $('.product-item:gt(2)').hide().removeClass('aos-init aos-animate');
//     $('.show-more').show();
// }
// $('.catalog-wrapper .show-more').on('click', function (e) {
//     var $this = $(this);
//     $this.find('span').toggleClass('hidden');
//     $('.product-item:gt(2)').toggle();
// });

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

var swiper = new Swiper( '.about-slider', {
    effect: "coverflow",
    grabCursor: true,
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
    thumbs: {
        swiper: teamSwiper
    },
});
var teamSwiper = new Swiper( '.team-slider', {
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    centerInsufficientSlides: true,
    slideToClickedSlide: true,
    effect: "coverflow",
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 0,
        stretch: 250,
        depth: 280,
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







var newsSwiper = new Swiper('.news-slider', {
    slidesPerView: 3,
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
