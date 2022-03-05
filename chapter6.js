// Chapter 6 Exercises
class Vec {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  plus(vector) {
    return new Vec(this.x + vector.x, this.y + vector.y);
  }

  minus(vector) {
    return new Vec(this.x - vector.x, this.y - vector.y);
  }

  get length() {
    return Math.sqrt(this.x ** 2 + this.y ** 2);
  }
}

// const newVec = new Vec(3, 4);
// console.log(newVec);
// console.log(newVec.length);

// const otherVec = new Vec(1, 2);
// console.log(newVec.plus(otherVec));
// console.log(newVec.minus(otherVec));

class GroupIterator {
  constructor(group) {
    this.index = 0;
    this.group = group
  }

  next() {
    if (this.index === this.group.length) return { done: true };

    let value = this.group[this.index];
    this.index += 1

    return { value, done: false };
  }
}

class Group {
  constructor() {
    this.group = [];
  }

  [Symbol.iterator]() {
    return new GroupIterator(this.group);
  }

  has(element) {
    return this.group.includes(element)
  }

  add(newElement) {
    if (!this.group.includes(newElement)) this.group.push(newElement);
  }

  delete(elementToRemove) {
    const indexOfElement = this.group.indexOf(elementToRemove);
    if (indexOfElement !== -1) {
      this.group.splice(indexOfElement, 1)
    }
  }

  static from(iterableObject) {
    let values = iterableObject
    if (!iterableObject instanceof Array) {
      values = iterableObject.values();
    };

    const group = new Group(); 

    values.forEach(value => {
      group.add(value);
    })

    return group;
  }
}

let newGroup = new Group();
console.log(newGroup);

let groupFromArray = Group.from([3, 2, 2, 1]);
console.log(groupFromArray);

for (const element of groupFromArray) {
  console.log(element);
}

Object.prototype.hasOwnProperty.call([3, 2, 1], 'length')