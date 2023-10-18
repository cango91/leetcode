/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
    let idx = digits.length - 1;
    while (idx >= 0) {
        let carry = false;
        digits[idx] += 1;
        if (digits[idx] >= 10) {
            digits[idx] %= 10;
            carry = true;
        } else {
            break;
        }
        if (idx === 0 && carry) digits.unshift(1);
        idx--;
    }
    return digits;
};