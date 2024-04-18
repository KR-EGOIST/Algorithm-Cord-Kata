// 팩토리얼 재귀함수 구현
function factorial(n) {
  return n ? n * factorial(n - 1) : 1;
}

/*
이때 마지막의 return 값을 round(반올림) 해주는 이유는 컴퓨터에서 부동소수점 문제가 생긴다.
여기서 부동소수점이란 근사값 방식으로 실수를 계산할 때, 컴퓨터의 숫자 표현방식 때문에 숫자를 나열하고 소수점을 움직이는 방식으로 표현하게 된다.
따라서 그냥 result값을 리턴하게 되면, 우리가 원하는 정확한 실수가 리턴되지 않으므로 round를 통해 반올림 해주는 것이다.
*/
function solution(balls, share) {
  return Math.round(
    factorial(balls) / (factorial(balls - share) * factorial(share))
  );
}

let result = solution(5, 3);
console.log(result);
