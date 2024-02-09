const allButtons = document.querySelectorAll(".bouton");
const form = document.querySelector("form");
const display = document.querySelector(".resultat");
const egal = document.querySelector(".egal");
const supprimer = document.querySelector(".supprimer");

allButtons.forEach((button) => {
  button.addEventListener("click", () => {
    display.textContent += button.value;
  });
});

egal.addEventListener("click", () => {
  display.textContent = eval(display.textContent);
});

supprimer.addEventListener("click", () => {
  display.textContent = "";
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
});
