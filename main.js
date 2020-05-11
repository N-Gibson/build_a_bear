let outfitCollection = [];
let garmentCollection = [];
let backgroundCollection = [];
const main = document.querySelector('main');

main.addEventListener('click', () => {
  if ( event.target.id === 'save_outfit_button' ) {
    console.log(event);
    // saveGarment()
  } else if ( event.target.id === 'bear' ) {
    return;
  } else if ( event.target.id ) {
    toggleGarments(event.target.id, event.target);
    toggleActiveButton(event.target);
  } else {
    return;
  }
});

function toggleGarments(selector, element) {
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
    });

    img.remove();
  }
};

function toggleActiveButton(button) {
  const targetButton = document.getElementById(button.id);
  targetButton.classList.toggle('active_button');
}

function saveGarment() {

}
