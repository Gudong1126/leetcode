/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    /**
     * 转换成字符串来解决
     */
    let s = x + ''

    let start = 0
    let end = s.length - 1

    let res = false

    while (start <= end) {
        if (s[start] === s[end]) {
            start++
            end--
        } else {
            break
        }
        if (start >= end) {
            res = true
        }
        // if (start === end || start + 1 === end) {
        //     res = true
        // }
    }
    return res

};
// @lc code=end

