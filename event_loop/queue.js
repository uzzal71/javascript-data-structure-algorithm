/**
 * Event loop
 * setImmediate
 * process.nextTick
 * setTimeout
 */

function add(a, b) {
    console.log(a + b);
}

setImmediate(() => {
    add(10, 5);
});

setTimeout(() => {
    add(10, 9);
});

process.nextTick(() => {
    add(10, 2);
});

console.log("Program has ended");