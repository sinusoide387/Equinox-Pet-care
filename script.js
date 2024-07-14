const servicesButton = document.querySelector("#servicesButton");
const dogServices = document.querySelector("#dog__services"); //popUp para dog services
const galleryPopup = document.querySelector("#gallery__modal"); //popUp de la galleria
// const closeButtonModalServices = dogServices.querySelector("#close__button");

/// usefull functions ///
function open(element) {
  element.classList.add("modal__opened");
}

function close(element) {
  element.classList.remove("modal__opened");
}

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

// closeButtonModalServices.addEventListener("click", () => {
//   close();
// });

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
console.log(aboutUsSection);
const textArea = aboutUsSection.querySelector(".about__us_text-area");
console.log(textArea);
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

////// gallery input modal //////

galleryPopup.classList.add("modal__opened");

// const closeButtonModalGallery = galleryPopup.querySelector("#close__button");
// console.log(closeButtonModalGallery);
// closeButtonModalGallery.addEventListener("click", () => {
//   close();
// });
