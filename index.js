let display = document.getElementById("display");
let currentInput = "";

function appendValue(value) {
  if (currentInput === "0" && value !== ".") {
    currentInput = value; // Replace 0 with the new value
  } else {
    currentInput += value;
  }
   display.textContent = formatNumber(currentInput.replace(/,/g, '')); // Format number with commas

  display.textContent = currentInput;
}


function deleteLast() {
  currentInput = currentInput.slice(0, -1); // Remove the last character
  display.textContent = currentInput || "0";
}

function calculate() {
  try {
    currentInput = eval(currentInput).toString(); // Evaluate the expression
    display.textContent = currentInput;
  } catch (error) {
    display.textContent = "Error";
    currentInput = "";
  }
}

function clearDisplay() {
  currentInput = "";
  display.textContent = "0";
}

// 1/x (Reciprocal)
function reciprocal() {
  if (currentInput !== "" && Number(currentInput) !== 0) {
    currentInput = (1 / Number(currentInput)).toString(); // Calculate reciprocal
    updateDisplay();
  } else {
    alert("Cannot divide by zero or empty input!");
  }
}

// x² (Square)
function square() {
  if (currentInput !== "") {
    currentInput = Math.pow(Number(currentInput), 2).toString(); // Calculate square
    updateDisplay();
  }
}

// 2√x (Two times square root)

function twoSqrtX() {
  if (currentInput !== "") {
    let number = parseFloat(currentInput);
    currentInput = (2 * Math.sqrt(number)).toString();
    display.textContent = currentInput;
  }
}


function changeSign() {
  if (currentInput !== "") {
    currentInput = (parseFloat(currentInput) * -1).toString();
    display.textContent = currentInput;
  }
}

function formatNumber(num) {
    return new
        Intl.NumberFormat().format(num);
}


function formatNumber(num) {
    return new Intl.NumberFormat('en-UK', {
        minimumFractionDigits: 2,
        maximumFractionDigits:2,
      }).format(num);
}
