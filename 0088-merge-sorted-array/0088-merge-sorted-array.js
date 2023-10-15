/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    if(!nums2.length || n===0) return;
    const cache = [...nums1];
    let j=0, k=0;
    for(let i=0;i<m+n;i++){
        if(j<m && k<n){
            if(cache[j]<nums2[k]){
                nums1[i] = cache[j];
                j++;
            }else{
                nums1[i] = nums2[k];
                k++;
            }
        }else if(k<n){
            nums1[i] = nums2[k];
            k++;
        }else if(j<m){
            nums1[i] = cache[j];
            j++;
        }
    }
};