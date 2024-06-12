/**
Tribonacci:
Write a function tribonacci that takes in a number argument, n, and returns the n-th number of the tribonacci sequence.
The O-th and 1-ST numbers of the sequence are both O.
The 2-nd number of the sequence is 1
To generate further numbers of the sequence, calculate the sum of previous three numbers

Solve the recursively.

Example 1:
input: tribonacci(5)
output: 4

Example 2:
input: tribonacci(14)
output: 927
*/

function tribonacci(n) {
    // Base cases
    if (n === 0 || n === 1) {
        return 0;
    } else if (n === 2) {
        return 1;
    }
    
    // Recursive case: Calculate the sum of the previous three numbers
    return tribonacci(n - 1) + tribonacci(n - 2) + tribonacci(n - 3);
}

// Example usage:
console.log(tribonacci(5)); // Output: 4
console.log(tribonacci(14)); // Output: 927
