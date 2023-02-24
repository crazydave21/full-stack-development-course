let rows = 5;
//outer loop, this loop prints rows
for(let i = 0; i < rows; i++) {
    var output = "";
    //inner loop, this loop prints spaces
    for(let j = 0; j <= rows - i; j++) {
        output += " ";
    }
    //inner loop, this loop prints star
    for(let k = 0; k <= i; k++) {
        output += " *";
    }
    console.log(output);
}
