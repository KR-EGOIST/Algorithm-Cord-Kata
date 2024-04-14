function solution(price) {
  let sale = 0;
  if (price >= 500000) {
    sale = price * 0.2;
  } else if (price >= 300000) {
    sale = price * 0.1;
  } else if (price >= 100000) {
    sale = price * 0.05;
  }
  return Math.floor(price - sale);
}

let result = solution(150000);
console.log(result);

// const discounts = [
//   [500000, 20],
//   [300000, 10],
//   [100000, 5],
// ];

// const solution = (price) => {
//   for (const discount of discounts)
//     if (price >= discount[0])
//       return Math.floor(price - (price * discount[1]) / 100);
//   return price;
// };
