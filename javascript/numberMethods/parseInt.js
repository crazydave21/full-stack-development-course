//number literal
let num = "50";
let number = 50;

//parseInt converts to number
let toNumber = Number.parseInt(num);

//prints type of "num" and "number"
console.log(typeof num); // string
console.log(typeof number); //number
console.log(typeof toNumber); // number

//converts a string into integer, else returns NaN
console.log(Number.parseInt(num)); // 50
//converts "num" to hexadecimal
console.log(Number.parseInt(num, 16)); // 80
//converts "num" to octal
console.log(Number.parseInt(num, 8)); // 40