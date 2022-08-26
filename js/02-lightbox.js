import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


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

galleryContainer.addEventListener('click', onImageClick);

function onImageClick(e) {
 const isImg = e.target.classList.contains('gallery__image');
 e.preventDefault();
  if(!isImg) {
    return;
  }
  

 new SimpleLightbox ('.galerry a', { })
}

