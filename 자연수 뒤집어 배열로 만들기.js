/*
숫자를 문자로 바꾸기
toString() , String(값)

배열 형태로 한 글자씩 나누기
split('') , [...변수명]

배열 뒤집기
reverse()
*/

function solution(n) {
  return n
    .toString()
    .split('')
    .reverse()
    .map((v) => Number(v));
}

let result = solution(12345);
console.log(result);

function solution(n) {
  // 숫자풀이
  let arr = [];

  do {
    arr.push(n % 10);
    n = Math.floor(n / 10);
  } while (n > 0);

  return arr;
}
