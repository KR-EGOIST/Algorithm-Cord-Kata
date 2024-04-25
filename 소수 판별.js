/*
문제 3. 주어진 숫자가 소수인지 아닌지 판별하는 함수를 작성해주세요.
소수는 1과 자기 자신으로만 나누어지는 1보다 큰 정수입니다.
(힌트: 나머지 값을 구하는 연산자는 % 입니다. → e.g. 3 % 2는 1입니다.)
*/

function solution(n) {
  // 2면 1, 2 약수이므로 소수
  if (n === 2) return true;
  // Math.sqrt 는 제곱근 반환
  // Math.floor() 는 주어진 숫자와 같거나 작은 정수 중에서 가장 큰 수를 반환
  for (let i = 2; i <= Math.floor(Math.sqrt(n)); i++) {
    // 한번이라도 나눠지면 소수가 아님
    if (n % i === 0) return false;
  }
  // 나눠진 수가 없으면 소수임
  return true;
}

const result = solution(17);
console.log(result);
