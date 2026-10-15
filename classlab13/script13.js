//select element to add an event
let btnpress = document.querySelector(".btnpress");
// add a click event to the button
// when user clicks the button, the function will be called
if (btnpress) {
    btnpress.onclick = function() {
        alert("et712");
    };
}

// collect the button element
let button = document.querySelector(".button");
let resetButton = document.querySelector(".reset");
let buttonCounter = 0;
let setCounter = document.querySelector("#counter");

function updateCounter() {
    if (setCounter) {
        setCounter.textContent = buttonCounter;
        setCounter.style.color = changeColor();
    }
}

if (button && setCounter) {
    button.onmouseover = function() {
        buttonCounter++;
        updateCounter();
        button.style.backgroundColor = changeColor();
    };
}

if (resetButton) {
    resetButton.onclick = function() {
        buttonCounter = 0;
        updateCounter();

        let input = document.querySelector("#input");
        if (input) {
            input.value = "";
        }
    };
}

function changeColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

//event listener
// collect the element
let colorButton = document.querySelector(".color");

if (colorButton) {
    colorButton.addEventListener("click", function() {
        document.body.style.backgroundColor = changeColor();
        document.body.style.color = changeColor();
    });
}