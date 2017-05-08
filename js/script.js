
// Kodilla task 10.3 

$(function(){
	
	$('p').fadeOut(10000);

	var carouselList = $("#carousel ul");

setInterval(changeSlides, 9000); 

	function changeSlides() {
		carouselList.animate({'marginLeft':-600}, 8000, moveFirstSlide); 
	}
	
	function moveFirstSlide() {
		var firstItem = carouselList.find("li:first");
		var lastItem = carouselList.find("li:last");
		lastItem.after(firstItem);
		carouselList.css({marginLeft:0});
	}

});