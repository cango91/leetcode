/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let sorted = nums.map((el, idx) => ({ el, idx }));
    sorted = sorted.sort((a,b)=>a.el -b.el);
    let smIdx = 0;
    let lgIdx = sorted.length - 1;
    while(smIdx<lgIdx){
    let smallest = sorted[smIdx].el, largest = sorted[lgIdx].el;
    if(smallest+largest === target){
      return [sorted[smIdx].idx,sorted[lgIdx].idx];
    }else if(smallest+largest > target){
      lgIdx --;
    }else{
      smIdx++;
    }
  }
};