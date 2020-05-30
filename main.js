let outfitCollection = [];
let garments = [];
let background = '';
const main = document.querySelector('main');

main.addEventListener('click', () => {
  if (event.target.id === 'save_outfit_button') {
    saveOutfit(event.target);
  }  else if (event.target.id === 'bear') {
    return;
  }  else if (event.target.id === 'name_outfit_input') {
    return;
  } else if (event.target.id) {
    toggleGarments(event.target.id, event.target);
    toggleActiveButton(event.target);
  } else if (event.target.classList.value === 'delete') {
    deleteOutfit(event);
  } else {
    console.log('something else is happening');
  }
});

function toggleGarments(selector, element) {
  const bearContainer = document.querySelector('.bear_container');
  let img;

  if ( element.dataset.active === 'false' ) {
    element.dataset.active = 'true';

    saveGarment(selector);

    bearContainer.insertAdjacentHTML('beforeend', `<img id=${selector}${"_identifier"} src=assets/${selector}${".png"}>`);

  } else {
    element.dataset.active = 'false'

    const targetElement = `${element.id}${'_identifier'}`;

    event.target.parentElement.parentElement.parentElement.childNodes[3].childNodes[1].childNodes.forEach(node => {
      if ( node.id === targetElement ) {
        img = node
      }
    });

    removeGarment(selector);
    img.remove();
  }
};

function toggleActiveButton(button) {
  const targetButton = document.getElementById(button.id);
  targetButton.classList.toggle('active_button');
};

function saveGarment(selector) {
  if (selector === 'park') {
    background = selector;
  } else if (selector === 'beach') {
    background = selector;
  } else if (selector === 'outerspace') {
    background = selector;
  } else {
    garments.push(selector);
  }
};

function removeGarment(selector) {
  if (selector === 'park') {
    background = '';
  } else if (selector === 'beach') {
    background = '';
  } else if (selector === 'outerspace') {
    background = '';
  } else {
    let filteredGarments = garments.filter(garment => garment !== selector);
    garments = filteredGarments;
  }
};

function saveOutfit(target) {
  let outfitName = target.parentElement.childNodes[1].value;
  let newOutfit = new Outfits(outfitName, garments, background);
  outfitCollection.push(newOutfit);

  const outfitsContainer = document.querySelector('.saved');
  outfitsContainer.insertAdjacentHTML('beforeend', 
  `<div class="saved_outfit" data-id=${newOutfit.id}>
    <h3>${outfitName}</h3>
    <button class="delete">Delete</button>
  <div/>`)
};

function deleteOutfit(event) {
  event.target.closest('.delete').parentElement.remove();
}
