function solution(n) {
  let answer = [];
  for (let i = 1; i <= n; i += 2) {
    answer.push(i);
  }
  return answer;
}

let result = solution(10);
console.log(result);
