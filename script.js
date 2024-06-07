const servicesButton = document.querySelector("#servicesButton");
const dogServices = document.querySelector("#dog__services");
const closeButtonModal = dogServices.querySelector("#close__button");

servicesButton.addEventListener("click", () => {
  dogServices.classList.add("services__opened");
});

closeButtonModal.addEventListener("click", () => {
  dogServices.classList.remove("services__opened");
});
