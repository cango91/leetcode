function reverse(x: number): number {
    let strRet : string;
    let strNum: string;
    let neg = x<0;
    if(neg) strNum=String(x).substring(1);
    else
    strNum=String(x);
    strRet = strNum.split("").reverse().join("");
    let ret = Number(strRet);
    if(neg) ret *= -1;
    if(ret >= -1 * 2**31 && ret<= 2**31 -1) return ret;
    return 0;
};