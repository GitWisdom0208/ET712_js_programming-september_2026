console.log("sage sandiford") 
console.log("\example 1:array")
let mixedarray =['cars',10,true,apples,-3.5]
console.log(`The 4th value is $mixedarray[3]`)
console.log(`orignal array = ${mixedarray}`)
console.log("\n example 2: array methods") 
// remove the first value (left most) in array mixed array 
mixedarray.shift 
console.log(`array after shift method = $(mixedarray)`) 

// add a value to the left most in array in mixed array 
mixedarray.unshift("ny",280) 
console.log(`array after unshift method =$(mixedarray)`) 

// add values to the right most array in mixed array 
mixedarray.push(-360,QCC) 
console.log(`array after push method = $(mixedarray)`) 

// methods that return value
// find the index number of cherries  
indexcherries=mixedarray.indexOf("cherries") 
console.log(`what is the index for cherries $(indexcherries)`) 
// it returns -1 if the value doesnt exist 

indexqcc = mixedarray.indexOf("qcc")
console.log(`What is the index for qcc? $(indexqcc)`) 

console.log ("\n---- example 3:if statement") 
// check for  one condition 
// it will run code wrap in between the curly braces if the statement is true
// otherwise if the statement is false the code will skip the condtional statement 
let goodmood = false
let gotsleep = false


if (gotsleep === true && goodmood===true) {
    console.log('today is a good day!') 

} 
if (goodmood && gotsleep){
    console.log('today is a good day')
}
console.log('good bye!') 

console.log("\n --- example 4: if else statement") 
// has two branches 
let n1 = 16
let n2 = 16

if (n1==n2){
    console('the numbers are equal') 
} 

else{
    console.log("the numbers are not equal") 

} 
console.log ("\n ---- example 5: if else statement with isNaN function") 
let userinput = prompt("enter a number") 
let checkinput = isNaN(parseInt(userinput)) 

if (checkinput){
console.log(`${userinput} is a string`) 

} 
else{
    console.log(`${userinput} is a number`)
} 

console.log ("\n---- example 6: multiway conditional statement")
// check if the number is zero,negative or positive
let inputnumber =parseInt(userinput)
if (inputnumber === 0){
    console.log('the number is postive')

} 
else if (inputnumber<0){
    console.log('the number is negative')
} 
else{
    console.log ('this input isnt a number')
} 

console,log("\n --- example 7: and operartor") 

//and operator && returns a true if all statements are true 
// check if a usernqame is 6+ characters and has no space 
let username = prompt("enter a user name") 
if(username .length()>=6 && username.indexOf(" ")=== -1){
    console.log('valid username') 
} 
else{
    console.log('invalid username')
} 

console,log("\n --- example 8:or operator")  

// or operator || returns a true if one of the statements are true 
// rate a book if it is excellent good,ok,or invalid 
let rate = prompt("How do you like the book?\n3 for excellent 2 for good,1 for average") 
if (rate === 3 || rate ===2){
    console.log('Thank you for purchasing the book') 
} 
else if (rate ===1 || rate ==0){
    console.log ('we are sorry you didnt like the book') 

} 
else{
    console.log("invalid rate")
}