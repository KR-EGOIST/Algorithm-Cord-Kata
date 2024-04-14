function solution(num1, num2) {
  if (num1 === num2) {
    return 1;
  } else {
    return -1;
  }
}

// function solution(num1, num2) {
//   var answer = num1 === num2 ? 1 : -1;
//   return answer;
// }

let result = solution(2, 3);
console.log(result);
