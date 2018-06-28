var numSections = Object.keys(globalVars.details.sections).length
for (var i=0; i<numSections; i++) { 
	if (globalVars.details.sections[i].type === "header") {
		var txt = "<h1>" + globalVars.details.sections[i].text + "</h1>"
	} else {
		var txt = globalVars.details.sections[i].text
	}
	sections.innerHTML += "<section class='step'>" + txt + "</section>"
}