import { handleAllClearButton } from "./handleAllClearButton.js";
import { handleCalculateButton } from "./handleCalculateButton.js";
import { handleNumberButton } from "./handleNumberButton.js";
import { handleOperatorButton } from "./handleOperatorButton.js";

const numberButtons = document.querySelectorAll(".button.number");
const operatorButtons = document.querySelectorAll(".button.operator");
const calculateButton = document.querySelector("#calculate");
const allClearButton = document.querySelector("#all-clear");

const initApp = () => {
  numberButtons.forEach((button) => {
    button.addEventListener("click", handleNumberButton);
  });
  operatorButtons.forEach((button) => {
    button.addEventListener("click", handleOperatorButton);
  });
  calculateButton.addEventListener("click", handleCalculateButton);
  allClearButton.addEventListener("click", handleAllClearButton);
};

initApp();
