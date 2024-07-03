// the code provided below is used to calculate the factorial of a number ..factorial of a number(n) is basically the product of all the number from 1 to n(including 1 and n)..
//ex-: input= 5!
//output =1*2*3*4*5 =120
//
function factorial(num)
{
    if(num==0)
        return 1;
    else
    return num*factorial(num-1);
}