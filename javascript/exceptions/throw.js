let string = "Hello";

try {
    if(typeof string != "number") {
        //throws type error
        throw new Error(`Type ${typeof string+": "+string} not a number`);
    }

    else {
        console.log(string / 5);
    }
}

catch(error) {
    console.log(""+error); // Error: Type string: Hello not a number
}