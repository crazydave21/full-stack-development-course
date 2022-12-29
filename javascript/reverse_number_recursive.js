console.log("Reverse a number");
var rem, rev = 0;

function rev_num(num)
{
    if(num == 0)
    {
        return 1
    }
    
    else
    {
    rem = num % 10;
    rev = rev * 10 + rem;
    rev_num(Math.floor(num / 10));
    }

}

rev_num(2345)
console.log(rev);