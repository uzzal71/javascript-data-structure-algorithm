/*
FIFO: First in first out
equeue(element) - add an element to the queue
dequeue() - remove the oldest element from the queue
peek() - get the value of the element at the front of the queue without remoing it
isEmpty() - check if the queue is empty
size() - get the number of elements in the queue
print() - visualize the element in the queue
*/

class Queue {
    constructor() {
        this.items = {};
        this.rear = 0;
        this.front = 0;
    }

    equeue(element) {
        this.items[this.rear] = element;
        this.rear += 1;
        console.log(`${element} added to queue`);
    }

    dequeue() {
        const item = this.items[this.front];
        console.log(`${item} removed from queue`);
        delete this.items[this.front];
        this.front += 1;
        return item;
    }

    isEmpty() {
        return this.rear - this.front === 0;
    }

    peek() {
        return this.items[this.front];
    }

    size() {
        return this.rear - this.front;
    }

    print() {
        console.log(this.items);
    }
}

const queue = new Queue();
console.log(queue.isEmpty())

queue.equeue(10);
queue.equeue(20);
queue.equeue(30);

queue.print();

queue.dequeue();

queue.print();

console.log(queue.peek());

console.log(queue.size());