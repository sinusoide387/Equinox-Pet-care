const servicesButton = document.querySelector("#servicesButton");
const dogServices = document.querySelector("#dog__services");

servicesButton.addEventListener("click", () => {
  dogServices.classList.add("services__opened");
});

