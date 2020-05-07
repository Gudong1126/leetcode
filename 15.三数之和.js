/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// var threeSum = function(nums) {

// 先排序
// 三个数，先确定一个数A，然后在后面的数组中找两个数的和（B+C）等于A
// 两层for循环
// 这个方法超时

//     let visitor = {}
//     let res = []
//     nums = nums.sort((a, b) => a - b)

//     function foo (item) {
//         const x = 0 - item
//         const visitor1 = {}

//         for (let i = 0; i < nums.length; i++) {
//             const numTwo = nums[i]
//             if (!visitor1[numTwo]) {
//                 visitor1[numTwo] = 1
//                 const y = x - numTwo

//                 for (let j = i + 1; j < nums.length; j++) {
//                     if (nums[j] === y) {
//                         res.push([item, numTwo, y])
//                         break
//                     }
//                 }
//             } else {
//                 continue
//             }
//         }
//     }

//     while (nums.length >= 3) {
//         const num = nums.shift()
//         if (!visitor[num]) {
//             visitor[num] = 1
//             foo(num)
//         }
//     }

//     return res
// };
var threeSum = function(nums) {
 /**
 * 先进行排序
 * 确定一个数A（从排序后的数组头部开始），寻找另外两个数B和C，使得 B + C = -A
 * 使用双指针，B取紧挨着A后的数，C取数组末尾的数
 * 如果 B + C > -A, C向前移一位
 * 如果 B + C < -A，B向后移一位
 * 如果 B + C = -A，获取到结果。B，C指针同时移动，如果移动后B，C和之前的数相同，继续移动
 *  
 */
    // 排序
    nums.sort((a, b) => a - b)

    let flag = 0
    let res = []

    for (let i = 0; i < nums.length; i++) {
        // 如果当前的数和前一个数相同，continue        
        if(nums[i] === nums[i-1]) continue
        flag = 0 - nums[i];
        // 左指针
        let left = i + 1
        // 右指针
        let right = nums.length - 1

        while (left < right) {
            if (nums[left] + nums[right] > flag) {
                right--
            } else if (nums[left] + nums[right] < flag) {
                left++
            } else if (nums[left] + nums[right] === flag) {
                res.push([nums[i], nums[right], nums[left]])
                right--
                left++
                while (left < right && nums[left] === nums[left - 1]) {
                    left++
                }
                while (left < right && nums[right] === nums[right + 1]) {
                    right--
                }
            }
        }
        
    }
    return res

};
// @lc code=end

