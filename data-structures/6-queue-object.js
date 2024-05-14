class Queue {
  constructor() {
    this.items = {};
    this.rear = 0;
    this.front = 0;
  }

  enqueue(element) {
    this.items[this.rear] = element;
    console.log(`${element} added to queue`);
    this.rear += 1;
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
console.log(queue.isEmpty());

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

console.log(queue.size());
queue.print();

queue.dequeue();
console.log(queue.peek());
queue.enqueue(40);
queue.dequeue();
queue.print();
