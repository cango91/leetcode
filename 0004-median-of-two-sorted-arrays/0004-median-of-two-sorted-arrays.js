/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    const n = nums1.length;
    const m = nums2.length;
    const ret = [];
    const evenStrategy = (n + m) % 2 === 0
    // pseudo merge-sort until mid-way point
    const stop = evenStrategy ? (n + m) / 2 + 1 : (n + m + 1) / 2;
    let idx = 0;
    while(idx<stop){
        if(nums1.length && nums2.length){
            if(nums1[0]<nums2[0])
                ret.push(nums1.shift());
            else
                ret.push(nums2.shift());
        }else{
            if(nums1.length)
                ret.push(nums1.shift());
            else
                ret.push(nums2.shift());
        }
        idx++;
    }
    if (ret.length < 2) return ret[0];
    if (evenStrategy)
        return (ret[ret.length - 1] + ret[ret.length - 2]) / 2;
    return ret[ret.length - 1];

};