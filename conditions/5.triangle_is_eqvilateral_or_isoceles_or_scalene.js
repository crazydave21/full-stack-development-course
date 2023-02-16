console.log("5.Check if a triangle is equilateral, scalene or isosceles");

let side1 = 8;
let side2 = 5;
let side3 = 6;
if (side1 == side2 && side1 == side3) {
    console.log("The triangle is equilateral");
}

else if (side1 == side2 || side1 == side3 || side3 == side2) {
    console.log("The triangle is isoceles")
}

else {
    console.log("The triangle is scalene");
}