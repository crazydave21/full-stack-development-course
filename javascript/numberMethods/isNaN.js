//number literal
let num = 50;
let number = 0/0;

//returns true if the value of type Number is NaN, else returns false
console.log(Number.isNaN(num)); // false
console.log(Number.isNaN(number)); // true
console.log(Number.isNaN("5")); // false
console.log(Number.isNaN("10")); // false