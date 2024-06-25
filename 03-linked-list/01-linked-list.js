class ListNode {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

const n1 = new ListNode(45);
const n2 = new ListNode(32);
const n3 = new ListNode(12);

n1.next = n2;
n2.next = n3;

function printNodes(node) {
  let current = node;

  while (current !== null) {
    console.log(current.data);
    current = current.next;
  }
}

function nodesSum(node) {
  let
    current = node,
    result = 0;

  while (current !== null) {
    result += current.data;
    current = current.next;
  }

  return result;
}

printNodes(n1);

console.log(nodesSum(n1));
