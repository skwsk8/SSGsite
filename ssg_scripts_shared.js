// JavaScript - Single Step Games, LLC (c)2016

function carousel() {
	var i;
	var x = document.getElementsByClassName("quotes");
	for(i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
	x[Math.floor(Math.random()*x.length)].style.display = "block";
	setTimeout(carousel, 2000); // Change image every 2 seconds
}

function dynamicVideo() {
	if(window.innerWidth >= 1080){
		const dynamicVideo=document.getElementById("dynamicVideo");
		dynamicVideo.innerHTML='<source src="Videos/BreakStuffVrWebLoop.mp4" type="video/mp4">'
	}
}

// Footer Function
function getFooterDate(footerText,originYear)
{
	var footerText=document.getElementById(footerText);
	var d = new Date();
	if (d.getFullYear() == originYear)
	{
	footerText.innerHTML="&copy; "+originYear+" Single Step Games, LLC. SINGLE STEP GAMES, BREAK STUFF VR, and PSYCHE SOLDIER VR are trademarks of Single Step Games, LLC. All rights reserved. All other trademarks and trade names are property of their respective owners.";
	}
	else
	{
	footerText.innerHTML="&copy; "+originYear+"-"+d.getFullYear()+" Single Step Games, LLC. SINGLE STEP GAMES, BREAK STUFF VR, and PSYCHE SOLDIER VR are trademarks of Single Step Games, LLC. All rights reserved. All other trademarks and trade names are property of their respective owners.";
	}
}