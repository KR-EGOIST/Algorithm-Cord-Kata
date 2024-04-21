/*
Math.sqrt(x) : 숫자 x의 제곱근을 반환한다.
Math.pow(base, exponent) : base에 exponent를 제곱한 값을 반환한다.
*/

function solution(n) {
  return Math.sqrt(n) % 1 === 0 ? Math.pow(Math.sqrt(n) + 1, 2) : -1;
}

let result = solution(121);
console.log(result);

function solution(n) {
  var answer = 0;
  let sqrt = Math.sqrt(n);
  if (sqrt % 1 !== 0) {
    // 나머지를 이용해 소숫점 판별, 제곱근이 아닐 경우
    answer = -1;
  } else {
    answer = Math.pow(sqrt + 1, 2); // 제곱근일 경우
  }
  return answer;
}
