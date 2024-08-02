/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    if (!s || s.length === 0) return 0;
    const str = s.trim();
    const lastElement = str.split(" ").at(-1);
    return lastElement? lastElement.length : 0;
};

var lengthOfLastWord2 = function(s) {
    s = s.split(' ');
    for (let i = s.length - 1; i >= 0; i--) {
      if (s[i] !== '') return s[i].length;
      else continue;
    }
};

console.log(lengthOfLastWord2("Hello World")); // Output: 5
console.log(lengthOfLastWord2("luffy is still joyboy")); // Output: 6