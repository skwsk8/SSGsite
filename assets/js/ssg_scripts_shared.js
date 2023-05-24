// JavaScript - Single Step Games, LLC (c)2023

function carouselNormalization() {
	window.heights = [], //create empty array to store height values
	window.tallest; //create variable to make note of the tallest slide
	function normalizeHeights() {
		jQuery('.carousel-inner .carousel-item').each(function() { //add heights to array
			window.heights.push(jQuery(this).outerHeight());
		});
		window.tallest = Math.max.apply(null, window.heights); //cache largest value
		jQuery('.carousel-inner .carousel-item').each(function() {
			jQuery(this).css('min-height',tallest + 'px');
		});
	}
	normalizeHeights();
	jQuery(window).on('resize orientationchange', function () {
		window.tallest = 0, window.heights.length = 0; //reset vars
		jQuery('.carousel-inner .carousel-item').each(function() {
			jQuery(this).css('min-height','0'); //reset min-height
		});
		normalizeHeights(); //run it again
	});
}

jQuery( document ).ready(function() {
	$('#carousel-1').carousel(Math.floor(Math.random() * $('.carousel-item').length));
	carouselNormalization();
});

function getFooterDate(footerText,originYear,includePS) {
	var psString = includePS ? ", BREAK STUFF VR, and PSYCHE SOLDIER VR" : " and BREAK STUFF VR";
	var footerText=document.getElementById(footerText);
	var d = new Date();
	if (d.getFullYear() == originYear)
	{
	footerText.innerHTML="&copy; "+originYear+" Single Step Games, LLC. SINGLE STEP GAMES"+psString+" are trademarks of Single Step Games, LLC. All rights reserved. All other trademarks and trade names are property of their respective owners.";
	}
	else
	{
	footerText.innerHTML="&copy; "+originYear+"-"+d.getFullYear()+" Single Step Games, LLC. SINGLE STEP GAMES"+psString+" are trademarks of Single Step Games, LLC. All rights reserved. All other trademarks and trade names are property of their respective owners.";
	}
}