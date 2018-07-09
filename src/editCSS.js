$(document).ready(function (){ 
	document.getElementById('scrollingText').style.fontFamily = globalVars.details.fontFamily;
	document.getElementById('scrollingText').style.color = globalVars.details.fontColor;
	document.getElementById('scrollingText').style.fontSize = globalVars.details.fontSize/16 + "rem"; 
	document.body.style.background = globalVars.details.bgColor;
});