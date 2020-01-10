/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s 
 * @return {string}
 */
// 暴力解  超时
var longestPalindrome = function(s) {
    if (s === '') return ''
    if (s.length === 1) return s

    let start = 0
    let maxLength = 1
    
    for (let i = 0; i < s.length; i++) {
        
        for (let j = i + 1; j < s.length; j++) {
            
            let temp1 = i
            let temp2 = j
            for (temp1, temp2; temp1 < temp2; temp1++, temp2--){
                if (s[temp1] !== s[temp2]) {
                    break
                }
            
            }

            if (temp1 >= temp2 && j-i+1 > maxLength) {
                maxLength = j-i+1;
                start=i;
            }
            
        }
        
    }
    return s.slice(start, start + maxLength)
};
// @lc code=end

