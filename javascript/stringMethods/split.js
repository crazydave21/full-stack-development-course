let string = "Hello, how are you?";

//splits each word to an array
console.log(string.split(" ")); // ['Hello,', 'how', 'are', 'you?']

//splits each word to an array and prints 1st three words
console.log(string.split(" ", 3)); // ['Hello,', 'how', 'are']

//splits each letter to an array
console.log(string.split("")); // ['H', 'e', 'l', 'l', 'o', ',', ' ', 'h', 'o', 'w', ' ', 'a', 'r', 'e', ' ', 'y', 'o', 'u', '?']