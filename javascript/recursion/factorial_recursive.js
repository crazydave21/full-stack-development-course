console.log("Factorial using recursion")

function fact (value)
{
    if (value == 0)
    {
        return 1
    }
    else
    {
        return value * fact(value -1);
    }
}

console.log(fact(5))