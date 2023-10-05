function canMouseWin(grid: string[], catJump: number, mouseJump: number): boolean {
    const rows = grid.length;
    const cols = grid[0].length;
    const memo: any = {};
    let catPos:number[], mousePos:number[], foodPos:number[];

    // Find initial positions
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (grid[i][j] === 'C') catPos = [i, j];
            else if (grid[i][j] === 'M') mousePos = [i, j];
            else if (grid[i][j] === 'F') foodPos = [i, j];
        }
    }

    function dfs(mouse: number[], cat: number[], turn: number): boolean {
        // Base cases
        if (turn >= 100) return false;
        if (mouse[0] === foodPos[0] && mouse[1] === foodPos[1]) return true;
        if (cat[0] === foodPos[0] && cat[1] === foodPos[1]) return false;
        if (cat[0] === mouse[0] && cat[1] === mouse[1]) return false;

        // Use memoization
        const key = `${mouse[0]},${mouse[1]}-${cat[0]},${cat[1]}-${turn}`;
        if (memo[key] !== undefined) return memo[key];

        const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
        if (turn % 2 === 0) { // Mouse's turn
            for (const dir of directions) {
                for (let jump = 0; jump <= mouseJump; jump++) {
                    const newX = mouse[0] + dir[0] * jump;
                    const newY = mouse[1] + dir[1] * jump;
                    if (newX < 0 || newX >= rows || newY < 0 || newY >= cols || grid[newX][newY] === '#') break;
                    if (dfs([newX, newY], cat, turn + 1)) {
                        memo[key] = true;
                        return true;
                    }
                }
            }
        } else { // Cat's turn
            for (const dir of directions) {
                for (let jump = 0; jump <= catJump; jump++) {
                    const newX = cat[0] + dir[0] * jump;
                    const newY = cat[1] + dir[1] * jump;
                    if (newX < 0 || newX >= rows || newY < 0 || newY >= cols || grid[newX][newY] === '#') break;
                    if (!dfs(mouse, [newX, newY], turn + 1)) {
                        memo[key] = false;
                        return false;
                    }
                }
            }
        }
        memo[key] = (turn % 2) === 1; // If all attempts fail, return true for Cat's turn and false for Mouse's turn
        return memo[key];
    }

    return dfs(mousePos, catPos, 0);
}