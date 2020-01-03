/*
 * @lc app=leetcode.cn id=371 lang=javascript
 *
 * [371] 两整数之和
 */

// @lc code=start
/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(a, b) {
    if (a === 0) return b;

    if (b === 0) return a;

    return getSum(a ^ b, (a & b) << 1)
};
// 异或可以看做是不进位的加减法
// 求与之后左移一位表进位

// 异或 ^ 相同位0 不通位1
// 与 & 全部为1则位1，否则位0
// < 左移一位
// @lc code=end

