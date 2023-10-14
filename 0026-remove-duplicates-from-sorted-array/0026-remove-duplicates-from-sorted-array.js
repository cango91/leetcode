/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let cache = null;
    for (let i = 0; i < nums.length; i++) {
        if(nums[i]===cache) nums.splice(i--,1);
        if (nums[i] !== cache) cache = nums[i];
    }
};