import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');
const lightbox = document.querySelector('.lightbox');
const lightboxImage = document.querySelector('.lightbox__image');

function createGalleryItemsMarkup(items) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return ` <li class="gallery__item">
      <a class="gallery__link" href="${original}">
         <img class="gallery__image" src="${original}" alt="Image description" />
      </a>
   </li>
`;
    })
    .join('');
}
gallery.insertAdjacentHTML('beforeend', createGalleryItemsMarkup(galleryItems));

new SimpleLightbox('.gallery a', {
  captions: true,
  captionSelector: '.gallery__image',
  captionType: 'attr',
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});
