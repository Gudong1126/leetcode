/*
 * @lc app=leetcode.cn id=42 lang=javascript
 *
 * [42] 接雨水
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
// var trap = function(height) {
//     /**
//      * 我最早的思路，分别把所有能够形成水洼的数组找出来，然后计算
//      * 但是失败，[9,6,8,8,5,6,3]测试失败
//      */
//     let res = 0
//     let start = 0
//     let end = 0
//     let arr = []

//     let s = 0
//     let j = 0

//     let flag = 0

//     while (end < height.length - 1) {
//         if (height[start] === 0) {
//             start++
//             end++
//         } else {
//             // 计算是 上升 还是 下降
//             if (height[end + 1] < height[end]) {
//                 flag = 0
//             } else {
//                 flag = 1
//             }

//             end++
//             if (flag === 1 && height[end] >= s) {
//                 s = height[end]
//                 j = end
//             }
//             // 当end 比start大时，该组合必定形成一个水洼
//             if (height[end] >= height[start]) {
//                 arr = height.slice(start, end + 1)
//                 start = end
//                 s = 0
//             // 当end到结尾处，但是没有找到比start大的数，使用 j 进行分割，
//             // 就是因为j的位置不好处理，造成这种方法的失败
//             } else if (end === height.length - 1) {
//                 arr = height.slice(start, j + 1)
//             }

//             if (arr[0] > arr[arr.length - 1]) {
//                 arr = arr.reverse()
//             }
//             let i = 1
//             while (i < arr.length) {
//                 if (arr[0] > arr[i]) {
//                     res += (arr[0] - arr[i])
//                 }
//                 i++
//             }
//             arr = []
//         }
//     }
//     return res
// };
var trap = function(height) {
    /**
     * 思路2: 确定最高的柱子位置，那么形成的水洼肯定在该柱子的两侧，
     * 即决定水洼的低柱子在高柱子的两侧，结合示例，更好理解
     */
    // 确定最高柱子以及下标
    const max = Math.max.apply(null, height)
    const maxIndex = height.indexOf(max)
    let i = 0, temp = 0, result = 0

    // 循环左侧
    for (i = 0; i < maxIndex; i++) {
        if (height[i] >= temp) {
            temp = height[i]
        } else {
            result += temp - height[i]
        }
    }
    temp = 0
    // 循环右侧
    for (i = height.length - 1; i > maxIndex; i--) {
        if (height[i] >= temp) {
            temp = height[i]
        } else {
            result += temp - height[i]
        }
    }
    return result
};
// var trap = function(height) {
//     /**
//      * 思路3: 使用对撞指针，结合示例更清楚
//      */
//     if (!height || !height.length) {
//         return 0;
//     }
    
//     let maxLeftWall = 0;
//     let maxRightWall = 0;
    
//     let water = 0;
//     let i = 0;
//     let j = height.length - 1;
//     while (i < j) {
//         if (height[i] < height[j]) {
//             if (height[i] >= maxLeftWall) {
//                 maxLeftWall = height[i];
//             } else {
//                 water += maxLeftWall - height[i];
//             }
//             i++;
//         } else {
//             if (height[j] >= maxRightWall) {
//                 maxRightWall = height[j];
//             } else {
//                 water += maxRightWall - height[j];
//             }
//             j--;
//         }
//     }
    
//     return water;
// };
// @lc code=end

