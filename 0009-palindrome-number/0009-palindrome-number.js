/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x<0) return false;
    const s = String(x);
    let l=0, h=s.length-1;
    while(l<=h){
        if(s.charCodeAt(l)!==s.charCodeAt(h)) return false;
        l++;
        h--;
    }
    return true;
};