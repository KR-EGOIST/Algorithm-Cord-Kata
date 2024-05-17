/*
charAt() 함수는 문자열에서 특정 인덱스에 위치하는 유니코드 단일문자를 반환합니다.

문제에서 "s는 알파벳과 공백문자(" ")로 이루어져 있습니다."라고 나와있는 것으로 보아 테스트케이스 중에서 연속된 '공백'이 있을 것으로 판단됩니다.
그럼 공백을 기준으로 split을 하게 되면 '빈 문자열'이 요소로 있는 경우가 생기구요,
해당 요소를 배열 인덱스로 접근할 경우 undefined를 반환하기 때문에 toUpperCase()에서 런타임 오류가 발생하는 것입니다.
*/

function solution(s) {
  const arr = s.split(' ');
  const result = arr.map(
    (v) => v.charAt(0).toUpperCase() + v.slice(1).toLowerCase()
  );
  return result.join(' ');
}

let result = solution('3people unFollowed me');
console.log(result);

//==========================================================

function solution(s) {
  return s.toLowerCase().replace(/\b[a-z]/g, (match) => match.toUpperCase());
}
