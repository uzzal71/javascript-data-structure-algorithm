/**
Palindrome Number:
Given an integer x, return true if x is palindrome, and false otherwise

Example 1:
input x =121
output: true

Explanation 1: 121 reads as 121 from left to right and from right to left

Example 2:
input x =-121
output: false

Explanation 2:  From left to right, it reads -121. From right to left it becomes 121-. Therefore it is not a palindrome

constraints:
-2^31 <= x <= 2^31 -1
Follow up: Could you solve it without converting the integer to a string
*/

function isPalindrome(x) {
    // Negative numbers are not palindromes
    if (x < 0) {
        return false;
    }

    // Store the original number
    let original = x;
    let reversed = 0;

    // Reverse the number mathematically
    while (x > 0) {
        let digit = x % 10; // Get the last digit
        reversed = reversed * 10 + digit; // Add the digit to the reversed number
        x = Math.floor(x / 10); // Remove the last digit from x
    }

    // Check if the reversed number is the same as the original number
    return original === reversed;
}

// Example usage:
console.log(isPalindrome(121)); // Output: true
console.log(isPalindrome(-121)); // Output: false
console.log(isPalindrome(10)); // Output: false
