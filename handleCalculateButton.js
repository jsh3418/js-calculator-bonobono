import { addStoreNumber } from "./handleOperatorButton.js";
import { store } from "./store.js";
import { updatePreviousKey } from "./utils.js";

const display = document.querySelector(".display-number");

export const handleCalculateButton = () => {
  addStoreNumber(display.textContent);
  calculate();
  displayCalculateResult();
  updatePreviousKey("calculate");
};

const calculate = () => {
  if (store.operator === "+") {
    store.firstNumber = Number(store.firstNumber) + Number(store.secondNumber);
    return;
  }
  if (store.operator === "-") {
    store.firstNumber = Number(store.firstNumber) - Number(store.secondNumber);
    return;
  }
  if (store.operator === "X") {
    store.firstNumber = Number(store.firstNumber) * Number(store.secondNumber);
    return;
  }
  if (store.operator === "÷") {
    store.firstNumber = Number(store.firstNumber) / Number(store.secondNumber);
    return;
  }
};

const displayCalculateResult = () => {
  display.textContent = store.firstNumber;
};
