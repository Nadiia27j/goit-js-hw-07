import { galleryItems } from './gallery-items.js';
// Change code below this line



// 1. Створення і рендер розмітки


const galleryContainer = document.querySelector('.gallery');
const galleryImg = createGalleryImg(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", galleryImg);

console.log(createGalleryImg(galleryItems));

function createGalleryImg(galleryItems) {
    return galleryItems.map(({preview, original, description}) => {
        return `
        <div class="gallery__item">
           <a class="gallery__link" href="${original}">
           <img
           class="gallery__image"
           src="${preview}"
           data-source="${original}"
           alt="${description}"
           />
           </a>
        </div>
      `;
    }).join("");
   
};

