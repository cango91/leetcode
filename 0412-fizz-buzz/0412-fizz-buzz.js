/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    return Array(n).fill(null).map((_,i) => (i+1) % 3 == 0 && ( (i+1) % 5) == 0 ? "FizzBuzz" : (i+1) % 3 === 0 ? "Fizz" :( i+1) % 5 === 0 ? "Buzz" : (i+1).toString());
};