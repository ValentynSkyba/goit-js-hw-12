import { getPhotos } from './js/pixabay-api.js';
import { renderImages, clearMarkup } from './js/render-function.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const formEl = document.querySelector('.js-search-form');
const loader = document.querySelector('.loader');
const msgErr =
  'Sorry, there are no images matching your search query. Please try again!';
const msgEmpty = 'Error, empty field';

formEl.addEventListener('submit', onSubmitBtn);

function onSubmitBtn(e) {
  e.preventDefault();
  showLoader();
  clearMarkup();

  const userQuery = e.target.elements.data.value.trim().split(' ');
  const userWord = userQuery.filter(word => word).join('+');

  if (!userWord) {
    clearMarkup();
    showMessage(msgEmpty);
    hideLoader();
    return;
  }
  getPhotos(userWord)
    .then(res => {
      if (res.hits.length === 0) {
        hideLoader();
        showMessage(msgErr);
      } else {
        renderImages(res.hits);
      }
    })
    .catch(console.log)
    .finally(() => {
      hideLoader();
    });

  e.target.reset();
}

function showLoader(container) {
  loader.classList.remove('is-hide');
}

function hideLoader(container) {
  loader.classList.add('is-hide');
}
function showMessage(message) {
  const msgOptions = {
    message,
    messageSize: '16px',
    messageLineHeight: '24px',
    messageColor: '#fff',

    backgroundColor: '#EF4040',
    progressBarColor: '#B51B1B',

    theme: 'dark',
    position: 'topRight',
    class: 'message',
  };
  iziToast.show(msgOptions);
}
