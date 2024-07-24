/*
LIFO: Last in first out
push(element) - add an element to the top of the stack
pop() - remove the most recently added element from the stack
peek() - get the value of the element at the top of the stack without removing it
isEmpty() - check if the stack is empty
size() - get the number of elements in the stack
print() - visualize the element in the stack
clear() - remove all elements from the stack
*/

class Stack {
    constructor() {
        this.items = [];
        this.count = 0 ;
    }

    push(element) {
        this.items[this.count] = element
        this.count += 1;
        return this.count - 1;
    }

    pop() {
        if (this.count === 0) return undefined;
        const deleteItem = this.items[this.count - 1];
        this.count -= 1;
        console.log(`${deleteItem} removed`);
        return deleteItem;
    }

    peek() {
        console.log(`Top element is ${this.items[this.count - 1]}`);
        return this.items[this.count - 1];
    }

    isEmpty() {
        console.log(this.count === 0 ? "Stack is empty" : "Stack is not empty");
        return this.count === 0
    }

    size() {
        console.log(`${this.count} elements is stack`);
        return this.count;
    }

    print() {
        let str = "";
        for (let i = 0; i < this.count; i++) {
        str += `${this.items[i]}` + " ";
        }

        return `[${str.trim()}]`;
    }

    clear() {
        this.items = [];
        this.count = 0;
        console.log("Stack cleared");
        return this.items;
    }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
console.log(stack.print());

stack.pop()
console.log(stack.print());

stack.push(3);
stack.push(4);
console.log(stack.print());

stack.peek();