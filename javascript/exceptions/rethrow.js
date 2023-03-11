let string = "5";

try {
    if(typeof string != "number") {
        //throws type error
        throw new Error(`Type ${typeof string+": "+string} converting to number.....`);
    }

    else {
        console.log(string / 5);
    }
}

catch(error) {
    console.log(""+error); // Error: Type string: Hello not a number
    let number = Number.parseInt(string);
    try {
        if(Number.isNaN(number) == true)
        throw new Error("Alphabet's cannot be converted into strings");

        else console.log("result =",number / 5);
    }

    catch(error) {
        console.log(""+error);
    }

}