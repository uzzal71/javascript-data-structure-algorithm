/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x<0) return false
     let num=x;
     let reverse=0; // reverse*10 + r
 
     while(num!=0){
         const reminder= num % 10;
         reverse= reverse*10 + reminder;
 
         num= parseInt(num/ 10);
     }
 
     return x==reverse;
 };

 console.log(isPalindrome(-121))
 console.log(isPalindrome(10))
 console.log(isPalindrome(121))