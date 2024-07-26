function maxProfit(prices) {
    if (prices.length === 0) {
        console.log('No prices provided.');
        return 0;
    }

    let minPrice = Infinity;
    let maxProfit = 0;

    console.log(`Initial minimum price set to Infinity`);
    console.log(`Initial maximum profit set to 0`);

    for (let i = 0; i < prices.length; i++) {
        console.log(`Day ${i + 1}: Price = ${prices[i]}`);

        if (prices[i] < minPrice) {
            minPrice = prices[i];
            console.log(`New minimum price found: ${minPrice}`);
        } else if (prices[i] - minPrice > maxProfit) {
            maxProfit = prices[i] - minPrice;
            console.log(`New maximum profit found: Sell at ${prices[i]}, Buy at ${minPrice}, Profit = ${maxProfit}`);
        }
    }

    console.log(`Maximum profit after processing all days: ${maxProfit}`);
    return maxProfit;
}

// Test the function with the given input
const prices = [7, 1, 5, 3, 6, 4];
console.log(`Input prices: ${prices}`);
console.log(`Maximum profit: ${maxProfit(prices)}`);
