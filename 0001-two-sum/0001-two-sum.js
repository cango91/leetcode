/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for(let i = 0;i<nums.length; i++){
        const idx = nums.findIndex((el,idx) => el + nums[i] === target && idx!==i);
        if(idx>-1) return [i,idx]
    }
};