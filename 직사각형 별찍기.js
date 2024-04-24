/*
repeat() 메서드는 문자열을 주어진 횟수만큼 반복해 붙인 새로운 문자열을 반환합니다.

str.repeat(count);
*/

process.stdin.setEncoding('utf8');
process.stdin.on('data', (data) => {
  const n = data.split(' ');
  const a = Number(n[0]),
    b = Number(n[1]);
  const star = '*'.repeat(a);
  for (let i = 0; i < b; i++) {
    console.log(star);
  }
});

//===============================================================

/*
이중 for 문 풀이법
*/

process.stdin.setEncoding('utf8');
process.stdin.on('data', (data) => {
  const n = data.split(' ');
  const a = Number(n[0]),
    b = Number(n[1]);
  for (let i = 0; i < b; i++) {
    let star = '';
    for (let j = 0; j < a; j++) {
      star += '*';
    }
    console.log(star);
  }
});
