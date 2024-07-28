const fs = require('fs');

console.log("Start");

process.nextTick(() => {
    console.log("Next Tick 1");
});

fs.readFile("input.txt", (err, data) => {
    if (err) throw err;
 
    console.log(data.toString());

    process.nextTick(() => {
        console.log("Next Tick 2");
    });

    setTimeout(() => {
        console.log("Timeout after I/O");
    }, 0);

    setImmediate(() => {
        console.log("Immediate after I/O");
    });
});

setTimeout(() => {
    console.log("Timeout 1");
}, 0);

setImmediate(() => {
    console.log("Immediate 1");
});

console.log("End");
