let string = "HelloWorld";

//starts at index 0 and extracts upto position 5
console.log(string.slice(0, 5)); // Hello

//starts at index 1 and extracts upto position 5
console.log(string.slice(1, 5)); // ello

//starts at index 2 and extracts remaining strings
console.log(string.slice(2)); // lloWorld