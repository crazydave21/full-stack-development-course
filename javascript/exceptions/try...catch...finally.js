//example 1 Reference Error
try {

    //trying to print a
    console.log(a);
}

catch(error) {
    console.log(""+error); // ReferenceError: a is not defined
}
 
finally {
    //finally block runs always
    console.log("Success"); // Success
}

//example 2 Type Error
try {
    let a = 5;
    //number cannot be converted to upper case
    console.log(a.toUpperCase());
}

catch(error) {
    console.log(""+error); // TypeError: a.toUpperCase is not a function
}

//example 3

try {
    //empty
}

catch(error) {
    //empty
}

finally {
    //still executes
    console.log("Always Executes"); // Always Executes
}
