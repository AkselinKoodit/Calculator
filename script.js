let firstNumber = "";
let secondNumber = "";
let operation = "";
let result = 0;

/**
 * performs the called calculation
 * @return {void} overwrites updateDisplay and sets  calculation result to display
 */

function performCalculation() {
  const firstNumberAsNumber = Number(firstNumber);
  const secondNumberAsNumber = Number(secondNumber);
  if (operation === "+") {
    result = secondNumberAsNumber + firstNumberAsNumber;
  } else if (operation === "-") {
    result = secondNumberAsNumber - firstNumberAsNumber;
  } else if (operation === "*") {
    result = secondNumberAsNumber * firstNumberAsNumber;
  } else if (operation === "/") {
    result = secondNumberAsNumber / firstNumberAsNumber;
  } else {
    result = "Error: 80085";
  }
  document.getElementById("input").innerText = `${result}`;
  firstNumber = "";
  secondNumber = "";
  operator = "";
}

document.getElementById("equals").addEventListener("click", performCalculation);

document.querySelectorAll(".numbers > div").forEach((button) => {
  updateDisplay();
  button.addEventListener("click", function () {
    console.log(firstNumber);
    if (this.innerText === "." && firstNumber.indexOf(".") > -1) {
      return;
    } else {
      firstNumber += this.innerText;
    }
    updateDisplay();
  });
});

document.querySelectorAll(".operators > div").forEach((button) => {
  button.addEventListener("click", function () {
    console.log(this.innerText);
    secondNumber = firstNumber;
    firstNumber = "";
    switch (this.innerText) {
      case "+":
        operation = `+`;
        break;
      case "-":
        operation = "-";
        break;
      case "*":
        operation = "*";
        break;
      case "/":
        operation = "/";
        break;
      default:
        console.log("error");
        break;
    }
    updateDisplay();
  });
});

/**
 * updates the operation with user choice.
 *@return {void}
 */
function updateSelectedOperation() {
  console.log(this.innerTextt);
}

function updateSelectedNumber() {}

/**
 * updates what's shown on calculator display. Note that operator-button changes firstnumber to second and that's why second needs to be displayed before operator and "new first number"
 */
function updateDisplay() {
  document.getElementById(
    "input"
  ).innerText = `${secondNumber} ${operation} ${firstNumber}`;
}

document.getElementById("clear").addEventListener("click", reset);

function reset() {
  firstNumber = "";
  secondNumber = "";
  operation = "";
  updateDisplay();
}
