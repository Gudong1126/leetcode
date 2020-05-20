/*
 * @lc app=leetcode.cn id=6 lang=javascript
 *
 * [6] Z 字形变换
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    /**
     * 重点是找规律，假设有字符串"012345678910"，按row = 4行转换为Z型后为
     * 0     6
     * 1   5 7
     * 2 4   8 10
     * 3     9
     * 可见，0 -> 6, 1 ->7, 2 -> 8, 3 -> 9 间距都是 6 即：(row + (row - 2)) = space 
     * 而 1 -> 5, 2 -> 4 间距为 space - i，间距减去当前行
     * 由此规律解决问题
     */
    let r = numRows - 2
    if (r < 0) {
        return s
    }
    let space = numRows + r
    let i = 0
    let len = s.length
    let res = ''
    while (i < numRows) {
        let j = i
        let iSpace = (space - i) - i
        let flag = 0
        while (j < len) {
            res = res + s[j]
            if (i === 0 || i === numRows - 1) {
                j = j + space
            } else {
                if (flag === 0) {
                    j = j + iSpace
                    flag = 1
                } else {
                    j = j + (space - iSpace)
                    flag = 0
                }
                
            }
        }
        i++
    }
    return res
};
// @lc code=end

