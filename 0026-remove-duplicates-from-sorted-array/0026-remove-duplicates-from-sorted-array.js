/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    const sorted = [... new Set(nums)];
    for(let i = 0; i<sorted.length; i++){
        nums[i] = sorted[i];
    }
    return sorted.length;
};