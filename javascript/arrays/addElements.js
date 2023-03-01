//add elements to an array
//empty array
let array3 = [];

//prints "array3"
console.log(array3); // (0) []

//adds "John" to "array3" at index 0
array3[0] = "John"

//prints "array3"
console.log(array3) // (1) ['John']

//adds "jack" to "array3" 
array3[2] = "Jack";

//prints "array3"
console.log(array3); // (3) ['John', …, 'Jack']
//prints value at index 1
console.log(array3[1]); // undefined

/////////////////////////////////////////////////////////////////////////////////

//add elements to an array
//push() and unshift()
//string array
let array4 = ["John", "Jack"];

//adds "Dan" as last element
array4.push("Dan");

//prints "array4"
console.log(array4); // (3) ['John', 'Jack', 'Dan']

//adds "Jill" as first element
array4.unshift("Jill");

//prints "array4"
console.log(array4); // (4) ['Jill', 'John', 'Jack', 'Dan']


/////////////////////////////////////////////////////////////////////////////////