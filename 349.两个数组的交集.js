/*
 * @lc app=leetcode.cn id=349 lang=javascript
 *
 * [349] 两个数组的交集
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let obj = {}
    for (const item of nums1) {
        obj[item] = 1
    }
    for (const item of nums2) {
        if (obj[item]) {
            obj[item] = 2
        }
    }
    let arr = []
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            if (obj[key] === 2) {
                arr.push(key)
            }
        }
    }
    return arr
};
// @lc code=end

