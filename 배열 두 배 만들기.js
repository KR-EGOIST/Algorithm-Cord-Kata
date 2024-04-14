function solution(numbers) {
  return numbers.map((v) => v * 2);
}

// function solution(numbers) {
//   return numbers.reduce((a, b) => [...a, b * 2], []);
// }

let result = solution([1, 2, 3, 4, 5]);
console.log(result);
