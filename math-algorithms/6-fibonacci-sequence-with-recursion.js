/**
  Problem - Given a number "n" find the first "n" elements of the fibonacci sequence

  In mathematics, the Fibonacci sequence is a sequence in which each number is the sum of the two preceding ones.
  The first two numbers in the sequence are 0 and 1.

  recursionFibonacci(2) = 1
  recursionFibonacci(3) = 2
  recursionFibonacci(6) = 8
  recursionFibonacci(7) = 13
 */

  function recursionFibonacci(n) {
    if (n < 2) return n;
    return recursionFibonacci(n - 1) + recursionFibonacci(n - 2);
  }

  console.log(recursionFibonacci(2)); // 1
  console.log(recursionFibonacci(3)); // 2
  console.log(recursionFibonacci(6)); // 8
  console.log(recursionFibonacci(7)); // 13

  // O(n) = Iterative
  // O(n^2) - Recursion