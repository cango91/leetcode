/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(string) {
    const openers = new Set(['(','[','{']);
  dict = { 
         '{' : '}',
         '[':']',
         '(':')'
          };
  count = {
    '{' :0,
    '[':0,
    '(':0
  }
  openStack = [];
  for(let i=0;i<string.length;i++){
    if(openers.has(string[i])){
      openStack.push(string[i]);
      count[[string[i]]]++;
    }else{
      char = openStack.pop();
      if(!char) return false
      if(string[i]===dict[char] && count[char]){
        count[char]--;
      }else{
        return false;
      }   
    }
  }
  if(openStack.length) return false
  return true;
};