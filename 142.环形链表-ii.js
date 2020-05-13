/*
 * @lc app=leetcode.cn id=142 lang=javascript
 *
 * [142] 环形链表 II
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
var detectCycle = function(head) {
    /**
     * 依然快慢指针，慢指针一步走，快指针两步走
     * 当有环的时候，必定相遇，相遇后将慢指针重新指向链表开头，然后快慢指针都一步走
     * 再相遇的时候就是环入口
     * dummy -> 3 -> 2 -> 0 -> -4
     *               ⬆️         |
     *                - - - - - -
     * dummy 到环入口（示例为2）的距离极为 l1 ，环入口到相遇点（示例为-4）的距离记为 l2，
     * 顺时针，相遇点再到入口点的距离记为 l3， k1, k2 记为走过几个完整的环
     * 则快慢指针在相遇点相遇时走过的路程有：
     * 慢指针：l1 + l2 + k1 * (l2 + l3)
     * 快指针：l1 + l2 + k2 * (l2 + l3)
     * ->: 2 * (l1 + l2 + k1 * (l2 + l3)) = l1 + l2 + k2 * (l2 + l3)
     * ->: l1 + l2 = (k2 - 2 * k1) * (l2 + l3)
     * ->: l1 - l3 = (k2 - 2 * k1 - 1) * (l2 + l3)
     * 可见 l1 - l3 是 l2 + l3 的整数倍
     * 
     * 所有在相遇之后，将慢指针重新指向头节点，快指针依然指向相遇时的节点，然后同时移动，直到再次相遇
     * 相遇的节点就是环入口节点
     */
    if (head === null || head.next === null) return null

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

    if (res) {
        slow = dummy
        while (slow !== fast) {
            slow = slow.next
            fast = fast.next
        }
        return slow
    } else {
        return null
    }
    
};
// @lc code=end

