/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    if (!s || s.length === 0) return 0;

    const romanToValue = {"I":1,"V":5,"X":10,"L":50,"C":100,"D":500,"M":1000};
    
    let total = 0;
    let preValue = 0;

    for (let i = s.length - 1; i >= 0; i--) {
        const currentValue = romanToValue[s[i]];

        if (currentValue >= preValue) {
            total += currentValue;
        } else {
            total -= currentValue;
        }

        preValue = currentValue;
    }

    return total;
};

console.log(romanToInt("III"));     // Output: 3
console.log(romanToInt("LVIII"));   // Output: 58
console.log(romanToInt("MCMXCIV")); // Output: 1994
