/*
 * @lc app=leetcode.cn id=167 lang=javascript
 *
 * [167] 两数之和 II - 输入有序数组
 */

// @lc code=start
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let index1 = 0
    let index2 = 0
    for (let i = 0; i < numbers.length; i++) {
        // const element = array[i];
        for (let j = i + 1; j < numbers.length; j++) {
            // const element = array[j];
            if (numbers[i] + numbers[j] === target) {
                index1 = i + 1
                index2 = j + 1
            }
        }
        
    }
    return [index1, index2]
};
// 更多解法：https://github.com/azl397985856/leetcode/blob/master/problems/167.two-sum-ii-input-array-is-sorted.md
// @lc code=end

