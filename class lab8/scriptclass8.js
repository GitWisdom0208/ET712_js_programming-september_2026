console.log("---example 1: for loops---");
//for loop to print from 0-4 inclusive 
for(let n = 0; n <= 4; n++){ 
    console.log(`the current counter is: ${n}`);
} 

console.log("---example 2: for loops---"); 
// for loops to print even numbers between initial vaules up to 100,exclusive
//the initial value is collected from the dialog box prompt
let initialValue = parseInt(prompt("Enter a number less than 90:"));
for(let i = initialValue; i < 100; i++){
    
if (initialValue % 2 === 0) 
    console.log(`${initialValue}`);  

}

console.log("---example 3: for loops for decreasing counter---"); 
//for loop to print from 9 to 1 inclusive 9 8 7 6 5 4 3 2 1
for(let n = 9; n >= 1; n--){
    console.log(`the current counter is: ${n}`);
} 

console.log("---example 4: for loops in a array---"); 
let cars =['mazda,tesla dodge bmw porsche']; 
for(let n of cars){  
    if(n.length== 5)
    console.log(`${n}`);
} 

console.log("---example 5: while loop as a counter---");
// while to print 0 to 4  0-4 inclusive
// initial value 
let i = 0; 
while(i <= 4){ 
    console.log(i) 
    i++ //update of i = increase by 1 
} 

console.log("---example 6: while to guess a number---"); 
// the value of a constant variable cannot be changed, it is a constant value 
const SECRET = 8 
// collect user number 
let usernumber = parseInt(prompt("enter a number between 1 and 10:")); 
// use a while to recollect user number if collected number is not equal to the secret number
while(SECRET !== usernumber){ 
    usernumber = parseInt(prompt("enter another number between 1 and 10:")); 
} 
console.log("you guessed the secret number!"); 

console.log("---example 7:  while loop to validate a number---");
// validate if the input number is 1 and 9
let number = parseInt(prompt("enter a number between 1 and 9:"));
while(true){
    let number = parseInt(prompt("enter a number between 1 and 9:"));
    if(number >= 1 && number <= 9){
        console.log(`the number is valid: ${number}`);
        break; // exit the loop if the number is valid
    } 
} 

console.log("---example 8: for loop with continue statement---");
// skip numbers that are multiples of 3 between 0 and 10 
for(let n = 0; n <= 10; n++){
    console.log(n)
    if(n % 3 === 0){
        continue; // skip the current iteration if n is a multiple of 3
    } 
}