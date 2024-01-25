import React from 'react'

function Spinner() {

  window.onload = function(){
    $('.slider').slick({
        autoplay:true,
   autoplaySpeed:1500,
       arrows: false,
       dots: true,
       fade: true,
   infinite: false
    });  
	mediaSize();
$('.slider').on('init', function(event, slick){
        turnLeft();
    });
$('.slider').on('reInit', function(event, slick){
        turnLeft();
    });
$('.slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
        turnLeft();
    });
// $('.slider').on('afterChange', function(event, slick, currentSlide){
//         turnRight();
//     });
 }
 // @param function that returns list of dots from specific slider
 // 

	
function mediaSize() { 
		/* Set the matchMedia */
if (window.matchMedia('(min-width: 768px)').matches) {
		/* Changes when we reach the min-width  */
 placeDots(getDots(".slider"));	
	
		} else {
		/* Reset for CSS changes – Still need a better way to do this! */
 MobileplaceDots(getDots(".slider"));
 }
	
	};
	
	/* Call the function */
  
  /* Attach the function to the resize event listener */
window.addEventListener('resize', mediaSize, false);  

	
function placeDots(dots) {
    // How many points along the circle. The higher number the shorter the distance between dots
    var points = 19;
    // Circle radius
    var r = 170;
    // Center of circle
    var cx = 150, cy = 150;
    for (var i = 0; i < dots.length; i++) {
       var deg = 360 / points * i;
       var rad = deg * Math.PI / 180
       var x = cx + r * Math.cos(rad);
       var y = cy + r * Math.sin(rad);
       // Subtract amount equal to half of dots width
       x = x - 5; y = y - 5;
       dots[i].style.left = "" + x + "px";
       dots[i].style.top = "" + y + "px";
 }
}
function MobileplaceDots(dots) {
    // How many points along the circle. The higher number the shorter the distance between dots
    var points = 19;
    // Circle radius
    var r = 110;
    // Center of circle
    var cx = 100, cy = 100;
    for (var i = 0; i < dots.length; i++) {
       var deg = 360 / points * i;
       var rad = deg * Math.PI / 180
       var x = cx + r * Math.cos(rad);
       var y = cy + r * Math.sin(rad);
       // Subtract amount equal to half of dots width
       x = x - 5; y = y - 5;
       dots[i].style.left = "" + x + "px";
       dots[i].style.top = "" + y + "px";
 }
}	
	
// @param slider class name
function getDots(slider) {
    var dots = $('' + slider + ' .slick-dots').children();
    return dots;	
 } 

  return (
    <div>
      Spinner
    </div>
  )
}

export default Spinner
