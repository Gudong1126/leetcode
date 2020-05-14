/*
 * @lc app=leetcode.cn id=876 lang=javascript
 *
 * [876] 链表的中间结点
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    /**
     * 先遍历一遍找出长度，计算中间点index，然后再循环找到中间节点返回
     */
    let dummy = new ListNode(-1)
    dummy.next = head

    let i = 0

    while (head.next !== null) {
        i++
        head = head.next    
    }
    let j = Math.round(i / 2)
    
    head = dummy.next

    for (let i = 0; i < j; i++) {
        head = head.next
    }
    return head
};
// @lc code=end

