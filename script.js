const servicesButton = document.querySelector("#servicesButton");
const dogServices = document.querySelector("#dog__services"); //popUp para dog services
const galleryPopup = document.querySelector("#gallery__modal"); //popUp de la galleria
const pictureEditButton = document.querySelectorAll(".gallery__item_button");
const galleryInput = document.querySelector("#gallery__modal_input");
console.log(galleryInput);

//primeros pasos en la funcionalidad de la galeria //

function handleSubmit(inputUrl) {
  //reparar esta funcion para que aparezca en la pantalla
  "use strict";
  const newImage = document.createElement("img");
  newImage.classList.add("gallery__item_picture");
  newImage.src = inputUrl.value;
  renderImages(newImage.src);
}

function getRandom(max) {
  //esta es la funcionalidad para que el valor sea aleatorio o random
  return Math.floor(Math.random() * max);
}

function renderImages(newSrc) {
  // funcion para render las imagenes
  const images = document.querySelectorAll(".gallery__item_picture"); //selecciono todas las imagenes con un mismo selector
  const randomIndex = getRandom(images.length); //aplico la funcion aleatoria con la propiedad length que toma el index de cada una
  images[randomIndex].src = newSrc; // le cambio el atributo con el prop (newSRC)
}

const pictureUrl = galleryInput.value;

// button for submit//
const gallerySubmitButton = document.querySelector("#gallery__submit-button");

gallerySubmitButton.addEventListener("click", (e) => {
  e.preventDefault();
  handleSubmit(galleryInput);// la funcion de submit tiene incorporada la de render 
  close(galleryPopup);
});

/// usefull functions ///
function open(element) {
  element.classList.add("modal__opened");
  galleryInput.value = "";
}

function close(element) {
  element.classList.remove("modal__opened");
}

//// funcionalidad para boton de edit de la imagen ///////
pictureEditButton.forEach((element) => {
  element.addEventListener("click", () => {
    open(galleryPopup);
  });
});

const closeButtonModal = document.querySelectorAll(".modal__close");
closeButtonModal.forEach((element) => {
  element.addEventListener("click", () => {
    close(dogServices);
    close(galleryPopup);
  });
});

servicesButton.addEventListener("click", () => {
  open(dogServices);
});

document.onkeydown = function (event) {
  if (event.key == "Escape") {
    dogServices.classList.remove("modal__opened");
  }
};

document.addEventListener("click", (event) => {
  if (!dogServices.contains(event.target) && event.target !== servicesButton) {
    // si es el opuesto al dogService que continene el target y el event target es opuesto al serviceButton, entonces remueve la clase
    dogServices.classList.remove("modal__opened");
  }
});

///////////////////////////////////////////////////////////////

const aboutUsText = {
  description: "We are a company fully dedicated to pets since 1992.",
};

const aboutUsSection = document.querySelector("#about__Us_section");

const textArea = aboutUsSection.querySelector(".about__us_text-area");

textArea.textContent = aboutUsText.description;

////// about us button functionality /////

function scrollToSection(id) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: `smooth` });
  }
}

const aboutUsButton = document.querySelector("#nav__about-us");

aboutUsButton.addEventListener("click", function () {
  // esta es una funcionalidad que me permite hacer scroll hasta el div

  scrollToSection("about__Us_section");
});
