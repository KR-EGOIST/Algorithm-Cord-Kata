function solution(n, k) {
  let sv = Math.floor(n / 10);
  return n * 12000 + k * 2000 - sv * 2000;
}

let result = solution(10, 3);
console.log(result);
