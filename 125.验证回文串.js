/*
 * @lc app=leetcode.cn id=125 lang=javascript
 *
 * [125] 验证回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
// 有问题，没有考虑数字，但是提交也通过了 💦
// var isPalindrome = function(s) {
//     s = s.replace(/\W+/g, "").toLocaleLowerCase()
//     let i = 0
//     let j = s.length - 1
//     while (i <= j) {
//         if (s[i] !== s[j]) return false
//         i++
//         j--
//     }
//     return true
// };
var isPalindrome = function(s) {
    // 排除字母和数字之外的字符
    s = s.replace(/[^\w+][^\d+]/g,"").toLocaleLowerCase()
    // let a = ''
    // s = s.toLocaleLowerCase()
    let i = 0
    let j = s.length - 1
    while (i <= j) {
        if (s[i] !== s[j]) return false
        i++
        j--
    }
    return true
};
// @lc code=end

