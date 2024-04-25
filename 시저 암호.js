/*
|| (OR) 문으로 소문자 z 대문자 Z 값보다 크면 이런 조건으로도 할 수 있지만
조건문이 너무 길어지므로 대소문자 둘 중 하나 선택해서 조건문으로 사용

대문자로 변경 후 아스키코드 값에 n 을 더한 값이 90 보다 크면 a, A 로 돌아가야 하므로 -26
나머지는 그냥 n 값을 더한 아스키코드 값을 문자로 변환하면 끝
*/

function solution(s, n) {
  return [...s]
    .map((v) => {
      if (v === ' ') return v;
      return v.toUpperCase().charCodeAt() + n > 90
        ? String.fromCodePoint(v.charCodeAt() + n - 26)
        : String.fromCodePoint(v.charCodeAt() + n);
    })
    .join('');
}

let result = solution('a B z', 4);
console.log(result);

// 아스키코드 없이 푼 코드
function solution(s, n) {
  var upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var lower = 'abcdefghijklmnopqrstuvwxyz';
  var answer = '';

  for (var i = 0; i < s.length; i++) {
    var text = s[i];
    if (text == ' ') {
      answer += ' ';
      continue;
    }
    var textArr = upper.includes(text) ? upper : lower;
    var index = textArr.indexOf(text) + n;
    if (index >= textArr.length) index -= textArr.length;
    answer += textArr[index];
  }
  return answer;
}
