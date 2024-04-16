/*
자바스크립트에서 filter는 배열에 사용하는 메서드
주어진 함수를 만족하는 모든 요소를 모아 새 배열로 반환한다.

arr.filter(callback(element[, index[, array]])[, thisArg])

1. 배열.filter(콜백함수명(),[콜백 실행할때 this로 사용하는 값])

2. 배열.filter(콜백함수명(처리할 현재 요소,인덱스,filter 호출한 배열))
*/

/*
includes 메서드는 배열이 특정 요소를 포함하고 있는지 판별하는 메서드

arr.includes(valueToFind[, fromIndex])

1. valueToFind : 탐색할 요소
2. fromIndex : 탐색을 시작할 위치 (기본값 0)

반환값: Boolean 값
*/

function solution(s1, s2) {
  return s1.filter((v) => s2.includes(v)).length;
}

let result = solution(['a', 'b', 'c'], ['com', 'b', 'd', 'p', 'c']);
console.log(result);

// function solution(s1, s2) {
//   var answer = 0;
//   for (var i = 0; i < s1.length; i++) {
//     for (var j = 0; j < s2.length; j++) {
//       if (s1[i] === s2[j]) answer++;
//     }
//   }
//   return answer;
// }
