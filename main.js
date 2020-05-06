const outfitCollection = [];

function $(selector) {
  let selectorType = selector.split('').shift(); // grab the # or . from the selector
  let selectorName = selector.substr(1); // grab the ID or class name from the selector
  let DOMElement = selectDOMElement(); // select the DOM element
  function selectDOMElement() {
    if (selectorType === '#') {
      return document.getElementById(selectorName);
    } else {
      return document.querySelectorAll(selectorName);
    }
  }
  return {
    DOMElement
  }
}
