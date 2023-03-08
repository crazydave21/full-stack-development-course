//number literals
let number = 100000;

//converts to string
let num = number.toLocaleString();

//prints typeof "num"
console.log(typeof num); // string

//converts a number to a string by using the current or specified locale
console.log(number.toLocaleString("en-US", {style:"currency", currency:"USD"}));
