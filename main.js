const outfitCollection = [];
const garmentCollection = [];
const main = document.querySelector('main');

main.addEventListener('click', () => {
  if (event.target.id) {
    $(event.target.id, event.target);
  } else if (event.target.class) {
    $(event.target.class, event.target);
  } else {
    return;
  }
});

function $(selector, element) {
  const bearContainer = document.querySelector('.bear_container');
  let img;

  if ( element.dataset.active === 'false' ) {
    element.dataset.active = 'true';

    bearContainer.insertAdjacentHTML('beforeend', `<img id=${selector}${"_identifier"} src=assets/${selector}${".png"}>`); 
  } else {
    element.dataset.active = 'false'

    const targetElement = `${element.id}${'_identifier'}`;

    event.target.parentElement.parentElement.parentElement.childNodes[3].childNodes[1].childNodes.forEach(node => {
      if ( node.id === targetElement ) {
        img = node
      }
    })

    img.remove();
  } 
}
