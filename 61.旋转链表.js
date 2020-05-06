/*
 * @lc app=leetcode.cn id=61 lang=javascript
 *
 * [61] 旋转链表
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
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if (!head || head.next === null) return head
    let demmy = new ListNode(0)
    demmy.next = head
    let flag = 2
    for (let i = 0; i < k; i++) {
        let he = demmy.next
        let cur = he
        while (cur.next.next !== null) {
            cur = cur.next
            flag++
        }
        cur.next.next = he
        demmy.next = cur.next
        cur.next = null
        if (k%flag === 0) {
            k = flag
        } else {
            k = k%flag
        }
    }
    return demmy.next
};
// @lc code=end

