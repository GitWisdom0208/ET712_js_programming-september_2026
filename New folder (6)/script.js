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

// Collect the four operation buttons
const addBtn = document.querySelector("#addBtn");
const subtractBtn = document.querySelector("#subtractBtn");
const multiplyBtn = document.querySelector("#multiplyBtn");
const divideBtn = document.querySelector("#divideBtn");

const buttons = [addBtn, subtractBtn, multiplyBtn, divideBtn];

// Colors used for the mouse events
const normalColor = "steelblue";
const hoverColor = "darkorange";

// Perform a calculation based on the selected operation
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

    // 3. Perform the selected arithmetic operation
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

    // 4. Display the result using textContent
    resultDisplay.textContent = "Result: " + result;
}

// Add click event listeners to the four buttons
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
AI Assistance:
(Write this part in your own words. See the note below.)
*/