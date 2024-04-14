function solution(num1, num2) {
  return Math.floor((num1 / num2) * 1000);
}

// Math.trunc()는 소수점 이하는 다 버린다.
function solution(num1, num2) {
  return Math.trunc((num1 / num2) * 1000);
}

let result = solution(2, 3);
console.log(result);
