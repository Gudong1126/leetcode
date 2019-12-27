/*
 * @lc app=leetcode.cn id=219 lang=javascript
 *
 * [219] 存在重复元素 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    let obj = {}
    for (let i = 0; i < nums.length; i++) {
        const element = nums[i]
        
        if (obj[element] !== undefined) {
            for (let j = 0; j < obj[element].length; j++) {
                const item = obj[element][j];
                if (Math.abs(item - i) <= k) {
                    return true
                }
            }
            obj[element].push(i)
        } else {
            obj[element] = [i]
        }

    }
    return false
};
// 这题 [99, 99] 2 不让通过，这个不是false？？
// 最大为k =_=!!
// @lc code=end

