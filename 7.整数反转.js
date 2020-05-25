/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    // 转换为字符串，再反转
    let str = x + ''

    let arr = str.split('').reverse()
    if (arr[arr.length - 1] === '-') {
        arr.pop()
        arr.unshift('-')
    }
    let s = arr.join('')
    let num = parseInt(s)
    if (num > Math.pow(2, 31) - 1 || num < -Math.pow(2, 31)) {
        return 0
    } else {
        return num
    }
};
// @lc code=end

