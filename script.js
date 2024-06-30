const servicesButton = document.querySelector("#servicesButton");
const dogServices = document.querySelector("#dog__services");
const closeButtonModal = dogServices.querySelector("#close__button");

servicesButton.addEventListener("click", () => {
  dogServices.classList.add("modal__opened");
});

closeButtonModal.addEventListener("click", () => {
  dogServices.classList.remove("modal__opened");
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

const galleryPopup = document.querySelector("#gallery__modal");
galleryPopup.classList.add("modal__opened");
