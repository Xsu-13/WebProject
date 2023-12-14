$(document).ready(function(){
    $('.slider').slick({
        slidesToShow: 5,
        centerMode: true,
        autoplay: true,
        autoplaySpeed: 3000,
        dots:false,
        prevArrow: false,
        nextArrow: false
    });
    $('.comment-slider').slick({
        adaptiveHeight:true,
        centerMode:false,
        slidesToShow: 1,
        autoplay: false,
        dots:false,
        draggable: false,
        fade: true,
        prevArrow: $('comment-arrow-prev'),
        nextArrow: $('comment-arrow-next')
    });

    $('.comment-card-wrapper').on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){
        var i = (currentSlide ? currentSlide : 0) + 1;
        $(this).find('.current-num').html("0" + i);
    });

    $('.comment-arrow-prev').on('click', function() {
        $('.comment-slider').slick('slickPrev');
    });
    $('.comment-arrow-next').on('click', function() {
        $('.comment-slider').slick('slickNext');
    });
    
})