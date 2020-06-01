/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
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
var inorderTraversal = function(root) {
    /**
     * 递归式
     */
    // let res = []

    // function test (r) {
    //     if (!r) return

    //     test(r.left)
    //     res.push(r.val)
    //     test(r.right)
    // }
    // test(root)
    // return res

    /**
     * 循环式
     */
    // 定义结果数组
    const res = []  
    // 初始化栈结构
    const stack = []   
    // 用一个 cur 结点充当游标
    let cur = root  
    // 当 cur 不为空、或者 stack 不为空时，重复以下逻辑
    while(cur || stack.length) {
        // 这个 while 的作用是把寻找最左叶子结点的过程中，途径的所有结点都记录下来 
        while(cur) {
            // 将途径的结点入栈
            stack.push(cur)  
            // 继续搜索当前结点的左孩子
            cur = cur.left  
        }
        // 取出栈顶元素
        cur = stack.pop()  
        // 将栈顶元素入栈
        res.push(cur.val)  
        // 尝试读取 cur 结点的右孩子
        cur = cur.right
    }
    // 返回结果数组
    return res
};
// @lc code=end

