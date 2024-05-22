function getGcd(a, b) {
  if (b === 0) return a;
  return getGcd(b, a % b);
}

// a는 누적 값, b는 현재 요소의 값
// 초기 값을 설정하지 않았으니 a는 첫 번째 요소의 값, b는 두 번째 요소의 값이다.

// [2,6,8,14] -> [6,8,14] -> [24, 14] -> [168]
// (2 * 6) / 2 = 6 -> (6 * 8) / 2 = 24 -> (24 * 14) / 2 = 168
function solution(arr) {
  let result = arr.reduce((a, b) => {
    console.log(a, b);
    return (a * b) / getGcd(a, b);
  });

  return result;
}

let result = solution([2, 6, 8, 14]);
console.log(result);

//===============================================================

function solution(arr) {
  // 최대 공약수를 위해 내림차순으로 정렬해준다.
  // 정렬하는 이유 gcd 연산 중 (작은 값 / 큰 값) 으로 나누는 경우의 입력을 방지하기 위해서 입니다.
  arr.sort((a, b) => b - a);
  let r,
    m,
    n = 0,
    acc = arr[0];
  for (let i = 1; i < arr.length; ++i) {
    // 유클리드 호제법으로 두 수의 최대공약수를 구한다.
    m = acc; // 큰 수
    n = arr[i]; // 작은 수
    while (0 < n) {
      r = m % n;
      m = n;
      n = r;
    }
    // m은 두 수의 최대공약수, acc에 두 수의 최소공배수를 누적시킨다.
    acc = (acc * arr[i]) / m;
  }
  return acc;
}

//=================================================================

// 리듀스 함수 응용 풀이
function solution(arr) {
  let r,
    m,
    n = 0;
  return arr
    .sort((a, b) => b - a)
    .reduce((acc, cur) => {
      m = acc;
      n = cur;
      while (0 < n) {
        r = m % n;
        m = n;
        n = r;
      }
      return (acc * cur) / m;
    });
}
