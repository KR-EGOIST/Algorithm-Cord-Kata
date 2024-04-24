/*
parseInt() 함수는 문자열 인자를 파싱하여 특정 진수(수의 진법 체계에서 기준이 되는 값)의 정수를 반환합니다.

parseInt(string);
parseInt(string, radix);

toString 에 radix 값을 지정해주면 해당 진법(2 ~ 36진법)으로 변환된다.
toString(radix)

숫자를 3진법 문자열로 변환
문자 하나씩 나누어 배열로 저장
배열을 뒤집어 저장
join으로 문자열로 변환
다시 3진법으로 계산해서 10진법으로 표기
*/

function solution(n) {
  return parseInt(n.toString(3).split('').reverse().join(''), 3);
}

let result = solution(45);
console.log(result);

//=================================================================

/*
진법 변환 메소드 없이 푸는 방법
*/

function solution(n) {
  const answer = [];
  while (n !== 0) {
    answer.unshift(n % 3);
    n = Math.floor(n / 3);
  }
  return answer.reduce((acc, cur, i) => acc + cur * 3 ** i, 0);
}
