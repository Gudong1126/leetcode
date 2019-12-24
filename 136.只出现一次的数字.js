/*
 * @lc app=leetcode.cn id=136 lang=javascript
 *
 * [136] 只出现一次的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let obj = {}
    let result = 0
    for (let i = 0; i < nums.length; i++) {
        if (obj[nums[i]]) {
            obj[nums[i]]++
        } else {
            obj[nums[i]] = 1
        }
    }
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            if (obj[key] === 1) {
                result = key   
            }
        }
    }
    return result
};
/**
 * 通过异或的解法：
 * 
 * 任何数和本身异或则为0
 * 任何数和 0 异或是本身
 */
// var singleNumber = function(nums) {
//     let ret = 0;
//     for (let index = 0; index < nums.length; index++) {
//         const element = nums[index];
//         ret = ret ^ element;
//     }
//     return ret;
// };
// @lc code=end

