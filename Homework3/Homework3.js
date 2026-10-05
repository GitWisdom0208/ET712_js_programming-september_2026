/*
Name: Sage Sandiford
Course: JavaScript Programming
Lab Experiment 4: Arrays, Functions, and AI Assistance
Date: October 5, 2026
*/

// AI Assistance:
// Claude helped explain how the calculateAverage() function works,
// suggested input validation for the prompt() loop, and helped
// debug the pass/fail conditional logic.

// ------ Class Example 1: Arrays ------
console.log("\n------ Class Example 1: Arrays -----");

let fruits = ["Apple", "Banana", "Orange"];

console.log(fruits);
console.log("First fruit:", fruits[0]);

// ------ Class Example 2: Loop Through Array ------
console.log("\n------ Class Example 2: Loop Through Array -----");

let colors = ["Red", "Blue", "Green"];

for (let i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}

// ------ Class Example 3: Functions ------
console.log("\n------ Class Example 3: Functions -----");

function squareNumber(num) {
    return num * num;
}

console.log("Square:", squareNumber(5));

// ------ Lab Exercise: Student Score Analyzer ------
console.log("\n------ Lab Exercise: Student Score Analyzer -----");

// 1. Empty array to hold the scores
let scores = [];

// 2 & 3. Collect five scores with prompt() and store them
for (let i = 0; i < 5; i++) {
    let input = prompt("Enter score " + (i + 1) + " of 5:");
    let score = Number(input);

    // Re-ask if the input is blank, not a number, or out of range
    while (input === null || input.trim() === "" || isNaN(score) || score < 0 || score > 100) {
        input = prompt("Invalid entry. Enter score " + (i + 1) + " of 5 (0-100):");
        score = Number(input);
    }

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

// 5 & 6. Display results with a pass/fail decision
console.log("Scores:", scores.join(","));
console.log("Average Score:", average);

if (average >= 70) {
    console.log("Class Passed");
} else {
    console.log("Class Failed");
}