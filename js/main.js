$('.menu-btn').on('click', function(event){
  event.preventDefault;
  $(this).toggleClass('menu-btn_active');
  $('.menu-nav').toggleClass('menu-nav_active');

});

$(document).ready(function(){
  $('.slider-hero').slick({
    dots: true,
    infinite: true,
    autoplay: false,
    focusOnSelect: true,
    pauseOnHover: true,
    speed: 1000,
    slidesToShow: 1,
    adaptiveHeight: false
  });
  $('.feedback-slider').slick({
    infinite: true,
    focusOnSelect: true,
    pauseOnHover: true,
    dots: true,
    arrows: false,
    slidesToShow: 2,
    slidesToScroll: 1
  });
});
