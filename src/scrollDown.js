globalVars.activate = function(json) { 
  var activateFunctions = [];

  for (var i=0; i<json.textSections.length; i++) {
    activateFunctions.push( function() {});
  }

  for (var mNum in json.mediaSections) {
    const media = json.mediaSections[mNum];
    const mediaParams = media.activateParams;
    switch (media.activate) {
      case "reload":
        activateFunctions[media.startPos] = function () {
          if(typeof globalVars.hgv !== 'undefined') {
            globalVars.addHg();
            globalVars.loadViewConf(mediaParams.url);
          }
        }
        break;
      case "zoom":
        activateFunctions[media.startPos] = function () {
          if(typeof globalVars.hgv !== 'undefined') {
            globalVars.addHg();
            for(var i=0; i<Object.keys(mediaParams).length; i++) {
              globalVars.hgv.zoomTo(mediaParams[i][0], mediaParams[i][1], mediaParams[i][2], mediaParams[i][3], mediaParams[i][4], 0);
            }
          }
        }      
        break;
      case "none":
        activateFunctions[media.startPos] = function () {
          globalVars.addHg();
        }  
        break;   
      case "img":
        activateFunctions[media.startPos] = function () { globalVars.addImg(mediaParams) };
        break;
      case "vid":
        activateFunctions[media.startPos] = function () { globalVars.addVid(mediaParams) };
        break;
      case "yt":
        activateFunctions[media.startPos] = function () { globalVars.addYt(mediaParams) };
        break;
      case "text":
        activateFunctions[media.startPos] = function () { globalVars.addText(mediaParams) };
        break;
      default: 
        break;
    } 
  }



  return activateFunctions;
}