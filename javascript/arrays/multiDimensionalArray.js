//adding elements in multidimensional array
//number array
let numberArray = [1,3,4,5];
//string array
let stringArray = ["John", "Jack", "Jill"];
//multidimensional array
let multiDimensionalArray = [numberArray, stringArray];

console.log(multiDimensionalArray); // (2) [Array(4), Array(3)]
//prints "3" [NOTE : index 0 selects "numberArray" and index 1 selects "3" in "numberArray"]
console.log(multiDimensionalArray[0][1]); // 3

//multidimensional array
let multiDimensionalArray1 = ["Joe"];
//adds "stringArray" to "multiDimensionalArray1"
multiDimensionalArray1.push(stringArray);

//prints "multiDimensionalArray1"
console.log(multiDimensionalArray1); // (2) ['Joe', Array(3)]
//prints index 0 of "multiDimensionalArray1"
console.log(multiDimensionalArray1[0]); // Joe
//prints index 1 of "multiDimensionalArray1"
console.log(multiDimensionalArray1[1]); // (3) ['John', 'Jack', 'Jill']


//empty multidimensional array
let multiDimensionalArray2 = [[],[]];

//adds "numberArray" to zeroth row, zeroth column of "multiDimensionalArray2"
multiDimensionalArray2[0][0] = numberArray;
//adds "stringArray" to 1st row, zeroth column of "multiDimensionalArray2"
multiDimensionalArray2[1][0] = stringArray;

//prints "multiDimensionalArray2"
console.log(multiDimensionalArray2); // (2) [Array(1), Array(1)]

//adds "string" index 0 of "multiDimensionalArray2"
multiDimensionalArray2.splice(0, 0, "String");

console.log(multiDimensionalArray2);

///////////////////////////////////////////////////////////////////////////////////////////////////////////

//iterating over multidimensional arrays

//for loop for iterating over multidimensional array [NOTE : use only if array length is same]
for (let i = 0; i < multiDimensionalArray.length; i++) {
    for(let j = 0; j < numberArray.length; j++ ) {
        console.log(multiDimensionalArray[i][j]); // 1 // 3 // 4 // 5 // John // Jack // Jill // undefined
    }
}

//iterating using forEach [NOTE : preferred method]
multiDimensionalArray.forEach(value => {
    value.forEach(data => {
        console.log(data); // 1 // 3 // 4 // 5 // John // Jack // Jill
    })
})

//iterating using for in
for ( let value in multiDimensionalArray) {
    for ( let data in multiDimensionalArray[value]) {
        console.log(multiDimensionalArray[value][data]); // 1 // 3 // 4 // 5 // John // Jack // Jill
    }
}

//iterating using for of [NOTE : preferred method]
for (let iterator of multiDimensionalArray) {
    for (let data of iterator) {
        console.log(data); // 1 // 3 // 4 // 5 // John // Jack // Jill
    }   
}



