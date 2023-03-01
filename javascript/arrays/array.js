//array of numbers
let numberArray = [3, 4, 2, 6];
//array of strings
let stringArray = ["car", "bike", "cycle"];
//array of mixed data type
let mixedArray = ["scooter", 5, 9, true];

//prints "numberArray" array
console.log(numberArray); // (4) [3, 4, 2, 6]
//prints length of "numberArray"
console.log(numberArray.length); // 4
//access "bike" in "stringArray"
console.log(stringArray[1]); // bike

//object
let object = {brand: "Google", model: "Pixel Watch", getBrand: function() {return this.brand}};
//function
let method = function() {console.log("A function")};

//array of "numberArray", "stringArray", "mixedArray", "object"
let array1 = [numberArray, stringArray, mixedArray, object];
//example 2
let array2 = [1, 4, [3, 2], {name: "John"}, method];

//prints "array1"
console.log(array1); // (4) [Array(4), Array(3), Array(4), {…}]
//prints "array2"
console.log(array2); // (5) [1, 4, Array(2), {…}, ƒ]
//prints "Google" from {brand: "Google", model: "Pixel Watch", ...} from "array1"
console.log(array1[3].brand); // Google
//access "getBrand"
console.log(array1[3].getBrand()); // Google
//prints "3" from [3, 2] from "array2"
console.log(array2[2][0]); // 3
//access function
//another way array2[3]()
console.log(array2[method()]); // A function

//////////////////////////////////////////////////////////////////////////////////

//add elements to an array
//push() and unshift()
//string array
let array4 = ["John", "Jack"];

//adds "Dan" as last element
array4.push("Dan");

//prints "array4"
console.log(array4); // (3) ['John', 'Jack', 'Dan']

//adds "Jill" as first element
array4.unshift("Jill");

//prints "array4"
console.log(array4); // (4) ['Jill', 'John', 'Jack', 'Dan']


//////////////////////////////////////////////////////////////////////////////////

//add elements to an array
//empty array
let array3 = [];

//prints "array3"
console.log(array3); // (0) []

//adds "John" to "array3" at index 0
array3[0] = "John"

//prints "array3"
console.log(array3) // (1) ['John']

//adds "jack" to "array3" 
array3[2] = "Jack";

//prints "array3"
console.log(array3); // (3) ['John', …, 'Jack']
//prints value at index 1
console.log(array3[1]); // undefined


//////////////////////////////////////////////////////////////////////////////////

//remove elements in an array
//pop() and shift()

//string array
let array5 = ["Dan", "Jack", "Jill"];

//removes last element
array5.pop();

//prints "array5"
console.log(array5); // (2) ['Dan', 'Jack']

//stores "Jack" in variable "removedElement"
let removedElement = array5.pop();

//prints "removedElement"
console.log(removedElement); // Jack

//string array
let array6 = ["Dan", "Jack", "Jill"];

//removes first element
array6.shift();

//prints "array6"
console.log(array6); // (2) ['Jack', 'Jill']

//////////////////////////////////////////////////////////////////////////////////

