/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    /**
     * 递归方式实现
     * 
     */
    // let res = []
    // if (!root) return res

    // let helper = (node, level) => {
    //     if (res.length === level) {
    //         res.push([])
    //     }

    //     res[level].push(node.val)

    //     if (node.left) {
    //         helper(node.left, level + 1)
    //     }
    //     if (node.right) {
    //         helper(node.right, level + 1)
    //     }
    // }
    // helper(root, 0)
    // return res

    /**
     * 迭代实现
     */
    let res = []
    if (!root) return res
    let level = 0
    let queue = []
    queue.push(root)

    while (queue.length) {
        res.push([])
        let level_length = queue.length

        for (let i = 0; i < level_length; i++) {
            let node = queue.shift()
            res[level].push(node.val)

            if (node.left) {
                queue.push(node.left)
            }
            if (node.right) {
                queue.push(node.right)
            }
            
        }
        level++
    }
    return res

};
// @lc code=end

