/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    const MAX_INT = 2147483647;
    const MIN_INT = -2147483648;

    // Handle edge case of overflow
    if (dividend === MIN_INT && divisor === -1) {
        return MAX_INT;
    }

    // Perform the division and truncate towards zero
    const result = Math.trunc(dividend / divisor);

    // Ensure the result fits within the 32-bit signed integer range
    if (result > MAX_INT) return MAX_INT;
    if (result < MIN_INT) return MIN_INT;

    return result;
};

console.log(divide(10, 3));    // Output: 3
console.log(divide(7, -3));    // Output: -2
console.log(divide(-2147483648, -1)); // Output: 2147483647