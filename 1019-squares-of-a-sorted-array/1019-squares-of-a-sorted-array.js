/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    return nums.sort((a,b)=>Math.abs(a)-Math.abs(b)).map(num=>num**2)
};