// JavaScript - Single Step Games, LLC (c)2023

function getFooterDate(footerText,originYear,includePS)
{
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