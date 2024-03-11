import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

const gallery = document.querySelector('.js-gallery');

export function renderImages(arr) {
  const markup = renderMarkup(arr);
  gallery.innerHTML = markup;
  lightbox.refresh();
}

function renderMarkup(arr) {
  return arr.map(createImageCard).join('\n');
}

function createImageCard({
  webformatURL,
  largeImageURL,
  tags,
  likes,
  views,
  comments,
  downloads,
}) {
  return ` <li class="gallery-item">
      <a href="${largeImageURL}" class="gallery-link">
        <img src="${webformatURL}" alt="${tags}" class="gallery-image" />
        <ul class="description">
          <li class="desc-item">
            <p class="des-p">Likes</p> ${likes}
          </li>
          <li class="desc-item">
            <p class="des-p">Views</p> ${views}
          </li>
          <li class="desc-item">
            <p class="des-p">Comments</p> ${comments}
          </li>
          <li class="desc-item">
            <p class="des-p">Downloads</p> ${downloads}
          </li>
        </ul>
      </a>
    </li>`;
}

export function clearMarkup() {
  gallery.innerHTML = '';
}
