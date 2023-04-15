// JavaScript - Single Step Games, LLC (c)2016

const quotes = [
"It's very fun to break things without consequences :)",
"Very entertaining! Lots of fun!",
"I loved breaking stuff!",
"Very fun. Love to break things :)",
"This is the best part of every VR game anyway.",
"Very fun game, very smooth and easy to understand.",
"Lots of fun, lots of options!",
"Very therapeutic 11/10",
"LOTS OF CATHARTIC FUN!",
"Cathartic!",
"GREAT FUN, SUPER SATISFYING TO BREAK STUFF!",
"Really fun and intuitive.",
"It's really fun and amazing!",
"So funny + stress relieving.",
"Fun!!!!!",
"Fun to destroy!!",
"I really liked it! 10/10 from me.",
"It was great, easy to get into!",
"Awesome gameplay.",
"Best game ever.",
"So real and awesome.",
"Best VR game ever.",
"Love the variety!",
"Amazing and immersive! I could have spent hours in the Carnival.",
"Very fun. Great for venting frustration :)",
"AWESOME GAME IDEA, LOVE IT!",
"It was real fun and engaging :)",
"Lit.",
"I love breaking the car so thoroughly!",
"Highly entertaining!",
"Loved it, good all around fun 10/10",
"Strangely relaxing 9/10",
"Love it! Awesome party game.",
"I love everything about it!",
"A fun catharsis game.",
"AWESOME!",
"So awesome!! 10/10 recommend!",
"Amazing game! Great way to release energy! :)",
"Very, very fun! Loved breaking stuff and lots to destroy :)",
"Great game! Lots of fun and easy to play.",
"Great game! What's not to love? Both kids loved it!"
];

const quoteNames = [
"~ Analeah V.",
"~ Aiden O.",
"~ Vera B.",
"~ Morty F.",
"~ Ken B.",
"~ Eli M.",
"~ Kayla I.",
"~ Kyle T.",
"~ William W.",
"~ Mike I.",
"~ Brian W.",
"~ Tony H.",
"~ Amelia N.",
"~ Rachel T.",
"~ Elsie C.",
"~ Caleb B.",
"~ Aiden E.",
"~ Kevin K.",
"~ Rafi A.",
"~ Noah J.",
"~ Brennan P.",
"~ Hunter I.",
"~ Alexander C.",
"~ Zach M.",
"~ Fred O.",
"~ Kelson H.",
"~ Spenser W.",
"~ K.J.",
"~ Alicia D.",
"~ Sam T.",
"~ Matthew B.",
"~ Tre R.",
"~ Trey M.",
"~ Zach V.",
"~ Dean K.",
"~ John W.",
"~ Jackie H.",
"~ Ava R.",
"~ Keleigh L.",
"~ Christopher H.",
"~ Melissa F."
];

function carousel() {
	var random = Math.floor(Math.random() * quotes.length);
	document.getElementById("quote").innerHTML = quotes[random];
	document.getElementById("quoteName").innerHTML = quoteNames[random];
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