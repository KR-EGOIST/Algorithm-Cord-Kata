function solution(array) {
  let answer = array.sort((a, b) => a - b);
  let idx = answer.length / 2;
  return answer[Math.floor(idx)];
}

let result = solution([1, 2, 7, 10, 11]);
console.log(result);

// function solution(array) {
//   return array.sort((a, b) => a - b)[Math.floor(array.length / 2)];
// }
