class ListNode {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

function printNodes(node) {
  let
    current = node,
    result = 'root -> ';

  while (current !== null) {
    result += current.data + ' -> '
    current = current.next;
  }

  result += 'end';

  console.log(result);
}

let root = new ListNode(1);
root.next = new ListNode(2);
root.next.next = new ListNode(3);

function append(root, node) {
  let current = root;

  while (current.next !== null) {
    current = current.next;
  }

  current.next = node;

  return root;
}

printNodes(root);

root = append(root, new ListNode(4));

printNodes(root);

function addToBeginning(root, node) {
  node.next = root;

  return node;
}

root = addToBeginning(root, new ListNode(0));

printNodes(root);

function remove(root, index) {
  if (index === 0) {
    return root.next;
  }

  let
    i = 0,
    current = root;

  while (current !== null && i < index) {

    if (i === index - 1) {

      current.next = current.next.next;
      break;
    }

    current = current.next;
    i++;
  }

  return root;
}

root = remove(root, 0);

printNodes(root);

root = remove(root, 2);

printNodes(root);

root = remove(root, 2);

printNodes(root);

function insert(root, index, node) {
  if (index === 0) {
    node.next = root;

    return node;
  }
  let
    current = root,
    i = 0;

  while (current !== null && i < index) {
    if (i === index - 1) {
      node.next = current.next;
      current.next = node;
      break;
    }

    current = current.next;
    i++;
  }

  return root;
}

root = insert(root, 1, new ListNode(1.5));

printNodes(root);

root = insert(root, 0,new ListNode(0));

printNodes(root);

root = insert(root, 4,new ListNode(3));

printNodes(root);
