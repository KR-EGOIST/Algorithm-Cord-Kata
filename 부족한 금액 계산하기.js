function solution(price, money, count) {
  let total = 0;
  for (let i = 1; i <= count; i++) {
    total += price * i;
  }

  return total > money ? total - money : 0;
}

let result = solution(3, 20, 4);
console.log(result);

/*
가우스 등차수열의 합 공식
n(n+1)/2

ex) count = 4 이라면 1 부터 4까지의 합은?
    1 + 2 + 3 + 4 = 4(4+1)/2 = 10
*/
function solution(price, money, count) {
  const tmp = (price * count * (count + 1)) / 2 - money;
  return tmp > 0 ? tmp : 0;
}
