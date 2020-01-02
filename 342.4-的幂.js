/*
 * @lc app=leetcode.cn id=342 lang=javascript
 *
 * [342] 4的幂
 */

// @lc code=start
/**
 * @param {number} num
 * @return {boolean}
 */
var isPowerOfFour = function(num) {
    if (num === 1) return true
    while (num >= 4) {
        num = num / 4
        if (num === 1) {
            return true
        }
    }
    return false
};
// @lc code=end

