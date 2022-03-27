import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector('.gallery');
galleryEl.addEventListener('click', clickPic);
galleryCreate(galleryItems, galleryEl);

function clickPic(event) {
     if (event.target.nodeName !== 'IMG') {
    return;
     }
     const frame = basicLightbox.create(
    `<img src="${event.target.dataset.source}" width="800" height="600">`
  );
  frame.show();
    window.addEventListener('keydown', event => (
        event.code === 'Escape' ? frame.close() : event));
}
function galleryCreate(list, place) {
  const elMarkup = list.map( event =>
        `<div class="gallery__item">
            <a class="gallery__link" href="${event.original}">
                <img
                class="gallery__image"
                src="${event.preview}"
                data-source="${event.original}"
                alt="${event.description}"
                onclick='event.preventDefault()'
                />
            </a>
        </div>`
    )
    .join('');

  place.innerHTML = elMarkup;
}