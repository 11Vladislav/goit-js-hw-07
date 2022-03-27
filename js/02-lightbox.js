import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector('.gallery');
galleryCreate(galleryItems, galleryEl);

new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 });

function galleryCreate(list, place) {
    const elMarkup = list.map(event => `<a class="gallery__item" href="${event.original}" onclick="event.preventDefault()">
        <img class="gallery__image" src="${event.preview}" alt="${event.description}" />
        </a>`).join('')
    place.innerHTML = elMarkup;
}