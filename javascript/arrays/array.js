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