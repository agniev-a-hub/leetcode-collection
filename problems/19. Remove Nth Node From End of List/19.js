/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

var removeNthFromEnd = function(head, n) {
  if (head == null) return head;
  var node = new ListNode(0);
  node.next = head;
  var slow = node;
  var fast = head;

  while(n > 0){
      fast = fast.next;
      n--;
  }

  while(fast){
      fast = fast.next;
      slow = slow.next;
  }

  if (slow.next == null) {
      slow.next = null;
  } else {
      slow.next = slow.next.next;
  }

  return node.next;
};
