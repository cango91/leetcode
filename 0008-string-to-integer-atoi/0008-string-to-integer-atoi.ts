function myAtoi(s: string): number {
    const MIN_INT = -1 * 2**31;
    const MAX_INT = 2**31 -1;
    const int = parseInt(s);
    if(Number.isNaN(int)) return 0;
    return Math.max(MIN_INT,Math.min(MAX_INT,int));
};