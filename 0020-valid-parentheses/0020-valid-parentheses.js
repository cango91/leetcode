/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(string) {
    const openers = new Set(['(','[','{']);
  const dict = { 
         '{' : '}',
         '[':']',
         '(':')'
          };
  const openStack = [];
  for(let i = 0; i<string.length;i++){
    if(openers.has(string[i])){
      openStack.push(string[i]);
    }else{
      if(dict[openStack[openStack.length-1]]!==string[i]){
        return false;
      }
      openStack.pop();
    }
  }
  if(openStack.length) return false;
  return true;
};