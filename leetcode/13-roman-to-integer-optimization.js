/**
 * @param {string} s
 * @return {number}
 */

function romanToInt(s) {
    // Create a mapping of Roman numerals to their integer values
    const romanToIntMap = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };
    
    let result = 0;
    
    for (let i = 0; i < s.length; i++) {
        let currentVal = romanToIntMap[s[i]];
        let nextVal = romanToIntMap[s[i + 1]];
        
        // If current value is less than next value, subtract it
        if (currentVal < nextVal) {
            result -= currentVal;
        } else {
            result += currentVal;
        }
    }
    
    return result;
}