// JavaScript - Single Step Games, LLC (c)2016

// Footer Function
function getFooterDate(footerText,originYear)
{
	var footerText=document.getElementById(footerText);
	var d = new Date();
	if (d.getFullYear() == originYear)
	{
	footerText.innerHTML="Copyright &copy; "+originYear+" Single Step Games, LLC. SINGLE STEP GAMES, BREAK STUFF VR, and PSYCHE SOLDIER VR are trademarks of Single Step Games, LLC. All rights reserved. All other trademarks and trade names are property of their respective owners.";
	}
	else
	{
	footerText.innerHTML="Copyright &copy; "+originYear+"-"+d.getFullYear()+" Single Step Games, LLC. SINGLE STEP GAMES, BREAK STUFF VR, and PSYCHE SOLDIER VR are trademarks of Single Step Games, LLC. All rights reserved. All other trademarks and trade names are property of their respective owners.";
	}
}