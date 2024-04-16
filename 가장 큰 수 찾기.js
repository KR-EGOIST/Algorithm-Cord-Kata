function solution(array) {
  let max = array[0];
  let maxIdx = array.indexOf(array[0]);
  let answer = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
      maxIdx = i;
    }
  }

  answer.push(max);
  answer.push(maxIdx);

  return answer;
}

let result = solution([9, 10, 11, 8]);
console.log(result);

// function solution(array) {
//   return [Math.max(...array), array.indexOf(Math.max(...array))];
// }
