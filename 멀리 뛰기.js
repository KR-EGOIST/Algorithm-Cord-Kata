// 동적 계획법(Dynamic Programming)

function solution(n) {
  if (n === 1 || n === 2) return n;

  const dp = Array(n).fill(0);
  dp[0] = 1;
  dp[1] = 2;

  for (let i = 2; i < n; i++) {
    dp[i] = (dp[i - 1] + dp[i - 2]) % 1234567;
  }
  return dp[n - 1];
}

let result = solution(4);
console.log(result);
