/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    const root = Math.sqrt(x);
    return Math.trunc(root);
};

var mySqrt2 = function(x) {
    if (x < 2) return x

    var left = 1, right = x, result = 0

    while (left <= right) {
        var mid = Math.floor((left + right) / 2)
        if (mid * mid === x) {
            return mid
        } else if (mid * mid < x) {
            left = mid + 1
            result = mid
        } else {
            right = mid - 1
        }
    }
    return result
};

console.log(mySqrt2(4)); // Output: 2
console.log(mySqrt2(8)); // Output: 2