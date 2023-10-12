/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let max = 0;
    let ptr1 = 0, ptr2=height.length-1;
    const area = () => (ptr2-ptr1) * Math.min(height[ptr1],height[ptr2]);
    while(ptr2>ptr1){
      if(area()>max){
        max = area();
      }
      if(height[ptr1]>height[ptr2]){
        ptr2--;
      }else{
        ptr1++;
      }
    }
    return max;
};