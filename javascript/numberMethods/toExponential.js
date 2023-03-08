//number literal
let number = 50;

//converts number to string
let num = number.toExponential();

//prints typeof "number" and "num"
console.log(typeof number); // number
console.log(typeof num); // string

//returns a string containing a number represented in exponential notation
//prints upto 2 decimal points
console.log(number.toExponential(2)); // 5.00e+1