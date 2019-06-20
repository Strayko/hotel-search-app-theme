
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