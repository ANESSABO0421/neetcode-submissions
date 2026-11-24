class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head) {
        let prev = null;
        let current = head;

        while (current !== null) {
            let next = current.next;

            current.next = prev;

            prev = current;
            current = next;
        }

        return prev;
    }
}