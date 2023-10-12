function isValid(s: string): boolean {
  if(s.length % 2) return false;
  const openers = new Set(['(','[','{']);
  const dict = { 
         '{' : '}',
         '[':']',
         '(':')'
          };
  const openStack = [];
  for(let i = 0; i<s.length;i++){
    if(openers.has(s[i])){
      openStack.push(s[i]);
    }else{
      if(dict[openStack[openStack.length-1]]!==s[i]){
        return false;
      }
      openStack.pop();
    }
  }
  if(openStack.length) return false;
  return true;
};