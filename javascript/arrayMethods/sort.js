//string array
let stringArray = ["John" , "Adam", "Jack", "Jill"];
//number array
let numberArray = [8574, 22, 454, 3443, 1];

//sorts "numberArray"
console.log(numberArray.sort()); // (5) [1, 22, 3443, 454, 8574]
//sorts "stringArray"
console.log(stringArray.sort()); // (4) ['Adam', 'Jack', 'Jill', 'John']
//sorts "numberArray"in  descending order
console.log(numberArray.sort(function(a, b){return b-a})); // (5) [8574, 3443, 454, 22, 1]