const stepPrices1 = {
    100: 40,
    300: 60,
    500: 80,
    1000: 120,
    1500: 150,
}

function calcMinPrice(price, stepPrices, rivalryPrice) {
    const keys = Object.keys(stepPrices);
    const values = Object.values(stepPrices);
    let status = 0; //quy định A trả giá trước
    while (price <= rivalryPrice) {
        for (let i = 0; i < keys.length; i++) {
            if (price <= +keys[i] || (price >= +keys[i] && price < +keys[i + 1]) || price >= +keys[keys.length - 1]) {
                if (status % 2 === 0) {
                    if (price + values[i] <= rivalryPrice) {
                        price += values[i];
                        status += 1;
                        break;
                    } else return price;
                } else {
                    price += values[i];
                    status += 1;
                    break;
                }
            }
        }
    }
    return price;
}

console.log(calcMinPrice(210, stepPrices1, 1200));