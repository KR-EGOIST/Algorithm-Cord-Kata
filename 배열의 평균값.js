function solution(numbers) {
  let answer = numbers.reduce((acc, cur) => acc + cur, 0) / numbers.length;
  return answer;
}

let result = solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(result);
