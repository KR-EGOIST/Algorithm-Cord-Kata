/*
repeat() 메서드는 문자열을 주어진 횟수만큼 반복해 붙인 새로운 문자열을 반환합니다.

slice() 메서드는 어떤 배열의 begin 부터 end 까지(end 미포함)에 대한 얕은 복사본을 새로운 배열 객체로 반환합니다.
원본 배열은 바뀌지 않습니다.
*/

function solution(n) {
  return '수박'.repeat(Math.round(n / 2)).slice(0, n);
}

let result = solution(3);
console.log(result);

function solution(n) {
  let result = '';
  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) {
      result += '박';
    } else {
      result += '수';
    }
  }
  return result;
}
