$('.menu-btn').on('click', function(event){
  event.preventDefault;
  $(this).toggleClass('menu-btn_active');
  $('.menu-nav').toggleClass('menu-nav_active');

});

$(document).ready(function(){
  $('.slider-hero').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: false
  });
  $('.feedback-slider').slick({
    infinite: true,
    dots: true,
    arrows: false,
    slidesToShow: 2,
    slidesToScroll: 1
  });
});

var link = document.getElementById("link"),
box = document.jquerySelector(".feedback__text");
link.onclick = function(){
box.classList.add("open");
}