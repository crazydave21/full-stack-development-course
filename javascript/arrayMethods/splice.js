//number array
let numberArray = [1, 4, 2, 8];

//starts at index 1 and removes next 3 elements including index
console.log(numberArray.splice(1, 3)); // (3) [4, 2, 8]
//prints remaining elements [NOTE : changes made in origial array]
console.log(numberArray); // (1) [1]

//adds "4, 2, 8" at index 1
numberArray.splice(1, 0, 4, 2, 8);
//prints "numberArray"
console.log(numberArray); // (4) [1, 4, 2, 8] 