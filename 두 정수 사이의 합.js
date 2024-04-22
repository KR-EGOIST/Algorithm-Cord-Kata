function solution(a, b) {
  let answer = 0;
  for (let i = Math.min(a, b); i <= Math.max(a, b); i++) {
    answer += i;
  }
  return answer;
}

let result = solution(5, 3);
console.log(result);

// 가우스 공식 (등차수열의 합)
// (등차수열의 합) = {(첫 항 + 마지막 항) * (항의 개수)} / 2

function adder(a, b) {
  return ((a + b) * (Math.abs(a - b) + 1)) / 2;
}
