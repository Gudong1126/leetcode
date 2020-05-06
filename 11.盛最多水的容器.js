/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let res = 0

    for (let i = 0; i < height.length; i++) {
        let right = height[i]

        for (let j = i; j < height.length; j++) {
            const left = height[j]
            
            let min = Math.min(right, left)
            
            let area = min * (j - i)
            if (area > res) {
                res = area
            }
        }
        
    }
    return res

};
// @lc code=end

