function solution(n) {
  let nSqrt = Math.sqrt(n);

  return n % nSqrt === 0 ? 1 : 2;
}

let result = solution(144);
console.log(result);

// Number.isInteger() 메서드는 주어진 값이 정수인지 판별합니다.

// function solution(n) {
//   return Number.isInteger(Math.sqrt(n)) ? 1 : 2;
// }
