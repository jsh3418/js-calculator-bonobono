import { store } from "./store.js";
import { clearDisplay } from "./utils.js";

export const handleAllClearButton = () => {
  resetStore();
  clearDisplay();
};

const resetStore = () => {
  store.firstNumber = null;
  store.operator = null;
  store.secondNumber = null;
  store.previousKey = null;
};
