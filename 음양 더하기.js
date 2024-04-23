function solution(absolutes, signs) {
  let answer = 0;

  for (let i = 0; i < absolutes.length; i++) {
    signs[i] ? (answer += absolutes[i]) : (answer -= absolutes[i]);
  }

  return answer;
}

let result = solution([4, 7, 12], [true, false, true]);
console.log(result);

// * 연산자가 우선순위가 높으므로 true false 에 따라 양수 음수가 결정되며
// 그 값을 acc 에 더한다.
// acc 초기값은 0 이다.
function solution(absolutes, signs) {
  return absolutes.reduce((acc, val, i) => acc + val * (signs[i] ? 1 : -1), 0);
}
