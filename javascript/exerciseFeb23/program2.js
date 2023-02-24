//2.How to check if an object is an array or not? Discuss all the possible methods

//array literal
let array = ["hello"];

//constructor function
function arr () {
    this.array = ["test"];
}

//initializes constructor function
let array1 = new arr ();

// as array constructor?
let array2 = new Array ("test", "quest");

//checks array or not
console.log(Array.isArray(array)); // true
//return type of variables?
console.log(typeof array); // object

//conditional check isArray or not
if(Array.isArray(array) == true) console.log("Is an Array");
else console.log("Not an array");