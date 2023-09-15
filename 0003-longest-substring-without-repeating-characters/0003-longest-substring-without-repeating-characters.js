/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let longest = 0;
    const candidates = [];
    for (let i = 0; i < s.length; i++) {
        if (s.length - i < longest) break;
        candidates.push((() => {
            let substr = "";
            for (let j = i; j < s.length; j++) {
                if (substr.includes(s[j])) break;
                substr += s[j];
            }
            return substr.length;
        })());
        longest = Math.max(...candidates);
    }
    return longest;
};