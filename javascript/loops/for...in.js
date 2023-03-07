//iterating over array
//number array
let numberArray = [5, 4, 3, 2, 1];

for (let key in numberArray) {
    console.log(numberArray[key]); // 5 // 4 // 3 // 2 // 1
}


//iterating over strings
//string literal
let string = "Hello";

for (let key in string) {
    console.log(string[key]); // h // e // l // l // o 
}


//iterating over objects
//object literals
let object = {name: "John", place: "America"};

for (key in object) {
    console.log(object[key]); // John // America
}


//iterating over object constructors
function Person() {
    this.name = "John",
    this.place = "America";
}

//object constructor
let object1 = new Person();

for (key in object1) {
    console.log(object1[key]); // John // America
}