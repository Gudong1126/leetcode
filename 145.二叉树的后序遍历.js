/*
 * @lc app=leetcode.cn id=145 lang=javascript
 *
 * [145] 二叉树的后序遍历
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
var postorderTraversal = function(root) {
    // 递归
    // let res = []

    // function fnc (r) {
    //     if(!r) {
    //         return
    //     }

    //     fnc(r.left)
    //     fnc(r.right)
    //     res.push(r.val)
    // }
    // fnc(root)
    // return res

    // 循环
    let res = []
    if (!root) return res
    let stack = []
    stack.push(root)
    while (stack.length) {
        let cur = stack.pop()
        res.unshift(cur.val)
        if(cur.left) {
            stack.push(cur.left)
        }
        if(cur.right) {
            stack.push(cur.right)
        }
        
        
    }
    return res
};
// @lc code=end

