/*
 * @lc app=leetcode.cn id=198 lang=javascript
 *
 * [198] 打家劫舍
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    let dp = []
    dp[0] = 0
    dp[1] = 0
    
    for (let i = 2; i < nums.length + 2; i++) {
        dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i - 2])
    }
    return dp[dp.length - 1]
};
/**
 * 用dp[i]表示前i家获取的最高金额，
 * 第i阶段的决策就是两种：偷、不偷。
 * - （偷的话就是当前的房子可以抢的价值）nums[i] + dp[i - 2]
 * - 不偷就是dp[i - 1]
 * 
 * 动态方程：dp[i]=max(dp[i - 1], dp[i - 2] + nums[i])
 */
// @lc code=end

