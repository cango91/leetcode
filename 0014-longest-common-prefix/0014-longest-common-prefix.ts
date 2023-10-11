function longestCommonPrefix(strs: string[]): string {
    if(!strs.length || strs.some(str=>str==="")) return "";
    if(strs.length===1) return strs[0];
    strs.sort((a,b)=> a.length - b.length);
    let exit = false;
    let idx = 0;
    let ret = "";
    while(!exit && idx<strs[0].length){
        const char = strs[0][idx];
        for(let i = 1; i<strs.length; i++){
            if(strs[i][idx]!==char) exit = true;
        }
        if(!exit) ret += char;
        idx++;
    }
    return ret;
};