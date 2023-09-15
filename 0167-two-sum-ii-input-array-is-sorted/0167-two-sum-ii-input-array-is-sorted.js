/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let smIdx = 0;
    let lgIdx = numbers.length - 1;
    while(smIdx<lgIdx){
    let smallest = numbers[smIdx], largest = numbers[lgIdx];
    if(smallest+largest === target){
      return [smIdx+1,lgIdx+1];
    }else if(smallest+largest > target){
      lgIdx --;
    }else{
      smIdx++;
    }
  } 
};