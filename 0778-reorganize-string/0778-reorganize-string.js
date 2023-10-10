/**
 * @param {string} s
 * @return {string}
 */
var reorganizeString = function(s) {
    const freq = s.split("").reduce((acc,el)=> (acc[el] ? acc[el]++ : acc[el]=1,acc),{});
    const sorted = Object.entries(freq).sort((a,b)=>b[1]-a[1]);
    const n = s.length;
    let result = Array(n);
    let idx = 0;
    for(let [char,count] of sorted ){
        // If there is some character c with freq(c)>(n+1)/2 then it is impossible
        if(Math.floor((n+1)/2)<count) return "";
        // Alternate placing the most common letters
        while(count>0){
            count--;
            if(idx>=n) idx = 1; // start filling even indexes
            result[idx] = char;
            idx += 2;
        }

    }
    return result.join("");
};