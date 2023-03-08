//number literal
let number = 10;
let num = 0;
let num1 = 0/0


//returns true if the number is finite
//Infinite (not finite) numbers are Infinity, -Infinity, or NaN
//otherwise it returns false
console.log(Number.isFinite(number)); // true
console.log(Number.isFinite(num)); // true
console.log(Number.isFinite(num1)); // false
console.log(Number.isFinite(-0/0)); // false