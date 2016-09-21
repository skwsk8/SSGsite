// JavaScript - Single Step Games, LLC (c)2016

// Menu Functions
var delayTimerDuration=300;
var delayTimer=0;
var menuDropDown=0;

function showMenuDropDown(menuId)
{
	cancelMenuHideDelayTimer();
	if (menuDropDown) menuDropDown.style.visibility="hidden";
	menuDropDown=document.getElementById(menuId);
	menuDropDown.style.visibility="visible";
}

function hideMenuDropDown()
{
	if (menuDropDown) menuDropDown.style.visibility="hidden";
}

function startMenuHideDelayTimer()
{
	delayTimer=window.setTimeout(hideMenuDropDown,delayTimerDuration);
}

function cancelMenuHideDelayTimer()
{
	if (delayTimer)
	{
		window.clearTimeout(delayTimer);
		delayTimer=null;
	}
}

// Load Videos for non-mobile
function loadVideos()
{
	if (screen.width >= 800)
	{
		document.getElementById("vidEM2").src="https://www.youtube.com/embed/0MyK8I3b-fA";
		document.getElementById("vidDCUO").src="https://www.youtube.com/embed/ywt5SqXxpSI";
		document.getElementById("vidCubis").src="https://www.youtube.com/embed/pVLC2CicoEg";
		document.getElementById("vidPP").src="https://www.youtube.com/embed/WxKuZTBQLwI";
		document.getElementById("vidWAW").src="https://www.youtube.com/embed/G0_-Oe6yhco";
		document.getElementById("vidGW").src="https://www.youtube.com/embed/gPD_wC70OY0";
		document.getElementById("vidNWN").src="https://www.youtube.com/embed/ashgP4YMdJw";
		document.getElementById("vidCOD4").src="https://www.youtube.com/embed/33wsPV6dYHI";
		document.getElementById("vidRR").src="https://www.youtube.com/embed/ErGoQz3c3hU";
	}
}

// Footer Function
function getFooterDate(footerText,originYear)
{
	var footerText=document.getElementById(footerText);
	var d = new Date();
	if (d.getFullYear() == originYear)
	{
	footerText.innerHTML="Copyright &copy; "+originYear+" Single Step Games, LLC. All rights reserved.";
	}
	else
	{
	footerText.innerHTML="Copyright &copy; "+originYear+"-"+d.getFullYear()+" Single Step Games, LLC. All rights reserved.";
	}
}