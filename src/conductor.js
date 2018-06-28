globalVars.activateFunctions = [] 
globalVars.updateFunctions = []

// initialize for number of sections
for (var sNum in globalVars.details.sections) { 
	var activate = globalVars.details.sections[sNum].activate
	var activateParams = globalVars.details.sections[sNum].activateParams
	switch (activate) {
		case "invisible":
			globalVars.activateFunctions.push( function() {
				$('#development-demo').css("visibility",'hidden');
			});
			break
		case "visible":
			globalVars.activateFunctions.push( function() {
				$('#development-demo').css("visibility",'visible');
			});
			break
		case "zoom":
			var zoomParams = activateParams
			globalVars.activateFunctions.push( function() {
				if(typeof globalVars.hgv !== 'undefined' && globalVars.views.length >= zoomParams[0]) {
					globalVars.hgv.zoomTo(
						globalVars.views[zoomParams[0]-1].uid, zoomParams[1][0],zoomParams[1][1],
						zoomParams[1][2],zoomParams[1][3], zoomParams[2]); 
				}
			});
			break
		case "load":
			var loadParams = activateParams
			globalVars.activateFunctions.push( function() {
				globalVars.loadHg(loadParams)
			});
			break
		default:
			globalVars.activateFunctions.push( function() {});
	}
	
	var update = globalVars.details.sections[sNum].update
	var updateParams = globalVars.details.sections[sNum].updateParams
	switch(update) {
		default: globalVars.updateFunctions.push( function(progress) {}); ////
	}
}

scrollerDisplay(d3.select('#graphic'), 'step', globalVars.activateFunctions, globalVars.updateFunctions)