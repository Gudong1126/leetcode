/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除排序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
/**
 * 使用一个“滑动窗口”
 * 1. 当start，end指向的值相同，end向后移动（---> 此方向为后）
 * 2. 注意，当start 和end 相同，同时指向数组的最后一位，需要特殊处理一下
 * 3. 当start，end指向当内容不相同时，start向前移动到end处，继续此步骤 
 * 
 */

    let start = 0
    let end = 0
    let flag = 0

    while (start <= end && end < nums.length) {
        if (nums[start] === nums[end]) {
            if (end === nums.length - 1) {
                nums[flag] = nums[end]
            }
            end++
        } else {
            nums[flag] = nums[start]
            flag++
            start = end
        }
    }
    return flag + 1
};
// @lc code=end

