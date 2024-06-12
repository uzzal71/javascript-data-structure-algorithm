/**
 Problem - Given an integer "n" find the factorial of that integer

 In mathematics, the factorial of a non-negative integer "n", denoted n!, is the product of all posible integers less than or equal to "n".
 Factorial of zero is 1.
 factorial(1) = 1
 factorial(2) = 2 * 1 = 2
 factorial(3) = 3 * 2 * 1 = 6
 factorial(4) = 4 * 3 * 2 * 1 = 24
 factorial(5) = 5 * 4 * 3 * 2 * 1 = 120
 */

 function factorial(n) {
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
 }

 console.log(factorial(0));
 console.log(factorial(1));
 console.log(factorial(2));
 console.log(factorial(3));
 console.log(factorial(4));
 console.log(factorial(5));

//  Big-O = O(n)