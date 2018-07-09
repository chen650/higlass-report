
globalVars.loadHg = function(viewConfigUrl) {
  $('#development-demo').empty();
  fetch(viewConfigUrl)
    .then(getJSON, handleErrors)
    .then(createHgv, handleErrors)
    .then(null, showError); // error handling
}

function handleErrors(response) {
  throw(response);
}

function showError(response) {
  console.log('Error: There was a problem loading the HiGlass viewer.');
  alert('Error: There was a problem loading the HiGlass viewer.');
}

// helper functions of things to do after fetching back the requested view config
function getJSON(response) {
  return response.json()
}

function createHgv(response) { 
  globalVars.hgv = globalVars.createHg( // creates the view
    document.getElementById('development-demo'),
    response,
    { bounded: true
    }
  );
}

globalVars.loadHg(globalVars.details.initialHg)


