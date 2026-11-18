let prices = [100, 200, 300, 400];

let total = prices.reduce((sum, price) => {
    return sum + price;
}, 1);

console.log(total);