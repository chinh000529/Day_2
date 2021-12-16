const stepPrices = {
  100: 40,
  300: 60,
  500: 80,
  1000: 120,
  1500: 150,
};

function calcMinPrice(price, stepPrices, rivalryPrice) {
  const arrRangePrices = Object.keys(stepPrices);
  const arrStepPrices = Object.values(stepPrices);
  while (price <= rivalryPrice) {
    for (let i = 0; i < arrRangePrices.length; i++) {
      if (
        price <= +arrRangePrices[i] ||
        (price >= +arrRangePrices[i] && price < +arrRangePrices[i + 1]) ||
        price >= +arrRangePrices[arrRangePrices.length - 1]
      ) {
        if (price + arrStepPrices[i] <= rivalryPrice) {
          price += arrStepPrices[i];
          break;
        } else return price + arrStepPrices[i];
      }
    }
  }
  return price;
}

console.log(calcMinPrice(210, stepPrices, 1200));
