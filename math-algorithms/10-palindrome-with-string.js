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
    // Convert the number to a string
    let str = x.toString();
    
    // Reverse the string using split, reverse, and join
    let reversedStr = str.split("").reverse().join("");
    
    // Check if the original string is equal to the reversed string
    return str === reversedStr;
}

// Example usage:
console.log(isPalindrome(121)); // Output: true
console.log(isPalindrome(-121)); // Output: false
console.log(isPalindrome(10)); // Output: false
