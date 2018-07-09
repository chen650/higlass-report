// initialize for number of sections
for (var sNum in globalVars.details.sections) { 
	sections.innerHTML += "<section class='step'>" + globalVars.details.sections[sNum].text + "</section>"; 
	var activate = globalVars.details.sections[sNum].activate;
	var activateParams = globalVars.details.sections[sNum].activateParams;
	switch (activate) {
		case "reload":
			var loadParams = activateParams;
			globalVars.activateFunctions.push( function() {
				globalVars.loadHg(loadParams);
			});
			break;
		case "zoom":
			var zoomParams = activateParams;
			globalVars.activateFunctions.push( function() {
				for(var i=0; i<Object.keys(zoomParams).length; i++) {
					globalVars.hgv.zoomTo(zoomParams[i][0], zoomParams[i][1], zoomParams[i][2], zoomParams[i][3], zoomParams[i][4], 300);
				}
			});
			break
		default:
			globalVars.activateFunctions.push( function() {});
	}
}

scrollerDisplay(d3.select('#graphic'), 'step', globalVars.activateFunctions)