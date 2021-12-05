$(document).ready(function(){
 $(".slider-one").waypoint(function(direction) {
      if(direction=="down") {
         $("nav").addClass('stcky_nav');
      }
      else {
         $("nav").removeClass('stcky_nav');
      }
   }); 
 $(".slider-one")
.not(".slick-initialized")
.slick({

	prevArrow:".site-slider.prev",
	nextArrow: ".site-slider.next",
	slidesToShow: 5,
	slidesToScroll: 1,
	autoplaySpeed: 3000
});
