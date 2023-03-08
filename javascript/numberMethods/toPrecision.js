//number literal
let num = 5.344556;

//converts to string
let number = num.toPrecision();

console.log(typeof num); // number
console.log(typeof number); // string

//formats a number to a specified length i.e 3 in this case
console.log(num.toPrecision(3)); // 5.34