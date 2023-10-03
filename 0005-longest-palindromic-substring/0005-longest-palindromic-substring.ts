function longestPalindrome(s: string): string {
    let modified = "#";
    for (let char of s) {
        modified += char + "#";
    }
    const n = modified.length;

    const P: number[] = Array(n).fill(0);
    let c = 0, r = 0;

    for (let i = 0; i < n; i++) {
        const m = 2 * c - i;
        if(i<r){
            P[i] = Math.min(r-i, P[m]);
        }

        let left = i - P[i] - 1;
        let right = i + P[i] + 1;

        while(left>=0 && right<n && modified[left] === modified[right]){
            P[i]++;
            left--;
            right++;
        }

        if(i + P[i] > r){
            c = i;
            r = i + P[i];
        }

    }

    const max = Math.max(...P);
    const idx = P.indexOf(max);
    const idxOrig = Math.floor(idx/2) - Math.floor(max/2);

    return s.substring(idxOrig,idxOrig+max);
};