/*
 * @lc app=leetcode.cn id=138 lang=javascript
 *
 * [138] 复制带随机指针的链表
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
    let demmy = new ListNode(0)
    let arr = []
    let a = demmy
    let b = head
    const c = demmy

    while (head !== null) {
        demmy.next = new ListNode(head.val)
        arr.push(demmy.next)
        let x = b
        let i = 0
        while (x !== null) {
            if (head.random === null) {
                head.random_index = null
            } else if (x === head.random ) {
                head.random_index = i
            }
            i++
            x = x.next
        }
        x = b

        demmy = demmy.next
        head = head.next
    }

    while (b !== null) {
        a.next.random = b.random_index !== null ? arr[b.random_index] : null
        a = a.next
        b = b.next
    }

    return c.next
};
// @lc code=end

