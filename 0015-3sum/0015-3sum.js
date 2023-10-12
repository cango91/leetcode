/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  nums.sort((a,b)=>a-b);
  let result = [];
  for(let i = 0; i<nums.length; i++){
    if(nums[i]>0) break;
    if(i>0 && nums[i]===nums[i-1]){
      continue;
    }
    let ptr1 = i+1, ptr2 = nums.length-1;
    const target = -1*nums[i];
    while(ptr1<ptr2){
      const num1 = nums[ptr1];
      if(nums[ptr1] + nums[ptr2] === target){
        result.push([nums[i],num1, nums[ptr2]]);
        while(ptr1<ptr2 && nums[ptr1]===num1){
          ptr1++;
        }
      }else if(nums[ptr1]+nums[ptr2]>target){
        ptr2--;
      }else{
        ptr1++;
      }
    }
  }
  return result;
};