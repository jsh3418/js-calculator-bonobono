import { handleNumberButtonClick } from "./handleNumberButtonClick.js";

const numberButtons = document.querySelectorAll(".button.number");

const initApp = () => {
  numberButtons.forEach((button) => {
    button.addEventListener("click", handleNumberButtonClick);
  });
};

initApp();
