/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function(nums) {
  let degree = 0;
  let minSubarray = Infinity;
  let sus = false;
  const elementData = nums.reduce((acc, el, idx) => {
    if (!acc[el]) {
      acc[el] = { freq: 1, firstOccurrence: idx, lastOccurrence: idx };
    } else {
      acc[el].freq++;
      acc[el].lastOccurrence = idx;
    }
    if(acc[el].freq>degree){
        degree = acc[el].freq;
        minSubarray = acc[el].lastOccurrence - acc[el].firstOccurrence + 1;
        sus = false;
    }
    if(acc[el].freq===degree) sus = true;
    return acc;
  }, {});

  if (degree === 1) return 1;
  return !sus ? minSubarray : Object.values(elementData).reduce((min, el) => {
    return el.freq === degree
      ? Math.min(min, el.lastOccurrence - el.firstOccurrence)
      : min;
  }, Infinity) + 1;

};