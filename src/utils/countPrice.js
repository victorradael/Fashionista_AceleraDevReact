import parseStringToFloat from './parseStringToFloat';

export default function Price(products) {
  const prices = [];

  products.map((product) => {
    const price = parseStringToFloat(product.actual_price);
    prices.push(price*product.quantity);
  });

  const totalPrice = prices.reduce((sum, price) => sum + price, 0);

  return totalPrice.toFixed(2);
}