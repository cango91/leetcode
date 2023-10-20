/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteMiddle = function(head) {
    if(!head.next) return null;
    let ptrSlow = head, ptrFast = head, prev=null;
    while(ptrFast && ptrFast.next){
        prev=ptrSlow;
        ptrSlow = ptrSlow.next;
        ptrFast = ptrFast.next.next;
    }
    prev.next = ptrSlow.next;
    return head;
};