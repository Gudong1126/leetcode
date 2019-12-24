/*
 * @lc app=leetcode.cn id=172 lang=javascript
 *
 * [172] 阶乘后的零
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
// 这个方法 result 比较大的会变成科学计数法的形式，这种方法就无效了
// var trailingZeroes = function(n) {
//     let result = 1
//     for (let i = 1; i <= n; i++) {
//         result *= i
//     }
//     let value = (result + '').replace(/0+$/g, '')
//     return (result + '').length - value.length
// };

// https://github.com/azl397985856/leetcode/blob/master/problems/172.factorial-trailing-zeroes.md
// 如果想要结果末尾是0，必须是分解质因数之后，2 和 5 相乘才行，
// 同时因数分解之后发现5的个数远小于2，
// 因此我们只需要求解这n数字分解质因数之后一共有多少个5即可.
var trailingZeroes = function(n) {
    // tag: 数论

    // if (n === 0) return n;

    // 递归： f(n) = n / 5 + f(n / 5)
    // return Math.floor(n / 5)  + trailingZeroes(Math.floor(n / 5));
    let count = 0;
    while (n >= 5) {
        count += Math.floor(n / 5);
        n = Math.floor(n / 5);
    }
    return count;
};
// @lc code=end

