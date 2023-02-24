//6.FizzBuzz Challenge

//prints Fizz at muliples of 3, buzz at 5, fizzbuzz at 3 and 5
for(let i = 1; i<=100; i++) {
    if(i%3 == 0) console.log(i, "Fizz");
    if (i%5 == 0) console.log(i,"Buzz");
    if (i%3 == 0 && i%5 == 0) console.log(i,"fizzbuzz");

}