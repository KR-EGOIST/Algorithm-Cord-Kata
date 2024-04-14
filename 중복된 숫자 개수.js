function solution(array, n) {
  let answer = 0;
  array.forEach((v) => {
    if (v == n) answer++;
  });
  return answer;
}

let result = solution([1, 1, 2, 3, 4, 5], 1);
console.log(result);

// function solution(array, n) {
//   return array.filter((v) => v === n).length;
// }
