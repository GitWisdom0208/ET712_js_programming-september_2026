/*
Name: Sage Sandiford
Course: JavaScript Programming
Lab Experiment: Simple Calculator and AI Assistance
Date: 10/18/2026
*/

console.log("------ Lab Exercise 6: Simple Calculator ------");

// Collect the input fields and result element
const num1Input = document.querySelector("#num1");
const num2Input = document.querySelector("#num2");
const resultDisplay = document.querySelector("#result");

// the four operation buttons
const addBtn = document.querySelector("#addBtn");
const subtractBtn = document.querySelector("#subtractBtn");
const multiplyBtn = document.querySelector("#multiplyBtn");
const divideBtn = document.querySelector("#divideBtn");

const buttons = [addBtn, subtractBtn, multiplyBtn, divideBtn];

// Colors used for the mouse events
const normalColor = "steelblue";
const hoverColor = "darkorange";

// make a calculation based on the selected operation
function calculate(operation) {
    // 1. Check whether both input fields contain values
    if (num1Input.value === "" || num2Input.value === "") {
        resultDisplay.textContent = "Error: Please enter both numbers.";
        return;
    }

    // 2. Convert the values to numbers
    const num1 = Number(num1Input.value);
    const num2 = Number(num2Input.value);

    let result;

    // 3. Perform a calculation 
    switch (operation) {
        case "add":
            result = num1 + num2;
            break;
        case "subtract":
            result = num1 - num2;
            break;
        case "multiply":
            result = num1 * num2;
            break;
        case "divide":
            // 5. Handle division by zero
            if (num2 === 0) {
                resultDisplay.textContent = "Error: Cannot divide by zero.";
                return;
            }
            result = num1 / num2;
            break;
    }

    // 4. Display the result 
    resultDisplay.textContent = "Result: " + result;
}

// event listeners 
addBtn.addEventListener("click", function () {
    calculate("add");
});
subtractBtn.addEventListener("click", function () {
    calculate("subtract");
});
multiplyBtn.addEventListener("click", function () {
    calculate("multiply");
});
divideBtn.addEventListener("click", function () {
    calculate("divide");
});

// Add mouseover event listeners to change button colors
buttons.forEach(function (btn) {
    btn.addEventListener("mouseover", function () {
        btn.style.backgroundColor = hoverColor;
    });
});

// Add mouseout event listeners to restore button colors
buttons.forEach(function (btn) {
    btn.addEventListener("mouseout", function () {
        btn.style.backgroundColor = normalColor;
    });
});

/*
addEventListener registers a function (a listener) that the browser calls whenever the named event happens on that element.) 
Input values are always strings like whole numbers, decimals, or even text. The Number() function converts a string to a number. 
value content works for input fields, textareas, and select elements.textContent is a property of an element that represents the text of an element and its descendants.
one function for 4 operations can look like:<input type="number" id="a">
<input type="number" id="b">
<button data-op="+">+</button>
<button data-op="-">-</button>
<button data-op="*">×</button>
<button data-op="/">÷</button>
<p id="result"></p>  
we can change the button using:const btn = document.getElementById("myBtn");

btn.addEventListener("mouseover", () => {
  btn.style.backgroundColor = "lightgreen";
});

btn.addEventListener("mouseout", () => {
  btn.style.backgroundColor = ""; // clears the inline style, restoring the original color
}); 
to prevent division by zero, we can check if the second number is zero before performing the division operation. If it is, we can display an error message instead of attempting the division. 
function getNumber(id) {
  const raw = document.getElementById(id).value.trim();
  if (raw === "") return null;          // empty field
  const n = Number(raw);
  return Number.isNaN(n) ? null : n;    // not a valid number
}

function handleCalculate(op) {
  const a = getNumber("a");
  const b = getNumber("b");
  const out = document.getElementById("result");

  if (a === null || b === null) {
    out.textContent = "Please enter a valid number in both fields.";
    return;
  }

  if (op === "/" && b === 0) {
    out.textContent = "Cannot divide by zero.";
    return;
  }

  out.textContent = calculate(a, b, op);
}
*/