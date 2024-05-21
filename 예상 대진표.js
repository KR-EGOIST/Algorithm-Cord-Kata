/*
첫 번째 반복에서 a 와 b 는 다음 라운드의 번호인 a 는 2 가 되고 b 는 4 가 됩니다. 라운드 수는 1 이 됩니다.
두 번째 반복에서 a 와 b 는 다음 라운드의 번호인 a 는 1 가 되고 b 는 2 가 됩니다. 라운드 수는 2 이 됩니다.
세 번째 반복에서 a 와 b 는 다음 라운드의 번호인 a 는 1 가 되고 b 는 1 가 됩니다. 라운드 수는 3 이 됩니다.

즉, 같은 숫자가 될 때 까지 반복하는 것으로 문제를 해결할 수 있습니다.
라운드 번호는 [1, 2] , [3, 4] ... [n - 1, n] 끼리 붙으므로 2로 나누고 소숫점은 오름처리해 짝끼리 같은 라운드 번호를 가리키게 합니다.
*/

function solution(n, a, b) {
  let answer = 0;

  while (a !== b) {
    a = Math.ceil(a / 2);
    b = Math.ceil(b / 2);
    answer++;
  }

  return answer;
}

let result = solution(8, 4, 7);
console.log(result);
