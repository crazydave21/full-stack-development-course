//string array
let stringArray = ["car", "bike", "cycle"];
//number array
let numberArray = [5, 4, 3, 2];

//prints all elements from "stringArray"
stringArray.forEach(function(value) {
    console.log(value);  // car // bike // cycle
});

//callback function
function printElements(value) {
    console.log(value)
}

//prints all elements from "stringArray"
stringArray.forEach(printElements); // car // bike // cycle

//using arrow function
stringArray.forEach(value => {
    console.log(value); // car // bike // cycle
});

//multiplies each value by 2
function multiplyValues(value, index, array) {
     console.log(array[index] = value * 2);
}

//prints multiplied values
numberArray.forEach(multiplyValues); // 10 // 8 // 6 // 4