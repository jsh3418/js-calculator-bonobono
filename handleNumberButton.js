import { store } from "./store.js";
import { clearDisplay, updatePreviousKey } from "./utils.js";

const display = document.querySelector(".display-number");

export const handleNumberButton = (event) => {
  const number = event.target.textContent;
  if (store.previousKey === "operator") {
    clearDisplay();
    addNumber(number);
    updatePreviousKey("number");
    return;
  }
  if (store.previousKey === null || store.previousKey === "number") {
    addNumber(number);
    updatePreviousKey("number");
    return;
  }
};

const addNumber = (number) => {
  if (!hasDisplayValue()) {
    display.textContent = number;
    return;
  }
  if (hasDisplayValue()) {
    display.textContent += number;
    return;
  }
};

const hasDisplayValue = () => display.textContent !== "0";
