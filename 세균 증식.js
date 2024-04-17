function solution(n, t) {
  let result = n;
  for (let i = 0; i < t; i++) {
    result *= 2;
  }
  return result;
}

let result = solution(7, 15);
console.log(result);

// Math.pow() 함수는 제곱한 값을 반환합니다.

// function solution(n, t) {
//   return n * Math.pow(2, t);
// }
