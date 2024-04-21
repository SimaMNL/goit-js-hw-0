import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

function renderGallery() {
  const galleryList = document.querySelector(".gallery");

  galleryItems.forEach((galleryItems) => {
    const listItem = document.createElement("li");
    listItem.classList.add("gallery__item");

    const link = document.createElement("a");
    link.classList.add("gallery__link");
    link.href = galleryItems.original;

    const image = document.createElement("img");
    image.classList.add("gallery__image");
    image.src = galleryItems.preview;
    image.dataset.source = galleryItems.original;
    image.alt = galleryItems.description;

    link.appendChild(image);
    listItem.appendChild(link);
    galleryList.appendChild(listItem);
  });
}

// Apelarea funcției pentru randarea galeriei la încărcarea paginii
document.addEventListener("DOMContentLoaded", renderGallery);

// Funcție pentru deschiderea lightbox-ului cu imaginea mare
function openLightbox(source) {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");

  lightboxImg.src = source;
  lightbox.style.display = "block";
}

// Funcție pentru închiderea lightbox-ului
function closeLightbox() {
  const lightbox = document.getElementById("lightbox");
  lightbox.style.display = "none";
}

// Delegarea evenimentului de click pe galerie
document.querySelector(".gallery").addEventListener("click", function (event) {
  event.preventDefault(); // Previne comportamentul implicit de redirecționare a link-ului

  if (event.target.tagName === "IMG") {
    const source = event.target.dataset.source;
    openLightbox(source);
  }
});
