/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    if (num<10)return num;
    return addDigits(
        String(num).split('').reduce((a,b)=>Number(a) + Number(b),0)
    )
};