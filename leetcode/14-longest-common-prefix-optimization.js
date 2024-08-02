/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(strs === 0) return "";
    strs.sort()
    let start = strs[0]
    let end = strs[strs.length-1]
    i = 0
    while(i<start.length & start[i] === end[i]){
        i++
    }
    console.log(i);
    return start.substring(0, i)
    
};

console.log(longestCommonPrefix(["flower","flow","flight"])); // Output:fl
console.log(longestCommonPrefix(["dog","racecar","car"])); // Output:""