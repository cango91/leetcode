/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    const trimmed = s.trim();
    return trimmed.length - trimmed.lastIndexOf(" ") - 1;
};