//number array
let numberArray = [5, 4, 3, 2];

//searches for element "4" and returns true
console.log(numberArray.includes(4)); // true
//searches for element "4" after position 3
console.log(numberArray.includes(4, 3)); // false

//example 1
//prints array if element "5" is found 
if(numberArray.includes(5)) {
    numberArray.forEach(value => {
        console.log(value); // 5 // 4 // 3 // 2
    })
}

else
    console.log("not found");

//example 2
//prints "5" if element "5" is found
if(numberArray.includes(5)) {
    numberArray.forEach(value => {
        if(value == 5)
        console.log(value); // 5
    })
}

else
    console.log("not found");