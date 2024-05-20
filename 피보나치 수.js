function solution(n) {
  let a = 0;
  let b = 1;
  let result = 0;

  for (let i = 1; i < n; i++) {
    result = (a + b) % 1234567;
    a = b;
    b = result;
  }
  return result;
}

let result = solution(5);
console.log(result);

//=====================================

// 피보나치 수열 재귀함수
function solution(n) {
  if (n <= 1) {
    return 1;
  } else {
    return solution(n - 1) + solution(n - 2);
  }
}
