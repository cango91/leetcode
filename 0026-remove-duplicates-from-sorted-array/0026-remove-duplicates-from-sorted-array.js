/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let cache = null;
    let ptr1 = 0, ptr2 = 0;
    while (ptr1 < nums.length && ptr2 < nums.length) {
        if (nums[ptr2] !== cache) {
            cache = nums[ptr2];
            nums[ptr1] = nums[ptr2];
            ptr1++;
        }
        ptr2++;
    }
    return ptr1;
};