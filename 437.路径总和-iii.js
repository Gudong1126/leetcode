/*
 * @lc app=leetcode.cn id=437 lang=javascript
 *
 * [437] 路径总和 III
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number}
 */
var pathSum = function(root, sum) {
    if (root === null) return 0

    const self = helper(root, sum)
    const l = pathSum(root.left, sum)
    const r = pathSum(root.right, sum)

    return self + l+ r
};
function helper(root, sum) {
    if (root === null) return 0
    const l = helper(root.left, sum - root.val)
    const r = helper(root.right, sum - root.val)

    return l + r + (root.val === sum ? 1 : 0)
}
// @lc code=end

