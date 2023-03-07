//BigInt datatype
//integers are only accurate upto 15 digits
let a = 98765431234567890987654321234567;

//prints "a"
console.log(a); // 9.87654312345679e+31

//add n to the end of an integer to create BigInt
let num = 98765431234567890987654321234567n;

//prints "num"
console.log(num); // 98765431234567890987654321234567n


//another way to create BigInt
let number = BigInt(2637748836452674);
//prints "number"
console.log(number); // 2637748836452674n