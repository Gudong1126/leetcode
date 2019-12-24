/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let arr = []
    let map = {
        '(': ')',
        '{': '}',
        '[': ']'
    }
    if (s.length === 0) return true

    for (const i in s) {
        const e = s[i]
        if (['(', '{', '['].indexOf(e) > -1) {
            arr.push(e)
        } else {
            let El = arr.pop()
            // map[lastEl] === item
            if (e !== map[El]) {
                return false
            }
        }
    }

    if (arr.length > 0) return false

    return true
};
// @lc code=end

/* 
* 思路：
* 使用栈,遍历输入字符串
* 如果当前字符为左半边括号时，则将其压入栈中
* 如果遇到右半边括号时，分类讨论：
* 1）如栈不为空且为对应的左半边括号，则取出栈顶元素，继续循环
* 2）若此时栈为空，则直接返回false
* 3）若不为对应的左半边括号，反之返回false
*/
