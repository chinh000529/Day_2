const stepPrices1 = [40, 60, 80, 120, 150];

function calcMinPrice(price, stepPrices, rivalryPrice) {
  let status = 0; //quy định A trả giá trước
  while (price <= rivalryPrice) {
    if (status % 2 === 0) {
      if (price >= 100 && price < 300) {
        if (price + stepPrices[0] <= rivalryPrice) {
          price += stepPrices[0];
          status += 1;
        } else return price;
      } else if (price >= 300 && price < 500) {
        if (price + stepPrices[1] <= rivalryPrice) {
          price += stepPrices[1];
          status += 1;
        } else return price;
      } else if (price >= 500 && price < 1000) {
        if (price + stepPrices[2] <= rivalryPrice) {
          price += stepPrices[2];
          status += 1;
        } else return price;
      } else if (price >= 1000 && price < 1500) {
        if (price + stepPrices[3] <= rivalryPrice) {
          price += stepPrices[3];
          status += 1;
        } else return price;
      } else {
        if (price + stepPrices[4] <= rivalryPrice) {
          price += stepPrices[4];
          status += 1;
        } else return price;
      }
    } else {
      if (price >= 100 && price < 300) {
        price += stepPrices[0];
        status += 1;
      } else if (price >= 300 && price < 500) {
        price += stepPrices[1];
        status += 1;
      } else if (price >= 500 && price < 1000) {
        price += stepPrices[2];
        status += 1;
      } else if (price >= 10000 && price < 1500) {
        price += stepPrices[3];
        status += 1;
      } else {
        price += stepPrices[4];
        status += 1;
      }
    }
  }
  return price;
}

console.log(calcMinPrice(1081, stepPrices1, 1200));
console.log(calcMinPrice(1081, stepPrices1, 1200));
