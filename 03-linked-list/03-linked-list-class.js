class ListNode {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
 constructor() {
   this.root = null;
   this.size = 0;
 }

  get(index) {
    let
      current = this.root,
      count = 0;

    while (current !== null) {
      if (count === index) {
        return current.data;
      }
        current = current.next;
        count++;
    }

    return null;
  }

  removeAtIndex(index) {
   if (index >= this.size || index < 0) {
     return;
   }

   if (index === 0 && this.size > 0) {
     this.root = this.root.next;
     return;
   }

   let
     current = this.root,
     count = 0;

   while (current && count < index - 1) {
     current = current.next;
     count++;
   }

   current.next = current.next.next;

   this.size--;
  }

  isEmpty() {
    return this.root === null;
  }

  prepend(value) {
    this.root = new ListNode(value, this.root);
    this.size++;
  }

  length() {
    let
      current = this.root,
      length = 0;

    while (current !== null) {
      length++;
      current = current.next;
    }

    return length;
  }

  addAtIndex(index, value) {
   if (index >= this.size || index < 0) {
     return;
   }

   if (index === 0) {
     this.prepend(value);
     this.size++;
     return;
   }

   let
     current = this.root,
     i = 0;

   while (current && i < index - 1) {
     i++;
     current = current.next;
   }

   const node = new ListNode(value);
   node.next = current.next;

   current.next = node;

   this.size++;
  }

  append(value) {
   this.addAtIndex(this.size - 1, value);
  }

  toString() {
    let
      result = 'root -> ',
      current = this.root;

    while (current !== null) {
      result += current.data + ' -> ';
      current = current.next;
    }

    return result + 'null';
  }
}

const list = new LinkedList();

console.log(list.toString(), list.length(), list.isEmpty());
list.prepend(5);
list.prepend(4);
list.prepend(3);
list.prepend(2);
list.prepend(1);
console.log(list.toString(), list.length(), list.isEmpty());
list.removeAtIndex(3);
console.log(list.toString(), list.length(), list.isEmpty());
list.addAtIndex(0, -10);
console.log(list.toString());
list.addAtIndex(2, 22);
console.log(list.toString());
list.addAtIndex(list.size - 1, 99);
console.log(list.toString());
list.append(999);
console.log(list.toString());

