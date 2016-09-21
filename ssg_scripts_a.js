// JavaScript - Single Step Games, LLC (c)2016
var i = -1;
var max = 4;
var aboutTimer = null;

function updateAboutImg()
{
	i++;
	if (i > max){i = 0;}
	setImage();
	if(i == max){
		aboutTimer = setTimeout(updateAboutImg,5000);
	} else {
		aboutTimer = setTimeout(updateAboutImg,1000);
	}
}

function setImage()
{
	document.getElementById("aboutImg"+i).className = "fullOpac";
	for (var j = 1; j <= max; j++)
	{
		if (j != i && document.getElementById("aboutImg"+j).className == "fullOpac")
		{
			document.getElementById("aboutImg"+j).className = "";
		}
	}
}

/*function prevImg()
{
	if (aboutTimer){clearTimeout(aboutTimer);}
	i -= 1;
	if (i < 1){i = max;}
	setImage();
	aboutTimer = setTimeout(updateAboutImg,8000);
}

function nextImg()
{
	if (aboutTimer){clearTimeout(aboutTimer);}
	i += 1;
	if (i > max){i = 1;}
	setImage();
	aboutTimer = setTimeout(updateAboutImg,8000);
}

function showArrows()
{
	aboutImgPrev.style.visibility = "visible";
	aboutImgNext.style.visibility = "visible";
}

function hideArrows()
{
	aboutImgPrev.style.visibility = "hidden";
	aboutImgNext.style.visibility = "hidden";
}*/