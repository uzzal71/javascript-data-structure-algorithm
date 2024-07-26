function dailyTemperatures(temperatures) {
    const result = new Array(temperatures.length).fill(0);
    const stack = [];

    console.log(`Initial temperatures: ${temperatures}`);
    console.log(`Initial result array: ${result}`);
    console.log('Starting processing...');

    for (let i = 0; i < temperatures.length; i++) {
        console.log(`\nDay ${i + 1}: Temperature = ${temperatures[i]}`);
        
        while (stack.length > 0 && temperatures[i] > temperatures[stack[stack.length - 1]]) {
            const prevIndex = stack.pop();
            result[prevIndex] = i - prevIndex;
            console.log(`  Found warmer day for index ${prevIndex} (Temperature = ${temperatures[prevIndex]}): ${i - prevIndex} days later (Temperature = ${temperatures[i]})`);
        }
        
        stack.push(i);
        console.log(`  Stack after processing day ${i + 1}: ${stack}`);
    }

    console.log(`\nFinal result array: ${result}`);
    return result;
}

// Test the function with the given input
const temperatures = [73, 75, 74, 71, 76, 72, 74, 73];
console.log(`Input temperatures: ${temperatures}`);
console.log(`Output waiting days: ${dailyTemperatures(temperatures)}`);
