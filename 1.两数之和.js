/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let result = []
    for (let i = 0; i < nums.length; i++) {
        const newArr = nums.slice(i + 1)
        let key = i + 1
        for (let j = 0; j < newArr.length; j++) {
            if (nums[i] + newArr[j] === target) {
                result = [ i, key + j ]
                break
            }
        }
    }
    return result
};
// @lc code=end

