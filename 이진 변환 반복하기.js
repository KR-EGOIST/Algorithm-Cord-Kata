function solution(s) {
  let answer = [0, 0];

  while (s != '1') {
    sLen = s.length;
    // x의 모든 0을 제거합니다.
    s = [...s].filter((v) => v != '0').join('');
    answer[0]++;
    answer[1] += sLen - s.length;
    // x의 길이를 c라고 하면, x를 "c를 2진법으로 표현한 문자열"로 바꿉니다.
    s = s.length.toString(2);
  }
  return answer;
}

let result = solution('110010101001');
console.log(result);

//==========================================================

function solution(s) {
  let answer = [0, 0];
  while (s.length > 1) {
    answer[0]++;
    // ||[] 이 부분이 없으면 match에서 0과 일치하는 부분이 없을 때 반환되는 값이 null이라 length 프로퍼티를 사용할 수 없기 때문에 저 부분이 꼭 필요합니다
    answer[1] += (s.match(/0/g) || []).length;
    s = s.replace(/0/g, '').length.toString(2);
  }
  return answer;
}
