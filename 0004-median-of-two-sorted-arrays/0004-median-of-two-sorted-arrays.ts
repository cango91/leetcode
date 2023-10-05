function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
   const n = nums1.length;
    const m = nums2.length;
    const ret:number[] = [];
    const evenStrategy = (n + m) % 2 === 0
    // pseudo merge-sort until mid-way point
    const stop = evenStrategy ? (n + m) / 2 + 1 : (n + m + 1) / 2;
    let count = 0, idx1=0,idx2=0;
    while (count < stop) {
        let val;
        if(idx1<n && (nums1[idx1]<nums2[idx2] || idx2>=m)){
            val = nums1[idx1];
            idx1++;
        }else{
            val = nums2[idx2];
            idx2++;
        }
        ret.push(val);
        count++;
    }
    if (ret.length < 2) return ret[0];
    if (evenStrategy)
        return (ret[ret.length - 1] + ret[ret.length - 2]) / 2;
    return ret[ret.length - 1];
};