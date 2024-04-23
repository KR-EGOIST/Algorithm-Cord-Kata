// 인덱스는 0 번부터 시작하므로 -1, slice 는 두 번째 매개변수의 앞까지만 자르므로 +1

function solution(s) {
  let answer = '';
  
  if (s.length % 2 === 0) {
    answer = s.slice(s.length / 2 - 1, s.length / 2 + 1);
  } else {
    answer = s.slice(Math.round(s.length / 2) - 1, Math.round(s.length / 2));
  }
  return answer;
}

let result = solution('abcde');
console.log(result);

function solution(s) {
  const mid = Math.floor(s.length / 2);
  return s.length % 2 === 1 ? s[mid] : s[mid - 1] + s[mid];
}
