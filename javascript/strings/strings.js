//string literal 
let string = "hello";

//prints "string"
console.log(string); // hello

//single quotes can also be used to denote strings
let string1 = 'Hello';

//prints "string1"
console.log(string1); // Hello

////////////////////////////////////////////////////////////////////////////////////////////////

//built in property "length"
let newString = "Human";

//prints length of "newString"
console.log(newString.length); // 5

////////////////////////////////////////////////////////////////////////////////////////////////

//string as object [NOTE : slows down execution speed use literals instead]
let stringNew = new String("Hello World!");

//prints "stringNew"
console.log(stringNew); // String ('Hello World!')

//prints type of "stringNew"
console.log(typeof stringNew); // object

