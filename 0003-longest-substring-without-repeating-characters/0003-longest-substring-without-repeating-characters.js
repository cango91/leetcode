/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    const constructSubstring = (start, string) => {
        let substr = "";
        for (let i = start; i < string.length; i++) {
            if (substr.includes(string[i])) break;
            substr += string[i];
        }
        return substr;
    }
    let longest = 0;
    const candidates = [];
    for (let i = 0; i < s.length; i++) {
        if (s.length - i < longest) break;
        candidates.push(constructSubstring(i,s).length);
        longest = Math.max(...candidates);
    }
    return longest;
};