function isPalindrome(x: number): boolean {
    if(x<0) return false;
    let reversed = 0;
    let copyX = x;
    while(x!==0){
        const pop = x % 10;
        x = (x-pop) / 10;
        reversed = reversed* 10 + pop;
    }
    return reversed===copyX;
};