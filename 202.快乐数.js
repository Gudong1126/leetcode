/*
 * @lc app=leetcode.cn id=202 lang=javascript
 *
 * [202] 快乐数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    /**
     * 通过一个hash 表 来保存已经计算出来的数，如果出现重复，那就肯定是无限循环
     */
    let obj = {}
    let res = false

    while (true) {
        let s = n + ''
        let arr = s.split('')
        let sum = 0
        for (let i = 0; i < arr.length; i++) {
            sum += Math.pow(arr[i], 2)
        }
        n = sum
        if (sum === 1) {
            res = true
            break
        } else if (obj[sum]) {
            break
        } else {
            obj[sum] = true
        }
    }
    return res
};
// @lc code=end

