//number literal
let num = 50;
let num1 = Math.pow(2, 53) - 1;
let number = Math.pow(2, 53);

//returns true if the number of type Number is a safe integer, else returns false
//[NOTE : all integers from (253 - 1) to -(253 - 1) are safe integers]
console.log(Number.isSafeInteger(number)); // false
console.log(Number.isSafeInteger(num1)); // true
console.log(Number.isSafeInteger(num)); // true

