class List {
  constructor() {
    this.size = 0;
    this.data = new Array(4);
  }

  get(index) {
    if (index >= 0 && index < this.size) {
      return this.data[index];
    }
    return null;
  }

  set(index, value) {
    if (index >= 0 && index < this.size) {
      this.data[index] = value;
    }
  }

  grow() {
    const current = this.data;
    this.data = new Array(this.size * 2);

    for (let i = 0; i < this.size; i++) {
      this.data[i] = current[i];
    }
  }

  push(value) {
    if (this.size === this.data.length) {
      this.grow();
    }

    this.data[this.size] = value;
    this.size++;
  }

  remove(index) {
    if (this.size === 0 || index > this.size - 1) {
      return null;
    }

    const removeValue = this.data[index];

    for (let i = index; i < this.size - 1; i++) {
      this.data[i] = this.data[i + 1];
    }

    this.data[this.size - 1] = null;

    this.size -= 1;

    return removeValue;
  }

  insert(index, value) {
    if (this.size === this.data.length) {
      this.grow();
    }

    for (let i = this.size; i > index; i--) {
      this.data[i] = this.data[i - 1];
    }

    this.data[index] = value;
    this.size++;
  }

  contains(value) {
    for (let i = 0; i < this.size; i++) {
      if (this.data[i] === value) {
        return true;
      }
    }

    return false;
  }

  concat(list) {
    const result = new List();

    for (let i = 0; i < this.size; i++) {
      result.push(this.data[i]);
    }

    for (let i = 0; i < list.size; i++) {
      result.push(list.get(i));
    }

    return result;
  }

  toString() {
    let result = '[ ';

    for (let i = 0; i < this.size; i++) {
      result += this.data[i] + ' ';
    }

    result += ']';

    return result;
  }
}

const list = new List();
const list2 = new List();

list.push(1);
list.push(2);
list.push(3);
list.push(4);

list2.push(5)
list2.push(6)
list2.push(7)
list2.push(8)
list2.push(9)

const list3 = list.concat(list2);

console.log(list3.toString());
