//number literal
let number = 50;
let obj = new Number(50);

//converts to strings
let num = number.toString();
//converts object to string
let objectString = obj.toString();

//prints type of "number" and "num"
console.log(typeof number); //number
console.log(typeof num); // string
console.log(typeof objectString); // string

//converts number to string
console.log(number.toString()); // 50
//converts number to hexadecimal
console.log(number.toString(16)); // 32