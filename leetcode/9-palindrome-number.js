/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    const str = x.toString().split("").reverse().join("");
    return Number(str) === x;
};

console.log(isPalindrome(-121))