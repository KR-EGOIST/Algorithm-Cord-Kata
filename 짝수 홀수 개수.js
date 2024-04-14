function solution(num_list) {
  let answer = [0, 0];
  num_list.forEach((v) => {
    if (v % 2 == 0) answer[0]++;
    else answer[1]++;
  });
  return answer;
}

let result = solution([1, 2, 3, 4, 5]);
console.log(result);

// function solution(num_list) {
//   return [
//     num_list.filter((num) => num % 2 === 0).length,
//     num_list.filter((num) => num % 2 === 1).length,
//   ];
// }
