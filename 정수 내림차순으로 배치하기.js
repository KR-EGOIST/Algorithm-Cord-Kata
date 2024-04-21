/*
sort((a, b) => a - b) 오름차순
sort((a, b) => b - a) 내림차순
*/

function solution(n) {
  let answer = n
    .toString()
    .split('')
    .sort((a, b) => b - a)
    .join('');
  return Number(answer);
}

let result = solution(118372);
console.log(result);

function solution(n) {
  // 문자풀이
  return parseInt((n + '').split('').sort().reverse().join(''));
}
