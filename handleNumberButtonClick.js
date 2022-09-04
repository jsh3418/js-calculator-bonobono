const display = document.querySelector(".display-number");

export const handleNumberButtonClick = (event) => {
  const number = event.target.textContent;
  addNumber(number);
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
