/*
 * @lc app=leetcode.cn id=763 lang=javascript
 *
 * [763] 划分字母区间
 */

// @lc code=start
/**
 * @param {string} S
 * @return {number[]}
 */
var partitionLabels = function(S) {
    /**
     * 同一个字母只会出现在其中的一个片段，可知
     * 找字符出现的最后一个位置 index，那么index后的字符串，肯定不会有该字符
     * 
     * 
     * 取字符串的第一位字符 f1，从后往前查找该字符再次出现的位置 e
     * 接着再取第二位字符 f2，从后往前查找该字符再次出现的位置 endIndex2
     * 比较 e 和 endIndex2 ，如果endIndex2 > e，则赋值 e 为 endIndex2
     * 继续循环，直到循环的下标 i >= e 时结束循环，此时，截取S的 0 -> e + 1
     * 即为分组后的一个子字符串，从S中删除截取后的子字符串，继续循环，直到S的长度为0
     */
    let res = []

    while (S.length > 0) {
        // 取第一个
        let i = 0
        let e = S.lastIndexOf(S[i])

        while (i < e) {
            i++
            let a = S.lastIndexOf(S[i])
            if (a > e) {
                e = a
            }            
        }
        res.push(S.substring(0, e + 1).length)
        console.log(S.substring(0, e + 1))
        S = S.substring(e + 1)
    
    }
    return res
};
// @lc code=end

