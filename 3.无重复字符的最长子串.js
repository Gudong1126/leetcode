/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const mapper = {}
    let res = 0
    let slidingWindow = []

    for (const item of s) {
        if (mapper[item]) {
            const index = slidingWindow.findIndex(_c => _c === item)

            for (let i = 0; i < index; i++) {
                mapper[slidingWindow[i]] = false
            }

            slidingWindow = slidingWindow.slice(index + 1).concat(item)
        } else {
            if (slidingWindow.push(item) > res) {
                res = slidingWindow.length
            }
        }
        mapper[item] = true
    }
    return res
};
// @lc code=end

