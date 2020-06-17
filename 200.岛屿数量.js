/*
 * @lc app=leetcode.cn id=200 lang=javascript
 *
 * [200] 岛屿数量
 */


// @lc code=start
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    /**
     * 首先loop图的每个节点，对于每个节点，判断当前的值是否是‘1’，是‘1’的话岛屿数 + 1
     * 
     * 并开始按照DFS进行 ‘右下左上‘的递归搜索，同时将搜索过的节点设成’0‘，
     * 意思是说，将已经记过数的岛屿消除在了图里。
     * 
     * 比如第一次遍历之后，
     *    图会从原来的
     *    11000
     *    11000
     *    00100
     *    00011
     *    变成
     *    00000
     *    00000
     *    00100
     *    00011
     * 
     */
    let count = 0

    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[0].length; col++) {
            if (grid[row][col] === '1') {
                count++
                dfs(grid, row, col)
            }
            
        }
        
    }
    return count
};
function dfs (grid, row, col) {
    if (row < 0 || col < 0 || col > grid[0].length - 1 || row > grid.length - 1 ||grid[row][col] === '0') return
    grid[row][col] = '0'
    dfs(grid, row, col + 1)
    dfs(grid, row + 1, col)
    dfs(grid, row, col - 1)
    dfs(grid, row - 1, col)
}
// @lc code=end

