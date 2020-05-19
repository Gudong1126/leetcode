/*
 * @lc app=leetcode.cn id=56 lang=javascript
 *
 * [56] 合并区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    /**
     * 先根据每一项的第一个数进行排序
     * 维护一个res，遍历数组，将res的最后一个元素和排序后的intervals元素
     * 依次对比，判断是否重叠，如果重叠就将res最后一个元素替换，
     * 不重叠就直接将当前遍历的intervals元素push进res
     * 最后返回res即可
     */
    let res = []

    intervals.sort((a, b) => {
        return a[0] - b[0]
    })

    let i = 0
    let len = intervals.length
    while (i < len) {
        let item = intervals[i]
        let d
        if (res.length === 0) {
            res.push([item[0], item[1]])
            i++
            continue
        } else {
            d = res[res.length - 1]
        }
        console.log(d)
        if (d[1] >= item[0]) {
            let end = d[1] < item[1] ? item[1] : d[1]
            res.splice(res.length - 1, 1, [d[0], end])
        } else {
            res.push([item[0], item[1]])
        }
        i++
    }
    return res
};
// @lc code=end

