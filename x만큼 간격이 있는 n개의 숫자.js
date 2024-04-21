/*
배열 초기화

Array(a).fill(b)
a 만큼 배열 공간을 만들고 b 값으로 전부 채우기
*/

function solution(x, n) {
  let answer = [];
  for (let i = 1; i <= n; i++) {
    answer.push(x * i);
  }
  return answer;
}

let result = solution(-4, 2);
console.log(result);

function solution(x, n) {
  return Array(n)
    .fill(x)
    .map((v, i) => (i + 1) * v);
}
