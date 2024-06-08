const servicesButton = document.querySelector("#servicesButton");
const dogServices = document.querySelector("#dog__services");
const closeButtonModal = dogServices.querySelector("#close__button");

servicesButton.addEventListener("click", () => {
  dogServices.classList.add("services__opened");
});

closeButtonModal.addEventListener("click", () => {
  dogServices.classList.remove("services__opened");
});

///////////////////////////////////////////////////////////////

const aboutUsText = {
  description: "We are a company fully dedicated to pets since 1992.",
};

const aboutUsSection = document.querySelector("#info__section_about-us");
console.log(aboutUsSection);
const textArea = aboutUsSection.querySelector(".about__us_text-area");
console.log(textArea);
textArea.textContent = aboutUsText.description;
