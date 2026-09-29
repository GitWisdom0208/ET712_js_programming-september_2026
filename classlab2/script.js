let hournow =15;
let greeting; 

if (hournow < 24) {
    greeting = "welcome to the next day";
} else if (hournow < 18) {
    greeting = "Good afternoon";
} else if (hournow < 12) {
    greeting = "Good morning";
} else if (hournow < 0) {
    greeting = "Good night";    
} else {
    greeting = "welcome";
} 
document.write('<h2 class="greet">' + greeting + '</h2>'); 

console.log("sage sandiford");
console.log(greeting); 
console.log("example 1 : conversion bewteen data types");

let num1 = prompt ("Enter a number"); 
let num2 = prompt ("Enter another number"); 
let sum = Number(num1) + Number(num2); 
console.log("the sum of " + num1 + " and " + num2 + " is " + sum); 
console.log ("excercise") 
let firstname = prompt ("Enter your first name");