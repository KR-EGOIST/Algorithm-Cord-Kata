// 오름차순 정렬 후 뒤집으면 내림차순
function solution(s) {
  return [...s].sort().reverse().join('');
}

function solution(s) {
  return s.split('').sort().reverse().join('');
}

let result = solution('Zbcdefg');
console.log(result);

// 내림차순 정렬 삼항연산자로 표현
function solution(s) {
  return s
    .split('')
    .sort((a, b) => (a < b ? 1 : -1))
    .join('');
}
