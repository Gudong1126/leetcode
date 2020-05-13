/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
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
 * @return {boolean}
 */
var hasCycle = function(head) {
    /**
     * 使用快慢指针，快指针没次走两步，慢指针每次走一步，如果存在环
     * 则两个指针必定相遇
     */
    if (head === null || head.next === null) return false

    let dummy = new ListNode()
    dummy.next = head
    let slow = dummy
    let fast = dummy
    let res = false

    while (fast !== null) {
        if (fast.next !== null && fast.next.next !== null) {
            fast = fast.next.next
        } else {
            break
        }
        slow = slow.next
        if (slow === fast) {
            res = true
            break
        }
    }
    return res
};
// @lc code=end

