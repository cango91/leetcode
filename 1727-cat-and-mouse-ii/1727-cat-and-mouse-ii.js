/**
 * @param {string[]} grid
 * @param {number} catJump
 * @param {number} mouseJump
 * @return {boolean}
 */
const canMouseWin = function (grid, catJump, mouseJump) {
    const rows = grid.length;
    const cols = grid[0].length;
    const memo = {};
    const MAX_TURNS = 100;

    let mPos, fPos, cPos;

    const dirs = [[0, 1], [1, 0], [0, -1], [-1, 0]];

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (grid[i][j] === 'F') fPos = [i, j];
            else if (grid[i][j] === 'C') cPos = [i, j];
            else if (grid[i][j] === 'M') mPos = [i, j];
        }
    }

    function dfs(c, m, t) {
        // base
        if (m[0] === fPos[0] && m[1] === fPos[1]) return true;
        if (c[0] === m[0] && c[1] === m[1]) return false;
        if (c[0] === fPos[0] && c[1] === fPos[1]) return false;
        if (t >= MAX_TURNS) return false;

        // memocan
        const key = `${m[0]},${m[1]}-${c[0]},${c[1]}-${t}`;
        if (memo[key] !== undefined) return memo[key];

        // mouse turn
        if (t % 2 === 0) {
            for (const dir of dirs) {
                for (let jump = 0; jump <= mouseJump; jump++) {
                    newI = m[0] + dir[0] * jump;
                    newJ = m[1] + dir[1] * jump;
                    if (newI < 0 || newJ < 0 || newI >= rows || newJ >= cols || grid[newI][newJ] === '#') break;

                    if (dfs(c, [newI, newJ], t + 1)) {
                        memo[key] = true;
                        return true;
                    }
                }
            }
        } else {
            // cat turn
            for (const dir of dirs) {
                for (let jump = 0; jump <= catJump; jump++) {
                    newI = c[0] + dir[0] * jump;
                    newJ = c[1] + dir[1] * jump;
                    if (newI < 0 || newJ < 0 || newI >= rows || newJ >= cols || grid[newI][newJ] === '#') break;

                    if (!dfs([newI, newJ], m, t + 1)) {
                        memo[key] = false;
                        return false;
                    }
                }
            }
        }
        memo[key] = t % 2 === 1;
        return memo[key];
    }
    return dfs(cPos, mPos, 0);
};