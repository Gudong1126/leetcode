/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// 该方法超时
// var maxSubArray = function(nums) {
//     let maxSum = null
//     for (let start = 0; start < nums.length; start++) {
//         for (let end = start; end < nums.length; end++) {
//             let resultItem = 0
//             for (let i = start; i <= end; i++) {
//                 resultItem += nums[i]
//             }
//             if (maxSum === null) {
//                 maxSum = resultItem
//             } else {
//                 if (resultItem > maxSum) {
//                     maxSum = resultItem
//                 }
//             }
//         }
//     }
//     return maxSum
// };
// 超时
// var maxSubArray = function(nums) {
//     let arr1 = []
//     let arr2 = []
//     for (let i = 0; i < nums.length; i++) {
//         arr1.push(sum(nums, i))
//         arr2.push(sum(nums, i - 1))

//     }
//     arr2.shift()
//     let max = Math.max(...arr1)
//     let min = Math.min(...arr2)
//     if (arr2.length === 0) {
//         return max 
//     }
//     if (max === min) return max
//     return max - min
// };
// var sum = function(nums, index) {
//     let num = 0
//     if (index < 0) return num
//     for (let i = 0; i <= index; i++) {
//         num += nums[i]
//     }
//     return num
// }
var maxSubArray = function(nums) {
    let max = nums[0]
    let min = 0
    let sum = 0
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i]
        if (sum - min > max) {
            max = sum - min
        }
        if (sum < min) {
            min = sum
        }
    }
    return max
};
// https://github.com/azl397985856/leetcode/blob/master/problems/53.maximum-sum-subarray-cn.md
// @lc code=end

