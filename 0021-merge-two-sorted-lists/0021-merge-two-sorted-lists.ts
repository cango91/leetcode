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

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    if (!list1) return list2;
    if (!list2) return list1;

    let head: ListNode | null;
    let ptr: ListNode | null;

    if (list1.val < list2.val) {
        head = list1;
        list1 = list1.next;
    } else {
        head = list2;
        list2 = list2.next;
    }

    ptr = head;
    while (list1 && list2) {
        if (list1.val < list2.val) {
            ptr.next = list1;
            list1 = list1.next;
        } else {
            ptr.next = list2;
            list2 = list2.next;
        }
        ptr = ptr.next;
    }
    ptr.next = list1 || list2;
    return head;
};