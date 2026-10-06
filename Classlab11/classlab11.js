console.log("--example 1--"); 
// object "car" properties 
const car = {
    type: "fiat",
    model: "500",
    color: "white",
    
    //methods 
    carname: function () {
        return this.type + " " + this.model;
    }
};

//call the properites of the object "car"
console.log(car.type);
console.log(car.model);
console.log(car.color);
console.log(car.carname()); 

console.log("--example 2:object constructor--");
function course(title,instructor,code,session,students){
    this.t= title;
    this.i = instructor;
    this.c = code;
    this.s = session;
    this.st = students;
    this.number_students = function() {
        return this.st;
    }
    this.coursename = function() {
        return this.t;
    }
    this.courseName = this.coursename;
}

//create an object of new course
let course1 = new course("computer application","prof.Wu","tech100","m1",20);
let course2 = new course("Js programming","prof.novak","et712","c3",10); 

//acess to course values
console.log(course1.i);
console.log(course2.number_students());
console.log(course1.number_students());
console.log(course2.coursename());   

console.log("--example 3:methods of an object--");
const square = {
    //methods
    area(side) {
        return side * side;
    },
    perimeter(side) {
        return 4 * side;
    }
};
 
//acess the methods of the object "square" 
console.log("--example 3:methods of an object--");
let s=9;
let area1=square.area(s);
let perimeter1=square.perimeter(s);
console.log("area of square with side " + s + " is: " + area1);
console.log("perimeter of square with side " + s + " is: " + perimeter1); 

console.log("--example 4:methods of an object using the 'this' statement--");
const hen = {
    // properties
    name: "Helen",
    eggCount: 0,
    // methods
    layEgg() {
        this.eggCount++;
    },
    lay_an_egg() {
        this.eggCount++;
        return this.eggCount;
    }
};  

console.log("-- lab excercise :--");
const mycalculator = {
    // properties
    message: "square calculator",
    side: 2,

    // methods
    area_square() {
        return Math.pow(this.side, 2);
    },
    volume_cube() {
        return Math.pow(this.side, 3);
    }
};

console.log("lab excercise 2:")
console.log(mycalculator.message);
console.log("side = " + mycalculator.side);
console.log("Area of square: " + mycalculator.area_square());
console.log("Volume of cube: " + mycalculator.volume_cube());

console.log("\n------ Lab Exercise 2: Exception Handling -----");
function readProperty(obj, prop) {
    try {
        return obj[prop];
    } catch (error) {
        return "Error accessing property";
    }
}

const student = {
    name: "John",
    age: 20
};

console.log(readProperty(student, "name"));
console.log(readProperty(null, "name"));
console.log("Copilot Assistance:");
console.log("Copilot helped debug the try-catch statement and explain runtime errors."); 

/**
 * Copilot helped to explain the try and catch statement and how it can be used to handle runtime errors in JavaScript.
 *  It also provided an example of how to use the try-catch statement to read a propertyhat may occur during the process. 
 * it also explained to me how the null value can cause an error when trying to access properties of an object and how to fix that error using the try-catch statement.
 */