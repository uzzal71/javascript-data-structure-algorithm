/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let carry = 0;
    let result = '';
    let i = a.length - 1;
    let j = b.length - 1;

    while (i >= 0 || j >= 0 || carry) {
        let sum = carry;

        if (i >= 0) {
            sum += a[i] - '0';
            i--;
        }

        if (j >= 0) {
            sum += b[j] - '0';
            j--;
        }

        result = (sum % 2) + result;
        carry = Math.floor(sum / 2);
    }

    return result;
};


var addBinary2 = function(a, b) {
    return (BigInt("0b" + a) + BigInt("0b" + b)).toString(2);
};

console.log(addBinary("11", "1"));     // Output: "100"
console.log(addBinary("1010", "1011")); // Output: "10101"
