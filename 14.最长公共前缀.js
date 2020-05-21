/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    /**
     * 没此取每一项的第一个比就行了，相同就记录，不同就返回
     */
    let res = ''
    let i = 0 // 指当前数组的下标
    let j = 0 // 指数组项，字符串的下标

    let current = '' // 当前对比的字符
    while (i < strs.length) {
        if (strs[i][j] === undefined) {
            break
        }

        if (current === '') {
            current = strs[i][j]
        } else if (current !== strs[i][j]) {
            break
        }
        i++
        if (i === strs.length) {
            res = res + current
            current = ''
            i = 0
            j++
        }
    }
    return res
};
// @lc code=end

