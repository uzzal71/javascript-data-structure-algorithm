/*
FIFO: First in first out
equeue(element) - add an element to the queue
dequeue() - remove the oldest element from the queue
peek() - get the value of the element at the front of the queue without remoing it
isEmpty() - check if the queue is empty
size() - get the number of elements in the queue
print() - visualize the element in the queue
clear() - remove all elements from the queue
*/
class Queue {
    constructor() {
        this.items = [];
    }

    equeue(element) {
        console.log(`${element} added to queue`);
        this.items.push(element);
    }

    dequeue() {
        console.log(`${this.items[0]} removed from queue`);
        return this.items.shift();
    }

    peek() {
        if (!this.isEmpty()) return this.items[0];
        return undefined;
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }

    print() {
        console.log(`[${this.items.toString()}]`);
    }

    clear() {
        console.log('Queue is cleared');
        this.items = [];
    }
}

const queue = new Queue();
console.log(queue.isEmpty())

queue.equeue(10);
queue.equeue(20);
queue.equeue(30);

queue.print();

queue.dequeue();

console.log(queue.peek());

console.log(queue.size());

queue.clear();
queue.print();