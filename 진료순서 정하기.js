/*
  slice() 메서드는 어떤 배열의 begin 부터 end 까지(end 미포함)에 대한 얕은 복사본을 새로운 배열 객체로 반환합니다.
  원본 배열은 바뀌지 않습니다.

  emergency 를 slice() 로 배열을 복사한 뒤 sort b-a 로 내림차순 정렬

  emergency 를 기준으로 map 반복문 사용.
  sorted 값이 emergency 에 몇 번째 인덱스에 있는지 찾고 순서를 나타내야 하므로 +1 을 해야 한다.
*/

/*
  spread 연산자를 사용하면 배열은 유지가 되지만,
  객체 배열은 유지되지 않는다.
*/

function solution(emergency) {
  let sorted = [...emergency].sort((a, b) => b - a);

  return emergency.map((v) => {
    return sorted.indexOf(v) + 1;
  });
}

let result = solution([30, 10, 23, 6, 100]);
console.log(result);
