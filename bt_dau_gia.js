const stepPrices1 = {
  100: 40,
  300: 60,
  500: 80,
  1000: 120,
  1500: 150,
};

function calcMinPrice(price, stepPrices, rivalryPrice) {
  const keys = Object.keys(stepPrices);
  const values = Object.values(stepPrices);
  while (price <= rivalryPrice) {
    for (let i = 0; i < keys.length; i++) {
      if (
        price <= +keys[i] ||
        (price >= +keys[i] && price < +keys[i + 1]) ||
        price >= +keys[keys.length - 1]
      ) {
        if (price + values[i] <= rivalryPrice) {
          price += values[i];
          break;
        } else return price + values[i];
      }
    }
  }
  return price;
}

console.log(calcMinPrice(210, stepPrices1, 1200));
