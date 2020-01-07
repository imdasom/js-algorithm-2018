/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
  var currentNode = head;
  while(currentNode) {
    if(currentNode.visit) {
      return currentNode;
    }
    currentNode.visit = true;
    currentNode = currentNode.next;
  }
  return null;
};