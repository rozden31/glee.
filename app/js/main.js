$(function(){
    $('.header__slider-start').slick({
       arrows: false,
       dots: true,
       fade: true,
       autoPlay: true,
       autoplaySpeed: 3
    });

    var mixer = mixitup('.product__content, .design__content');
});