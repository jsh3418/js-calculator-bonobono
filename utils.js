import { store } from "./store.js";

export const updatePreviousKey = (key) => {
  store.previousKey = key;
};

export const clearDisplay = () => {
  const display = document.querySelector(".display-number");
  display.textContent = "0";
};
