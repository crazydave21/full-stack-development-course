//floating ponint arithematic operations are not always accurate
let num = 0.2 + 0.1;

console.log(num); // 0.30000000000000004

//one way fixing it by multiplying by 10 and dividing by 10
let num1 = (0.2 * 10 + 0.1 * 10) / 10;

//prints precise number
console.log(num1); // 0.3
//another way by using toFixed method
console.log(num.toFixed(2)); // 0.30

//number in exponent notation
let num2 = 4e22;

//prints exponant number precisely
console.log(num2.toPrecision(2)); // 4.00e+66

//integers are only accurate upto 15 digits
let number = 9999999999999999;

console.log(number); // 10000000000000000