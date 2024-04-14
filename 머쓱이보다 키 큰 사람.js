function solution(array, height) {
  let answer = 0;
  array.forEach((v) => {
    if (v > height) answer++;
  });
  return answer;
}

let result = solution([149, 180, 192, 170], 167);
console.log(result);

// function solution(array, height) {
//   var answer = array.filter((item) => item > height);
//   return answer.length;
// }
