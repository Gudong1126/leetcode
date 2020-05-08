/*
 * @lc app=leetcode.cn id=16 lang=javascript
 *
 * [16] 最接近的三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {

/**
 * 求最接近的三个数之和，与求三数之和有相似之处，同样使用双指针解决
 * 1. 三数之和（记为A）最接近target，则 A - target 的值越小，距离就越近
 * 2. 数组排序
 * 3. 选定一个数 fristNum，指针 start，end
 * 4. start指针不动，end指针向后移动（---> 此方向记为前），计算
 * 5. 当start指针和end指针相遇，start指针向前移动
 * 6. 直到 start 和 end 在数组尾部相遇，重新选定 fristNum，进入下次循环
 */

    let flag = Infinity
    let res = 0
    nums.sort((a, b) => a - b)

    for (let i = 0; i < nums.length; i++) {
        const fristNum = nums[i]
        let start = i + 1
        let end = nums.length - 1

        while (start < end) {
            const r = fristNum + nums[start] + nums[end]
            const sum = Math.abs(r - target)

            if (sum < flag) {
                flag = sum
                res = r
            }
            end--

            if (start >= end) {
                start++
                end = nums.length - 1
            }
        }
    }
    return res
};
// @lc code=end

