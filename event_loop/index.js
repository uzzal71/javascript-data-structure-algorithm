/**
 * How to Execute a node.js program(different ways)
 * How to Pass Environment variables to a node.js
 * How to Pass command line arguments to the node.js program(different program
 * How to read the command line arguments raw and also by parsing
 * The execution of node.js
 * what are callbacks in Node.js
 * What are Promises in Node.js
 * Working with promises
 * Then/catch chaining or how then replace callbacks.
 * Latest Async/Await Programming
 * Closures (Singleton pattern in the Node.js)
 * Timers(setTimeout)
 * SetInterval
 * process.nextTick() vs setImmediate()
 * Immediately Invoked functions IIFE
 */

console.log("Start");
process.nextTick(() => {
 console.log("Next Tick 1");
});
console.log("End");

setTimeout(() => console.log("hello 1"), 1000);
setTimeout(() => console.log("hello 2"), 2000);
setTimeout(() => console.log("hello 3"), 3000);

process.nextTick(() => {
    console.log("Next Tick 2");
   });