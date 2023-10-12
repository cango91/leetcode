/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    const map = {
      1: ["", "I", "II","III", "IV", "V", "VI","VII","VIII","IX"],
      10: ["","X","XX","XXX","XL","L","LX","LXX","LXXX","XC"],
      100: ["", "C", "CC","CCC","CD","D","DC","DCC","DCCC","CM"],
      1000: ["","M","MM","MMM"]
    }
    return map[1000][Math.floor(num/1000)] + 
    map[100][Math.floor((num%1000)/100)] + 
    map[10][Math.floor((num%100)/10)] + 
    map[1][((num%10))];
};