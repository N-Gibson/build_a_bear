const outfitCollection = [];
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
  const pngName = selector.split(' ');

  console.log(pngName);

  // bearContainer.insertAdjacentHTML('beforeend', `<img src=${}>`)
}
