/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    
let num = x;

let reverse = 0;

for (; num > 0; num = (num - (num % 10)) / 10) {
    let digit = num % 10;
    reverse = reverse * 10 + digit;
}

if (x===reverse) {
 return true;
}else{
    return false;
}

};