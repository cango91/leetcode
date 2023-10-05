function reverse(x: number): number {
    const MAX_INT = 2**31 -1;
    const MIN_INT = -1 * 2**31;
    let result = 0;
    while (x!==0){
        let pop = x % 10;
        x = (x-pop) / 10;
        if(result<(MIN_INT-pop)/10 || result > (MAX_INT-pop)/10) return 0;
        result = result * 10 + pop;
    }
    return result;
};