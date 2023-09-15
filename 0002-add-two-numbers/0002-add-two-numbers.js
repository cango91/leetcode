/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let sum = new ListNode(0);
    let head = sum;
    let acc = 0;
    while (l1.next || l2.next) {
        sum.next = new ListNode(0);
        sum.val = l1.val + l2.val + acc
        acc = Math.floor(sum.val / 10);
        sum.val %= 10;
        sum = sum.next;
        l1 = l1.next ? l1.next : new ListNode(0);
        l2 = l2.next ? l2.next : new ListNode(0);
    }
    sum.val = l1.val + l2.val + acc
    acc = Math.floor(sum.val / 10);
    sum.val %= 10;
    if(acc) sum.next = new ListNode(acc);
    return head;
};