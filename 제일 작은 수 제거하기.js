/*
 filter() 메서드는 주어진 배열의 일부에 대한 얕은 복사본을 생성하고,
주어진 배열에서 제공된 함수에 의해 구현된 테스트를 통과한 요소로만 필터링 합니다.

indexOf() 메서드는 배열에서 주어진 요소를 찾을 수 있는 첫 번째 인덱스를 반환하고, 찾을 수 없는 경우 -1을 반환합니다.
*/

function solution(arr) {
  let answer = arr.filter((_, i) => i !== arr.indexOf(Math.min(...arr)));
  return answer.length !== 0 ? answer : [-1];
}

let result = solution([4, 3, 2, 1]);
console.log(result);

// 배열 중 작은 값을 찾고 작은 값을 제외한 나머지를 새로운 배열로 반환
function solution(arr) {
  const min = Math.min(...arr);
  return arr.length !== 1 ? arr.filter((i) => i !== min) : [-1];
}
