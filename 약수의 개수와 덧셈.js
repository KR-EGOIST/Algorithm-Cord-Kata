function solution(left, right) {
  let result = 0;

  for (let i = left; i <= right; i++) {
    let items = [];
    for (let j = 1; j <= Math.sqrt(i); j++) {
      if (i % j == 0) {
        items.push(j);
        if (j != i / j) {
          items.push(i / j);
        }
      }
    }
    result += !(items.length % 2) ? i : -i;
  }
  return result;
}

let result = solution(13, 17);
console.log(result);

/*
Number.isInteger() 메서드는 주어진 값이 정수인지 판별합니다.
Math.sqrt() 함수는 숫자의 제곱근을 반환합니다.
*/

// 제곱근이 정수일 때 약수의 갯수가 홀수라는 사실을 이용한 풀이
function solution(left, right) {
  var answer = 0;
  for (let i = left; i <= right; i++) {
    console.log(Number.isInteger(Math.sqrt(i)));
    if (Number.isInteger(Math.sqrt(i))) {
      answer -= i;
    } else {
      answer += i;
    }
  }
  return answer;
}
