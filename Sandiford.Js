/*
Name: Sage Sandiford
Course: JavaScript Programming
Homework 2: Arrays, Functions, and AI Assistance
Date: 09/27/2026
*/

// AI Assistance:
// Claude helped explain how the calculateAverage() function works,
// suggested using Number() to convert prompt() input, and helped
// me check my code with extra test cases.

// ---------------------------------------------------------
// Class Example 1: Creating an Array
// ---------------------------------------------------------
console.log("\n------ Class Example 1: Arrays -----");

let fruits = ["Apple", "Banana", "Orange"];

console.log(fruits);
console.log("First fruit:", fruits[0]);

// ---------------------------------------------------------
// Class Example 2: Using a Loop with Arrays
// ---------------------------------------------------------
console.log("\n------ Class Example 2: Loop Through Array -----");

let colors = ["Red", "Blue", "Green"];

for (let i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}

// ---------------------------------------------------------
// Class Example 3: Functions and Return Values
// ---------------------------------------------------------
console.log("\n------ Class Example 3: Functions -----");

function squareNumber(num) {
    return num * num;
}

console.log("Square:", squareNumber(5));

// ---------------------------------------------------------
// Lab Exercise: Student Score Analyzer with AI
// ---------------------------------------------------------
console.log("\n------ Lab Exercise: Student Score Analyzer -----");

// 1. Declare an empty array named scores
let scores = [];

// 2 & 3. Use a for loop to collect five scores and store them in the array
for (let i = 0; i < 5; i++) {
    let score = Number(prompt("Enter score " + (i + 1) + " of 5:"));
    scores.push(score);
}

// 4. Function that returns the average score
function calculateAverage(scoreArray) {
    let total = 0;

    for (let i = 0; i < scoreArray.length; i++) {
        total += scoreArray[i];
    }

    return total / scoreArray.length;
}

let average = calculateAverage(scores);

// 6. Display results in the console
console.log("Scores:", scores.join(","));
console.log("Average Score:", average);

// 5. Conditional statements: pass or fail
if (average >= 70) {
    console.log("Class Passed");
} else {
    console.log("Class Failed");
}