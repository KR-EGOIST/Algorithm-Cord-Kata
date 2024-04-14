function solution(n) {
  let answer = 0;
  for (let i = 0; i <= n; i += 2) {
    if (i % 2 == 0) answer += i;
  }
  return answer;
}

let result = solution(10);
console.log(result);

// 수열 공식
// function solution(n) {
//   let half = Math.floor(n / 2);
//   return half * (half + 1);
// }
