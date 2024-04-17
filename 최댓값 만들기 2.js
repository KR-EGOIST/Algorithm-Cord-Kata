/*
  1. 배열을 정렬 (순서 상관없음)
  2. 앞의 2개와 뒤의 2개 곱한 값 중 가장 큰 값을 구함
*/

function solution(numbers) {
  numbers.sort((a, b) => a - b);
  return Math.max(
    numbers[0] * numbers[1],
    numbers[numbers.length - 1] * numbers[numbers.length - 2]
  );
}

let result = solution([0, -31, 24, 10, 1, 9]);
console.log(result);
