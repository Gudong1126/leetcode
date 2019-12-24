/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let money = 0
    let min = prices[0]
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] > prices[i - 1]) {
            money = Math.max(prices[i] - min, money)
        } else {
            min = Math.min(min, prices[i])
        }
    }
    return money
};
// @lc code=end

