var focused_elem = null;

/*Switch Content
  Show content when use click the block
*/
function switchContent(text, location) {
  document.getElementById(location).innerHTML = text;
}

function addClass(cls, location) {
  var elem = document.getElementById(location);
  if (focused_elem != null) {
    focused_elem.classList.remove(cls);
  }
  elem.classList.add(cls);
  focused_elem = elem;
}

function addClasses(clses, location) {
  var elem = document.getElementById(location);
  if (focused_elem != null) {
    clses.forEach(cls => {
      focused_elem.classList.remove(cls);
    });
  }
  clses.forEach(cls => {
    elem.classList.add(cls);
  });
  focused_elem = elem;
}

function directTo(url) {
  window.open(url);
}

function gotoBlock(location){
  document.getElementById(location).scrollIntoView();
}