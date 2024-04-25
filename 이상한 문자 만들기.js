/*
map 메소드는 무조건 배열 형태여야만 작동하니 배열 형태로 변환시켜줘야 합니다.
*/

function solution(s) {
  return s
    .split(' ')
    .map((a) =>
      a
        .split('')
        .map((b, j) => (j % 2 === 0 ? b.toUpperCase() : b.toLowerCase()))
        .join('')
    )
    .join(' ');
}

let result = solution('try hello world');
console.log(result);
