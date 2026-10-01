console.log("\n-example 1: global and local variable-");

// global variable 


let msg = 'this is a outside message'; 

function displaymsg() { 
    // local variable 
    let msg = 'hello world'; 
} 

// calling the function
displaymsg(); 

console.log(msg);  

console.log("\n-example 2: CONSTANT VARIABLE-"); 
// constant variables are variables whose values cannot be changed once they are assigned. 

const gravity = 9.8; 
console.log 
gravity=9.9 
console.log(gravity);  // This will throw an error because we cannot change the value of a constant variable. 

console.log("\n-example 3: function in a variable-"); 
const sum = function(num1, num2) {
    return num1 + num2;
}

//calling function 
let s = sum(2, 7);
console.log(s); 

console.log("\n-example 4: arrow function -"); 
let greet = (n) => {
    console.log(`welcome to functions ${n}`);
}
// calling function
greet ("peter pan"); 

console.log("\n-example 5: function that calls another function-"); 
// function that randomly generates a number between 1 and 6 
function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}  
function calltwice() {
    let firstRoll = rollDice();
    let secondRoll = rollDice();
    console.log(`first roll: ${firstRoll}, second roll: ${secondRoll}`);
}

console.log("example 6: function that returns another function-"); 
// fuction that checks if a num is greater than the min number and less than the max number
function makebetweenfunction(min, max) {
    return function(num) {
        return num >= min && num <= max;
    }
} 

let child = makebetweenfunction(3,7); 

console.log(child(5));  // true
console.log(child(10));  // false 

console.log("\n-example 7: function with default values-");
// function to roll a dice n times. n is passed to the function. if n is not passed, it will default to 1.
function rollingdice(n=1) {
    for (let i=1; i<=n; i++) {
        roll = rollDice();
        console.log(rolldice);
    }
} 

console.log("-example 8: function with rest parameters-"); 
// spread syntax -- is used to iterate elements from the list 
nums =[3,9,-6,10,1,0] 
let max = Math.max(...nums);
console.log(max); // 10 