/*
 * @lc app=leetcode.cn id=169 lang=javascript
 *
 * [169] 求众数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// var majorityElement = function(nums) {
//     let halfLen = nums.length / 2
//     let obj = {}
//     for (let i = 0; i < nums.length; i++) {
//         const element = nums[i]
//         if (obj[element]) {
//             obj[element] += 1
//         } else {
//             obj[element] = 1
//         }
//     }
//     for (const key in obj) {
//         if (obj.hasOwnProperty(key)) {
//             const element = obj[key];
//             if (element > halfLen) {
//                 return key
//             }
//         }
//     }
// };
var majorityElement = function(nums) {
    let majority = nums[0]
    let count = 1
    for (let i = 0; i < nums.length; i++) {
        const element = nums[i];
        if (count === 0) {
            majority = element
        }
        if (majority === element) {
            count ++
        } else {
            count --
        }
    }
    return majority
};
// @lc code=end

