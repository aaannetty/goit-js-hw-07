import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');
const lightbox = document.querySelector('.lightbox');
const lightboxImage = document.querySelector('.lightbox__image');

function createGalleryItemsMarkup(items) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return ` <li class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${original}"
          data-source="${original}"
          alt="Image description"
        />
      </a>
    </li>
`;
    })
    .join('');
}
gallery.insertAdjacentHTML('beforeend', createGalleryItemsMarkup(galleryItems));

gallery.addEventListener('click', onGalleryClick);
function onGalleryClick(evt) {
  evt.preventDefault();
  window.addEventListener('keydown', onEscClick);
  const target = evt.target;

  if (target.nodeName !== 'IMG') {
    return;
  }

  const instance = basicLightbox.create(
    `<img src="${target.dataset.source}" width="800" height="600"/>`
  );
  instance.show();

  function onEscClick(evt) {
    if (evt.code !== 'Escape') {
      return;
    }
    instance.close();
  }
}
