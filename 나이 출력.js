function solution(age) {
  var answer = 2022 - age + 1;
  return answer;
}

// function solution(age) {
//   return new Date().getFullYear() - age + 1;
// }

let result = solution(40);
console.log(result);
