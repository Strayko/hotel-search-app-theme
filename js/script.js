
$('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    // autoplay: true,
    // autoplaySpeed: 1000,
    cssEase: 'linear',
    speed: 900,
    arrows: false
});

$('.slider-nav2').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    speed: 2500,
    arrows: false
});

$('.slider-for-3').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav-3',
    draggable: false
});
$('.slider-nav-3').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for-3',
    focusOnSelect: true,
    draggable: false,
    arrows: false
});

$('.left').click(function(){
    $('.slider').slick('slickPrev');
});

$('.right').click(function(){
    $('.slider').slick('slickNext');
});

$('a[data-slide]').click(function(e) {
    e.preventDefault();
    var slideno = $(this).data('slide');
    $('.slider-nav').slick('slickGoTo', slideno - 1);
});