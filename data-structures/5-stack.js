/**
 1. The stack data structure is a sequential collection of elements that follow the principle of last in first out(LIFO)
 2. The last element inserted into the stack is first element to be removed
 3. A stack of plates. The last plate placed on top of the stack is also the first plate removed from the stack
 4. Stacks is an abstract data type. It is defined by its behavior rather then being a mathematical model
 5. The stack data structure supports two main operations: push and pop
    # Push, which adds an element to the collection
    # Pop, which removes the most recently added element from the collection

 6. Stack Usage
    # Browser history traking
    # Undo/Redo operation when typing
    # Expression conversion
    # Call stack in JavaScript runtime
 */

/**
 * @method push
 * @method pop
 * @method peek
 * @method isEmpty
 * @method size
 * @method print
 * @method clear
 */

class Stack {
  constructor() {
    this.items = [];
    this.count = 0;
  }

  // TODO: Add element to top in stack
  push(element) {
    this.items[this.count] = element;
    console.log(`${element} added to ${this.count}`);
    this.count += 1;
    return this.count - 1;
  }

  // TODO: Return and remove top element in stack
  // TODO: Return undifined if stack is empty
  pop() {
    if (this.count === 0) return undefined;
    let deleteItem = this.items[this.count - 1];
    this.count -= 1;
    console.log(`${deleteItem} removed`);
    return deleteItem;
  }

  // TODO: Check top element in stack
  peak() {
    console.log(`Top element is ${this.items[this.count - 1]}`);
    return this.items[this.count - 1];
  }

  // TODO: Check if stack is empty
  isEmpty() {
    console.log(this.count === 0 ? "Stack is empty" : "Stack is not empty");
    return this.count == 0;
  }

  // TODO: Check size of stack
  size() {
    console.log(`${this.count} elements in stack`);
    return this.count;
  }

  // TODO: Print element in stack
  print() {
    let str = "";
    for (let i = 0; i < this.count; i++) {
      str += `${this.items[i]}` + " ";
    }

    return `[${str.trim()}]`;
  }

  // TODO: Clear stack
  clear() {
    this.items = [];
    this.count = 0;
    console.log("Stack cleared");
    return this.items;
  }
}

const stack = new Stack();

stack.isEmpty();

stack.push(1);
stack.push(2);

stack.peak();

stack.push(3);

console.log(stack.print());

stack.pop();
stack.pop();

stack.clear();

console.log(stack.print());

stack.size();

stack.isEmpty();
