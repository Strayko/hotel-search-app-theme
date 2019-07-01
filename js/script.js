
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

// Create a clone of the menu, right next to original.
$('.menu').addClass('original').clone().insertAfter('.menu').addClass('cloned').css('position','fixed').css('top','0').css('margin-top','0').css('z-index','500').removeClass('original').hide();

scrollIntervalID = setInterval(stickIt, 10);


function stickIt() {

    var orgElementPos = $('.original').offset();
    orgElementTop = orgElementPos.top;

    if ($(window).scrollTop() >= (orgElementTop)) {
        // scrolled past the original position; now only show the cloned, sticky element.

        // Cloned element should always have same left position and width as original element.
        orgElement = $('.original');
        coordsOrgElement = orgElement.offset();
        leftOrgElement = coordsOrgElement.left;
        widthOrgElement = orgElement.css('width');
        $('.cloned').css('left',leftOrgElement+'px').css('top',0).css('width',widthOrgElement).show();
        $('.original').css('visibility','hidden');
    } else {
        // not scrolled past the menu; only show the original menu.
        $('.cloned').hide();
        $('.original').css('visibility','visible');
    }
}