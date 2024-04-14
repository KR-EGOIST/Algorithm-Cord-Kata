function solution(numbers, num1, num2) {
  return numbers.slice(num1, num2 + 1);
}

let result = solution([1, 2, 3, 4, 5], 1, 3);
console.log(result);
