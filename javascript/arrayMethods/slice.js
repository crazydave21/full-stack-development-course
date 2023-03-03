//number array
let numberArray = [1, 4, 2, 8];

//starts at index 0, selects upto position 3 returns selected array elements as a new array
let newArray = numberArray.slice(0, 3);
//prints selected array
console.log(newArray); // (3) [1, 4, 2]
//no changes made in original array
console.log(numberArray); // (4) [1, 4, 2, 8]