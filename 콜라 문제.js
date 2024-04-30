/*
Math.floor() 함수는 주어진 숫자와 같거나 작은 정수 중에서 가장 큰 수를 반환합니다.

parseInt() 함수는 문자열 인자를 파싱하여 특정 진수(수의 진법 체계에서 기준이 되는 값)의 정수를 반환합니다.

console.log(parseInt('1.9'));
// 1 (decimal part is truncated)
*/

// 콜라를 받기 위해 마트에 주어야 하는 병 수 a
// 빈 병 a개를 가져다 주면 마트가 주는 콜라 병 수 b
// 상빈이가 가지고 있는 빈 병의 개수 n
function solution(a, b, n) {
  // 교환한 콜라의 갯수
  let coke = 0;

  // 교환 불가능할 때까지 반복
  while (n >= a) {
    coke += Math.floor(n / a) * b;
    n = Math.floor(n / a) * b + (n % a);
  }

  return coke;
}

let result = solution(3, 1, 20);
console.log(result);

solution = (a, b, n) => Math.floor(Math.max(n - b, 0) / (a - b)) * b;

function solution(a, b, n) {
  let answer = 0;
  while (n >= a) {
    answer += parseInt(n / a) * b;
    n = parseInt(n / a) * b + (n % a);
  }
  return answer;
}
