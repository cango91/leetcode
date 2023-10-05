function convert(s: string, numRows: number): string {
    if(numRows===1 || s.length<= numRows) return s;
    const len = s.length;
    const cyc = 2*numRows-2;
    let r = "";
    for(let i=0;i<numRows;i++){
        for(let j=0; j+i<len; j+=cyc){
            r +=s[j+i];
            if(i!==0 && i!==numRows-1 && j+cyc-i < s.length){
                r+=s[j+cyc-i];
            }
        }
    }
    return r;
};