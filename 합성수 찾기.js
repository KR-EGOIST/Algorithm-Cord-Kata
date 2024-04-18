/*
  1 부터 n 까지 숫자가 증가하면서
  각 숫자마다 1 부터 n 까지 나눈 나머지가 0 이면 약수 이므로 check++

  합성수는 약수의 개수가 세 개 이상인 수 이므로 check 가 3 이상이면 count++
*/

function solution(n) {
  let count = 0;

  for (let i = 1; i <= n; i++) {
    let check = 0;

    for (let j = 1; j <= n; j++) {
      if (i % j === 0) check++;
    }
    if (check >= 3) count++;
  }
  return count;
}

let result = solution(15);
console.log(result);
