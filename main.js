const outfitCollection = [];
const garmentCollection = [];
const main = document.querySelector('main');

main.addEventListener('click', () => {
  if (event.target.id) {
    $(event.target.id);
  } else if (event.target.class) {
    $(event.target.class);
  } else {
    return;
  }
});

function $(selector) {
  const bearContainer = document.querySelector('.bear_container');

  bearContainer.insertAdjacentHTML('beforeend', `<img id=${selector}${"_identifier"} src=assets/${selector}${".png"}>`);  
}
