function solution(n) {
  let result = [];
  for (let i = 1; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      result.push(i); // [1, 2, 3, 4]
      if (i !== n / i) {
        result.push(n / i); // [6, 8, 12, 24]
      }
    }
  }

  return result.sort((a, b) => a - b);
}

let result = solution(24);
console.log(result);
