var activateFunctions = globalVars.activate(globalVars.details);
var reverseFunctions = globalVars.reverse(globalVars.details);

for (var tNum in globalVars.details.textSections) { 
  sections.innerHTML += "<section class='step'>" + globalVars.details.textSections[tNum] + "</section>"; 
}

scrollerDisplay(d3.select('#graphic'), 'step', activateFunctions, reverseFunctions)

globalVars.addImg = function(url) {
  document.getElementById('fig').style.display = 'none';
  document.getElementById('img').style.display = 'block';
  document.getElementById('hg').style.display = 'none';
  document.getElementById('vid').style.display = 'none';
  document.getElementById('yt').style.display = 'none';
  img.innerHTML = "<img src=\"" + url + "\">";
}

globalVars.addYt = function(id) {
  document.getElementById('fig').style.display = 'none';
  document.getElementById('img').style.display = 'none';
  document.getElementById('hg').style.display = 'none';
  document.getElementById('vid').style.display = 'none';
  document.getElementById('yt').style.display = 'block';
  var url = 'https://www.youtube.com/embed/' + id;
  $('#yt').attr('src',url);
}

globalVars.addVid = function(url) {
  document.getElementById('fig').style.display = 'none';
  document.getElementById('img').style.display = 'none';
  document.getElementById('hg').style.display = 'none';
  document.getElementById('vid').style.display = 'block';
  document.getElementById('yt').style.display = 'none';
  $('#vid').attr('src',url);
}

globalVars.addFig = function(arr) {
  document.getElementById('fig').style.display = 'block';
  document.getElementById('img').style.display = 'none';
  document.getElementById('hg').style.display = 'none';
  document.getElementById('vid').style.display = 'none';
  document.getElementById('yt').style.display = 'none';
  fig.innerHTML = "<img src=\"" + arr[0] + "\">" + arr[1];
}

globalVars.addHg = function() {
  document.getElementById('fig').style.display = 'none';
  document.getElementById('img').style.display = 'none';
  document.getElementById('hg').style.display = 'inline-block';
  document.getElementById('vid').style.display = 'none';
  document.getElementById('yt').style.display = 'none';
}