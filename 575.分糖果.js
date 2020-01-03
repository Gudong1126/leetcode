/*
 * @lc app=leetcode.cn id=575 lang=javascript
 *
 * [575] 分糖果
 */

// @lc code=start
/**
 * @param {number[]} candies
 * @return {number}
 */
// var distributeCandies = function(candies) {
//     let classify = {}
//     let sister = []
//     let brother = []
//     for (let i = 0; i < candies.length; i++) {
//         const item = candies[i]
//         if (classify[item] === undefined) {
//             if (sister.length === candies.length / 2) {
//                 brother.push(item)
//                 classify[item] = 'brother'
//             } else {
//                 sister.push(item)
//                 classify[item] = 'sister'
//             }
            
//         } else {
//             brother.push(item)
//         }    
//     }
//     let result = 0
//     for (const key in classify) {
//         if (classify.hasOwnProperty(key)) {
//             const element = classify[key]
//             if (element === 'sister') {
//                 result++
//             }
//         }
//     }
//     return result
// };

// 如果糖果种类大于n / 2（糖果种类数为n），妹妹最多可以获得的糖果种类应该是n / 2(因为妹妹只有n / 2个糖).
// 糖果种类数小于n / 2, 妹妹能够得到的糖果种类可以是糖果的种类数（糖果种类本身就这么多）.
var distributeCandies = function(candies) {
    const count = new Set(candies)
    return Math.min(count.size, candies.length >> 1)
};
// @lc code=end

