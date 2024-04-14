function solution(n) {
  let answer = 0;
  for (let i = 0; i <= n; i++) {
    if (n % i == 0) answer++;
  }
  return answer;
}

// function solution(n) {
//   return Array(n)
//     .fill(1)
//     .map((v, idx) => v + idx)
//     .filter((v) => n % v === 0).length;
// }

let result = solution(20);
console.log(result);
