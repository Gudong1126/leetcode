/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
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
 * @return {number[]}
 */
var preorderTraversal = function(root) {
    /**
     * 递归
     */
    // let res = []

    // function fnc (r) {
    //     if (!r) return

    //     res.push(r.val)
    //     fnc(r.left)
    //     fnc(r.right)
    // }
    // fnc(root)
    // return res

    let res = []
    if(!root) {
        return res
    }

    let stack = []

    stack.push(root)

    while (stack.length) {
        let cur = stack.pop()
        res.push(cur.val)
        if (cur.right) {
            stack.push(cur.right)
        }

        if (cur.left) {
            stack.push(cur.left)
        }
    }
    return res
};
// @lc code=end

