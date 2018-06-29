var numSections = Object.keys(globalVars.details.sections).length
for (var i=0; i<numSections; i++) { 
	var header = globalVars.details.sections[i].header
	var body = globalVars.details.sections[i].body
	sections.innerHTML += "<section class='step'><h1>" + header + "</h1><br><p>" + body + "</p></section>"
}
	