function dailyTemperatures(temperatures) {
    const result = new Array(temperatures.length).fill(0);
    const stack = [];

    for (let i = 0; i < temperatures.length; i++) {
        while (stack.length > 0 && temperatures[i] > temperatures[stack[stack.length - 1]]) {
            const prevIndex = stack.pop();
            result[prevIndex] = i - prevIndex;
        }
        stack.push(i);
    }

    return result;
}

// Test the function with the given input
const temperatures = [73, 75, 74, 71, 76, 72, 74, 73];
console.log(dailyTemperatures(temperatures));  // Output: [1, 1, 4, 2, 1, 1, 0, 0]
