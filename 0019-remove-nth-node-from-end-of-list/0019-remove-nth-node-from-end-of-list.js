/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    if(!head.next && n===1) return null;
    const nodes = [];
    let ptr=head;
    let length = 0;
    while(ptr){
        nodes.push(ptr);
        ptr=ptr.next;
        length++;
    }
    if(length-n>0){
        nodes[length-n-1].next = nodes[length-n+1] || null;
    }else{
        head = nodes[length-n+1];
    }
    return head;
};