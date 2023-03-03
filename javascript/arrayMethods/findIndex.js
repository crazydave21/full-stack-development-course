//number array
let ages = [3, 10, 18, 20];

//returns age > 18
function checkAge(age) {
    return age > 18;
  }

//finds the value of the first element with a value over 18 and returns its index
console.log(ages.findIndex(checkAge)); // 3