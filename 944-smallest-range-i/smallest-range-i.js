/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var smallestRangeI = function(nums, k) {
     let min = Math.min(...nums);
    let max = Math.max(...nums);

    return Math.max(0, max - min - 2 * k);
};