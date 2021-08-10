// 思路: 消灭不了你，我就成为你
var deleteNode = function (node) {
  node.val = node.next.val;
  node.next = node.next.next;
};