import { store } from "./store.js";
import { updatePreviousKey } from "./utils.js";

const display = document.querySelector(".display-number");

export const handleOperatorButton = (event) => {
  const operator = event.target.textContent;
  addOperator(operator);
  addStoreNumber(display.textContent);
  updatePreviousKey("operator");
};

const addOperator = (operator) => {
  store.operator = operator;
};

export const addStoreNumber = (value) => {
  if (store.firstNumber === null) {
    store.firstNumber = value;
    return;
  }
  if (store.firstNumber !== null && store.operator !== null) {
    store.secondNumber = value;
    return;
  }
};
