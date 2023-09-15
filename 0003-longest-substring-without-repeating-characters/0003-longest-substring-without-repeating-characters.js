/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let longest = 0;
    let l = 0, r = 0;
    const encountered = new Set();
    while (r < s.length) {
        if (!encountered.has(s[r])) {
            encountered.add(s[r]);
            r++;
            longest = Math.max(longest, r - l);
        } else {
            encountered.delete(s[l]);
            l++;
            l = Math.min(l,r);
        }
    }
    return longest;
};