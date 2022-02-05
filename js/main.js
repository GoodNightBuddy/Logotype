$(function(){

    $('.slider__inner, .news__slider').slick({
        nextArrow:'<button type="button" class="slick-next"></button>',
        prevArrow:'<button type="button" class="slick-prev"></button>',
        infinite: false
    });

    $('select').styler()

    $('.header__btn-menu').on('click', function(){
        $('.menu__list a').slideToggle();
      });
    

});