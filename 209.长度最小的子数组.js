/*
 * @lc app=leetcode.cn id=209 lang=javascript
 *
 * [209] 长度最小的子数组
 */

// @lc code=start
/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(s, nums) {
    /**
     * 使用双指针进行，从第一位开始，计算sum，当sum满足条件，记录该数组；
     * 然后start++，end = start，再寻找满足条件的数组，如果满足条件的数组
     * 长度小于之前记录的数组长度，进行替换操作
     * 当end到达尾部时，查找结束
     */
    let start = 0
    let end = 0

    let sum = 0

    let arr = []

    while (end < nums.length) {
        sum += nums[end]

        if (sum >= s) {
            const arr2 = nums.slice(start, end + 1)
            start++
            end = start
            sum = 0
            if (arr.length === 0) {
                arr = arr2.slice(0)
            } else if (arr2.length < arr.length) {
                arr = arr2.slice(0)
            }
        } else {
            end++
        }
    }
    return arr.length
};
// @lc code=end

