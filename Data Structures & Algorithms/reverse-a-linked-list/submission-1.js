/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head) {
        let previous = null;
        let current = head;

        while (current !== null) {

            // 1. Save where we're going next
            let next = current.next;
            // 2. Reverse the arrow
            current.next = previous;
            // 3. Move previous forward
            previous = current;
            // 4. Move current forward
            current = next;

        }

        return previous;

    }
}

