// sort((a, b) => (a-b)) a-b가 0보다 크면 오름차순으로 정렬, 0보다 작으면 내림차순으로 정렬, 0이면 변동없음
/*
일단 배열의 요소들을 모두 string으로 바꾼다.

sort 메서드를 통해 a+b 와 b+a를 비교한다.

예를 들어 a=3 b=30일 경우, a와 b는 현재 문자열이기 때문에 a+b는 330, b+a는 303이 된다.

이 두 문자열을 비교해 내림차순으로 더 큰게 앞에 오도록 (b+a)-(a+b)를 리턴해준다.

join 메서드로 배열의 요소들을 문자열로 이어붙인다.

0만 있는 경우, 답을 0으로 치환한다. 
*/

function solution(numbers) {
  let decs = numbers
    .map((num) => num.toString())
    .sort((a, b) => (b + a) - (a + b))
    .join('');
  return decs[0] === '0' ? '0' : decs;
}

let result = solution([6, 10, 2]);
console.log(result);
