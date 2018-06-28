window.onload = function here() {
  
  globalVars.loadHg = function(viewConfigUrl) {
    $('#development-demo').empty();
    fetch(convertApiUrl(viewConfigUrl))
      .then(getJSON, handleErrors)
      .then(setViewConf, handleErrors)
      .then(createHgvAndSetZoom, handleErrors)
      .then(null, showError); // error handling
  }

  function convertApiUrl(input) { // convert user's view config link to an API endpoint
  if(typeof input === 'string') {
    return input.replace(/http:\/\/higlass.io\/app\/\?config=/, 'http://higlass.io/api/v1/viewconfs/?d='); 
  }
  return ''
  }

  function handleErrors(response) {
    throw(response);
  }

  function showError(response) {
    console.log('Error: Invalid view config ID given.')
    alert('Error: Invalid view config ID given. Please reload and enter a valid view config ID.')
  }

  // helper functions of things to do after fetching back the requested view config
  function getJSON(response) {
    return response.json()
  }

  function setViewConf(response) {
    globalVars.views = response.views.stableSort(); // sorts viewConf so user input viewNum corresponds to the right view
    return response;
  }

  function createHgvAndSetZoom(response) { 
    globalVars.hgv = globalVars.createHg( // creates the view
      document.getElementById('development-demo'),
      response,
      { bounded: true }
    );
  }

  globalVars.loadHg(globalVars.details.initialHg) // initialize first view

}