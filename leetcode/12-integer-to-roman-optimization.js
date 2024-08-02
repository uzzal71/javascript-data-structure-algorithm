/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {

    let ones = ['','I','II','III','IV',"V",'VI','VII','VIII','IX']
    let tens = ['','X','XX','XXX','XL','L','LX','LXX','LXXX','XC']
    let hund = ['','C','CC','CCC','CD','D','DC','DCC','DCCC','CM']
    let ths =  ['','M','MM','MMM']

    return  ths[Math.floor(num/1000)] + hund[Math.floor((num%1000)/100)] + tens[Math.floor((num%100)/10)] + ones[num%10]

    
};

// 3749 
// 3749 / 1000 FLOOR ==> 3  => THS[3] = MMM
// 3749%1000 / 100 FLOOR ==>7 ===> HUN[7] =MMDCC
// 3749%100 / 10 floor ==> 4==>TENS[4] = XL
// 3749%10  ===> 9 ==>ONES[9]