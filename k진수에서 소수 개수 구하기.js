// 소수 판별 함수
// 1 이하 이면 false
// 2 이상 이면서 나누었을 때 나머지가 0 이 되는 수가 있으면 false
function isPrimeNum(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function solution(n, k) {
  let answer = 0;
  let num = n.toString(k);
  let numArr = num.split('0');
  for (let i = 0; i < numArr.length; i++) {
    if (isPrimeNum(Number(numArr[i]))) {
      answer++;
    }
  }
  return answer;
}

let result = solution(437674, 3);
console.log(result);
