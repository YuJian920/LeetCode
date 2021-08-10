// 思路：遍历链表，取出每项值相加，余数加入链表，满十进一
var addTwoNumbers = function (l1, l2) {
  let l3 = new ListNode(0);
  let p1 = l1;
  let p2 = l2;
  let p3 = l3;
  let carry = 0;
  while (p1 || p2) {
    const v1 = v1 ? v1.val : 0;
    const v2 = v2 ? v2.val : 0;
    const sum = v1 + v2 + carry;
    carry = Math.floor(sum / 10);
    p3.next = new ListNode(sum % 10);
    if (p1) p1 = p1.next;
    if (p2) p2 = p2.next;
    p3 = p3.next;
  }
  if (carry !== 0) {
    p3.next = new ListNode(carry);
  }
  return l3.next;
};
