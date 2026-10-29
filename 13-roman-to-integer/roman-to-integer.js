/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
     let a = {I:1, V:5, X:10, L:50, C:100, D:500, M:1000};

    return s.split('').reduce((sum, c, i, arr) =>
        sum + (a[c] < a[arr[i+1]] ? -a[c] : a[c]), 0);
};