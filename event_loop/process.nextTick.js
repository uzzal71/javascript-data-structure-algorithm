const fs = require('fs');

console.log("Start");

process.nextTick(() => {
    console.log("Next Tick 1");
});

fs.readFile(__filename, () => {
    console.log("I/O operation");
    
    process.nextTick(() => {
        console.log("Next Tick 2");
    });
    
    setTimeout(() => {
        console.log("Timeout after I/O");
    }, 0);
});

setTimeout(() => {
    console.log("Timeout 1");
}, 0);

console.log("End");
