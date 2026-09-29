console.log("sage sandiford");
console.log("\n----- example 1:intro to function\n");

// define a function that prints 3 to 1
function printcount() {
    for (let num = 3; num >= 1; num--) {
        console.log(num);
    }
}

// call the function
printcount();

console.log("\n----- example 2: function with parameters\n");

// function that prints a greeting. The name is passed as a parameter
function greeting(sage) {
    console.log(`good afternoon ${sage.toUpperCase()}`);
}

console.log("calling greeting function with parameters");
greeting("sage");

// function that prints a message that starts with number 1 all the way up to the stop number.
function greetcount(msg, stopnumber) {
    for (let n = 1; n <= stopnumber; n++) {
        console.log(`${msg} ${n}`);
    }
}

greetcount("good morning", 5);

console.log("\n----- example 4: calling function with parameters\n");

// function that prints 'snake eyes' if 2 numbers are 1
function snake(n1, n2) {
    if (n1 === 1 && n2 === 1) {
        console.log("snake eyes");
    } else {
        console.log("not snake eyes");
    }
}

snake(1, 1);
snake(1, 2);

console.log("\n----- example 5: function that returns a value\n");

// function that calculates the area of a square and returns the calculated area
function areaOfSquare(side) {
    console.log(`calculate area of square with side ${side}`);
    return side * side;
}

let squareArea = areaOfSquare(4);
console.log("the area is", squareArea);

console.log("\n----- example 6: function that returns a boolean value\n");

// function that returns true if the temperature is greater than 75
// otherwise it returns false
// the temperature is passed to the function
function checkTemperature(t) {
    if (t > 75) {
        return true;
    } else {
        return false;
    }
}

console.log(checkTemperature(70));
console.log(checkTemperature(90));

console.log("\n----- example 7: js built-in math functions\n");
const PI = Math.PI;
console.log("the value of PI is", PI);
console.log(`round pi = ${Math.round(PI)}`);
console.log(`Ceil pi = ${Math.ceil(PI)}`);
console.log(`floor pi = ${Math.floor(PI)}`);
console.log(`power 2^5 = ${Math.pow(2, 5)}`);
console.log(`square root of 81 = ${Math.sqrt(81)}`);
console.log(`random numbers between 0 and 1 = ${Math.random()}`);

console.log("\n----- example 8: js built-in math functions\n");

// function that will randomly pick a color from an array
let colors = ["red", "blue", "green", "orange", "purple"];

function pickindex(lastindex) {
    let randomindex = Math.floor(Math.random() * lastindex);
    return randomindex;
}

let index = pickindex(colors.length);
let pickedcolor = colors[index];
console.log(`randomly picked color: ${pickedcolor}`);