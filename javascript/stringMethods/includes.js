let string = "How are you?";
let string1 = "How you are";

//returns true if string is present
console.log(string.includes("you"));
//starts search at position 5
console.log(string1.includes("you", 5)); // false