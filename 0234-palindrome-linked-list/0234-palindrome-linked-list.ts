/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function isPalindrome(head: ListNode | null): boolean {
    if (!head.next) return true;
    let slow: ListNode | null = head;
    let fast: ListNode | null = head;
    let cache: ListNode | null = null;
    while (fast && fast.next) {
        fast = fast.next.next;
        const next = slow!.next;
        slow!.next = cache;
        cache = slow;
        slow = next;
    }
    if (fast) {
        slow = slow!.next;
    }
    while (slow) {
        if (slow.val !== cache.val) return false;
        slow = slow!.next;
        cache = cache!.next;
    }
    return true;
};