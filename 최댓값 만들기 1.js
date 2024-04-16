function solution(numbers) {
  numbers.sort((a, b) => b - a);
  return numbers[0] * numbers[1];
}

let result = solution([0, 31, 24, 10, 1, 9]);
console.log(result);

// function solution(numbers) {
//   let [a, b] = numbers.sort((a, b) => b - a);
//   return a * b;
// }
