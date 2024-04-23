/*
includes() 메서드는 배열의 항목에 특정 값이 포함되어 있는지를 판단하여 적절히 true 또는 false를 반환합니다.
*/

function solution(numbers) {
  var answer = 0;
  for (let i = 0; i < 10; i++) {
    if (!numbers.includes(i)) answer += i;
  }
  return answer;
}

let result = solution([1, 2, 3, 4, 6, 7, 8, 0]);
console.log(result);

// 0 ~ 9 까지 더한 값 45
// 배열 요소의 합을 빼면 없는 요소의 값의 합
function solution(numbers) {
  return 45 - numbers.reduce((cur, acc) => cur + acc, 0);
}
