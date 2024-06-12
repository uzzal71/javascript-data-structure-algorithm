/**
Number of 1 bits: Write a function that takes the binary representation of a positive integer and returns the number of bits it has (also known as the hamming weight)

Example 1:
input: n = 11
output: 3

Explanation 1:
The input binary string 1011 has a total of three set bits

Example 2:
input: n = 128
output: 1

Explanation 2:
The input binary string 10000000 has a total of one set bits

constraints:
1 <= n <= 2^31 - 1
Follow up: If this function called many times, how would you  optimize it?
*/
function hammingWeight(n) {
    // Convert the number to its binary representation as a string
    let binaryString = n.toString(2);
    
    // Initialize the count of 1 bits to 0
    let count = 0;
    
    // Loop through each character in the binary string
    for (let char of binaryString) {
        // If the character is '1', increment the count
        if (char === '1') {
            count++;
        }
    }
    
    // Return the total count of 1 bits
    return count;
}

// Example usage:
console.log(hammingWeight(11)); // Output: 3
console.log(hammingWeight(128)); // Output: 1