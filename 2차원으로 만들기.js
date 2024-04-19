/*
slice(start, end)
메서드는 어떤 배열의 begin 부터 end 까지(end 미포함)에 대한 얕은 복사본을 새로운 배열 객체로 반환합니다.
원본 배열은 바뀌지 않습니다.

splice(start, deleteCount)
메서드는 배열의 기존 요소를 삭제 또는 교체하거나 새 요소를 추가하여 배열의 내용을 변경합니다.

일차원 배열에 인수로 받은 배열을 n 개 만큼 읽어와서 push 하는 방식으로 구현했습니다.
*/

function solution(num_list, n) {
  let result = [];
  for (let i = 0; i < num_list.length; i += n) {
    let temp = num_list.slice(i, i + n);
    result.push(temp);
  }
  return result;
}

let result = solution([1, 2, 3, 4, 5, 6, 7, 8], 2);
console.log(result);

// function solution(num_list, n) {
//   var answer = [];

//   while (num_list.length) {
//     answer.push(num_list.splice(0, n));
//   }

//   return answer;
// }
