/*
  문자열에서 숫자만 추출하는 방법

  <filter()로 숫자 추출>
  1. isNaN(char) : is Not a Number의 의미로, 문자 char가 숫자로 변환 가능한 경우 true를 리턴
  2. filter(char => !isNaN(char)) : char가 숫자인 경우만 모아서 배열로 리턴

  <정규표현식으로 숫자 추출>
  replace(pattern, repl)은 문자열에서 패턴에 일치하는 문자열을 찾고 repl로 교체합니다.

  1. \D : 숫자가 아닌 문자로, [^0-9]와 동일한 의미의 정규식
  2. str.replace(/\D/g, "") : 숫자가 아닌 문자를 ""으로 대체하여 제거
*/

/*
  문자 배열을 숫자 배열로 변환하는 방법
  1. .map(Number) : 문자을 숫자로 변환
  2. .map((v) => Number(v)) : 같은 의미
*/

function solution(my_string) {
  my_string = [...my_string].filter((v) => !isNaN(v));
  return my_string.map(Number).sort();
}

let result = solution('hi12392');
console.log(result);
