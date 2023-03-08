//number literal
let num = 50;
let number = "50, 5";

//parseFloat converts string to number
let = toNumber = Number.parseFloat(number);

//prints typeof "num", "number" and "toNumber"
console.log(typeof num); // number
console.log(typeof number); // string
console.log(typeof toNumber); // number

//converts a string to floating point number, else returns NaN
console.log(Number.parseFloat(num)); // 50
console.log(Number.parseFloat(number)); // 50
console.log(Number.parseFloat("5.67 76766")); // 5.67
console.log(Number.parseFloat("4Hello")); // 4
console.log(Number.parseFloat("number")); // NaN