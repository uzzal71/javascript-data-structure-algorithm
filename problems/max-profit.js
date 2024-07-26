function maxProfit(prices) {
    if (prices.length === 0) {
        return 0;
    }

    let minPrice = Infinity;
    let maxProfit = 0;

    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < minPrice) {
            minPrice = prices[i];
        } else if (prices[i] - minPrice > maxProfit) {
            maxProfit = prices[i] - minPrice;
        }
    }

    return maxProfit;
}

// Test the function with the given input
const prices = [7, 1, 5, 3, 6, 4];
console.log(maxProfit(prices));  // Output: 5
