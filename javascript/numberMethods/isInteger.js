//number literal
let num = "50";
let number = 50;


//returns true if the value of type Number is a integer, else returns false
console.log(Number.isInteger(num)); // false
console.log(Number.isInteger(number)); // true
console.log(Number.isInteger(0)); // true
console.log(Number.isInteger(0/0)); // false