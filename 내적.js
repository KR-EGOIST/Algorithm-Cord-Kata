/*
reduce() 메서드는 배열의 각 요소에 대해 주어진 리듀서 (reducer) 함수를 실행하고, 하나의 결과값을 반환합니다.
*/

function solution(a, b) {
  return a.reduce((acc, _, i) => (acc += a[i] * b[i]), 0);
}

let result = solution([1, 2, 3, 4], [-3, -1, 0, 2]);
console.log(result);

function solution(a, b) {
  return a.reduce((acc, cur, i) => (acc += cur * b[i]), 0);
}

function solution(a, b) {
  let answer = 0;
  for (let i = 0; i < a.length; i++) {
    answer += a[i] * b[i];
  }
  return answer;
}
