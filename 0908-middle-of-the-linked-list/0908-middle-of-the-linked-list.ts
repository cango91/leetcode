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

function middleNode(head: ListNode | null): ListNode | null {
    let ptrSlow = head, ptrFast=head;
    while(ptrFast && ptrFast.next){
        ptrSlow=ptrSlow.next;
        ptrFast = ptrFast.next.next;
    }
    return ptrSlow;
};