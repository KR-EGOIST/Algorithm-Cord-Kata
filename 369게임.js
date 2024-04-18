function solution(order) {
  return String(order)
    .split('')
    .filter((v) => ['3', '6', '9'].includes(v)).length;
}

let result = solution(29423);
console.log(result);

/*
Set 자료구조와 Match 메서드를 사용한 경우 둘 다 효율적이고 좋은 코드입니다. 
Set 자료구조는 검색 속도가 빠르다는 장점이 있습니다. 
자료구조를 생성하고 각 요소를 Set 객체에 포함시켜 놓고 탐색을 할 때 검색 속도가 빠르다는 것이 강점입니다. 
Match 메서드는 정규식을 이용해 특정 패턴을 찾을 때 유용하게 사용할 수 있습니다. 
그러나, 이 경우에는 간단한 검색을 하는 것이기 때문에 Set 자료구조를 사용한 것이 더 간결하고 효율적일 것입니다. 
따라서, 위에서 제시한 두 코드 모두 효율적이고 좋은 코드입니다. 
개발자의 선호에 따라 선택하면 됩니다.
*/

function solution(order) {
  const mySet = new Set([3, 6, 9]);
  return String(order)
    .split('')
    .filter((num) => mySet.has(Number(num))).length;
}

function solution(order) {
  var answer = [...order.toString().matchAll(/[3|6|9]/g)].length;
  return answer;
}
