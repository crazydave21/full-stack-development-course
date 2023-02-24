console.log("Fibonacci using recursion")

function fib(value)
{
    if(value <= 1) {
        return value;
    }
    else {
        return fib(value -1) + fib(value - 2);
    }
    
}
var value = 10;
for ( var i = 0; i <= value; i++)
{
    console.log(fib(i));
}