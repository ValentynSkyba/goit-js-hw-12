import { getPhotos } from './js/pixabay-api.js';
import { renderImages, clearMarkup } from './js/render-function.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const gallery = document.querySelector('.js-gallery');
const formEl = document.querySelector('.js-search-form');
const loader = document.querySelector('.loader');
const loadMoreBtn = document.querySelector('.js-load-more');

const msgErr =
  'Sorry, there are no images matching your search query. Please try again!';
const msgEmpty = 'Error, empty field';
const msgEndLoad = "We're sorry, but you've reached the end of search results.";

let userWord;
let page;
const perPage = 15;
let lastPage;

formEl.addEventListener('submit', onSubmitBtn);
loadMoreBtn.addEventListener('click', onBtnClick);

async function onSubmitBtn(e) {
  e.preventDefault();
  showLoader();
  clearMarkup();
  loadMoreBtnHide();

  const userQuery = e.target.elements.data.value.trim().split(' ');
  const userWord = userQuery.filter(word => word).join('+');

  if (!userWord) {
    clearMarkup();
    showMessage(msgEmpty);
    hideLoader();
    return;
  }

  try {
    const res = await getPhotos(userWord, page, perPage);

    if (res.hits.length === 0) {
      hideLoader();
      showMessage(msgErr);
    } else {
      renderImages(res.hits);
      loadMoreBtnShow();
    }
    hideLoader();
    if (res.data.totalHits <= perPage) {
      hideLoadBtn();
    }
  } catch (error) {
    console.log(error);
    hideLoader();
  }

  e.target.reset();
}

async function onBtnClick() {
  page += 1;

  try {
    showLoader();
    const res = await getPhotos(userWord, page, perPage);
    const lastPage = Math.ceil(res.data.totalHits / perPage);

    renderImages(res.data.hits);

    if (page === lastPage) {
      loadMoreBtnHide();
      showMessage(msgEndLoad);
    }
    hideLoader();
  } catch (error) {
    console.log(error);
    hideLoader();
  }
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

function loadMoreBtnShow() {
  loadMoreBtn.classList.remove('is-hidden');
}
function loadMoreBtnHide() {
  loadMoreBtn.classList.add('is-hidden');
}
