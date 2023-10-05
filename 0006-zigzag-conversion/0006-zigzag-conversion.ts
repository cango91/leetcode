function convert(s: string, numRows: number): string {
    if(numRows===1 || s.length<= numRows) return s;
    const rows = Array(numRows).fill(null).map(()=>Array(0));
    let dir = "⬇";
    for (let i = 0, j = 0; i < s.length; i++) {
        rows[j].push(s[i]);
        if(dir==="⬇"){
            j++;
            if(j===numRows-1){
                dir="⬆";
            }
        }else{
            j--;
            if(j===0){
                dir="⬇";
            }
        }
    }
    return rows.reduce((acc,el)=>acc+=el.join(""),"");
};