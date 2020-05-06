/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第N个节点
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let demmy = new ListNode(0)
    demmy.next = head
    let first = demmy
    let last = demmy
    let flag = 0

    while (first.next !== null) {
        if (flag === n) {
            first = first.next
            last = last.next
        } else {
            first = first.next
            flag++
        }
    }
    last.next = last.next.next
    return demmy.next
};
// @lc code=end

