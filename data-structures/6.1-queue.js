/**
 1. The queue data structure is a sequential collection of elements that follows the principle of First In First Out(FIFO)
 2. The first element inserted into the queue is first element to be removed
 3. A queue of people. People enter the queue at one end (rear/tail) and leave the queue from the other end (front/head).
 4. Queue is an abstract data type. It is defined by its behavior rather than  being a mathematical model.
 5. The Queue data structure supports two main operations
    TODO: Equeue, which adds an element to the rear/tail of the collection
    TODO: Dequeue, which removes an element from the front/head of the collection

  6. NOTE: Queue Usage
    TODO: Printers
    TODO: CPU task scheduling
    TODO: Callback queue in JavaScript runtime

 7. NOTE: Queue Implementation
    TODO: equeue(element) - add an element to the queue
    TODO: dequeue() - remove the oldest element from the queue
    TODO: peek() - get the value of the element at the front of the queue without remoing it
    TODO: isEmpty() - check if the queue is empty
    TODO: size() - get the number of elements in the queue
    TODO: print() - visualize the element in the queue
 */
class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    console.log(`${element} added to queue`);
    this.items.push(element);
  }

  dequeue() {
    console.log(`${this.items[0]} removed from queue`);
    return this.items.shift();
  }

  isEmpty() {
    return this.items.length === 0;
  }

  peek() {
    if (!this.isEmpty()) return this.items[0];
    return undefined;
  }

  size() {
    return this.items.length;
  }

  print() {
    console.log(this.items.toString());
  }
}

const queue = new Queue();
console.log(queue.isEmpty());

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

console.log(queue.size());
queue.print();

queue.dequeue();
console.log(queue.peek());
queue.print();
console.log(queue.size());
