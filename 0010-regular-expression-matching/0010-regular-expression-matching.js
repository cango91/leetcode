/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    p = p.replace(/\*+/g, '*');
    return new RegExp(`^${p}$`).test(s)
};