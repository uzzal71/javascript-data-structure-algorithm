/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  var arr = [0, 1];
  for (var i = 0; i < n; i++) {
    arr = [arr[1], arr[0] + arr[1]];
  }
  return arr[1];
};

console.log(climbStairs(2)); // Output: 2
console.log(climbStairs(3)); // Output: 3