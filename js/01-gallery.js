import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryList = document.querySelector('.gallery');

function createGalleryItemsMarkup(items) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return ` <li class="gallery__item"> <a class="gallery__link" href = "${original}">
  <img "class=gallery__image" src = "${preview}" data-source = "${original}" alt = "${description}"/> </a>
  </li> 
`;
    })
    .join('');
}
galleryList.insertAdjacentHTML('beforeend', createGalleryItemsMarkup(galleryItems));
