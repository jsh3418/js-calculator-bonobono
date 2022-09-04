const display = document.querySelector(".display-number");
const numberButtons = document.querySelectorAll(".button.number");

const initApp = () => {
  numberButtons.forEach((button) => {
    button.addEventListener("click", handleNumberButtonClick);
  });
};

const handleNumberButtonClick = (event) => {
  const number = event.target.textContent;
  addNumber(number);
};

const addNumber = (number) => {
  display.textContent = number;
};

initApp();
