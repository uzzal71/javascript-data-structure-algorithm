/**
 Problem - Given an integer "n" find the factorial of that integer

 In mathematics, the factorial of a non-negative integer "n", denoted n!, is the product of all posible integers less than or equal to "n".
 Factorial of zero is 1.
 recursionFactorial(1) = 1
 recursionFactorial(2) = 2 * 1 = 2
 recursionFactorial(3) = 3 * 2 * 1 = 6
 recursionFactorial(4) = 4 * 3 * 2 * 1 = 24
 recursionFactorial(5) = 5 * 4 * 3 * 2 * 1 = 120
 */

 function recursionFactorial(n) {
    if (n == 0) return 1;

    return n * recursionFactorial(n - 1);
 }

 console.log(recursionFactorial(0)); // 1
 console.log(recursionFactorial(1)); // 1
 console.log(recursionFactorial(2)); // 2
 console.log(recursionFactorial(3)); // 6
 console.log(recursionFactorial(4)); // 24
 console.log(recursionFactorial(5)); // 120

 // Big-O = O(n)