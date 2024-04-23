function solution(arr, divisor) {
  var answer = arr.filter((v) => v % divisor === 0).sort((a, b) => a - b);
  return answer.length !== 0 ? answer : [-1];
}

let result = solution([2, 36, 1, 3], 1);
console.log(result);

function solution(arr, divisor) {
  var answer = [];

  for (var i = 0; i < arr.length; ++i) {
    if (arr[i] % divisor == 0) answer.push(arr[i]);
  }

  return answer.length < 1 ? [-1] : answer.sort((a, b) => a - b);
}
