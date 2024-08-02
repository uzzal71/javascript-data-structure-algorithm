/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] < 9) {
            digits[i]++;
            return digits;
        }
        digits[i] = 0;
    }
    digits.unshift(1);
    return digits;
};

var plusOne2 = function(digits) {
    let res = digits
    if(digits[digits.length - 1] != 9){
        res[res.length - 1] += 1
    }
    else{
        res[res.length - 1] = 0
        let i = res.length - 2
        let needInc = true
        while(i >= 0){
            if(res[i] != 9){
                res[i] += 1
                needInc = false
                break
            }
            else{
                res[i] = 0
                i -= 1
            }
        }
        if(needInc){
            res.unshift(1)
        }

    }



    return res
}

console.log(plusOne([1,2,3])); // Output: [1,2,4]
console.log(plusOne([4,3,2,1])); // Output: [4,3,2,2]
console.log(plusOne([9])); // Output: [1,0]
console.log(plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3])); // Output: [6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 4]