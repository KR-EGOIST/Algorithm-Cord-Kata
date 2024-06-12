function solution(topping) {
  // 전체 토핑별 갯수를 담을 Map 객체
  const map = new Map();
  // 형의 토핑의 종류를 담을 Set 객체
  const bro = new Set();
  // 형과 동생이 동일한 가짓수의 토핑이 올라가면 공평하게 롤케이크가 나누어진 것
  let result = 0;
  // Map 에 토핑별 개수를 담는다.
  for (let i = 0; i < topping.length; i++) {
    map.has(topping[i])
      ? map.set(topping[i], map.get(topping[i]) + 1)
      : map.set(topping[i], 1);
  }

  // 토핑의 개수만큼 반복
  for (let i = 0; i < topping.length; i++) {
    // Map에 담긴 토핑을 하나씩 빼서 형에게 준다.
    let count = map.get(topping[i]) - 1;
    bro.add(topping[i]);

    // 토핑의 개수가 0이 되면 Map 에서 삭제하고, 남아 있으면 위에서 연산한 count 를 삽입한다.
    // count 는 현재 map 에 담긴 토핑을 하나뺀 갯수 이다.
    count === 0 ? map.delete(topping[i]) : map.set(topping[i], count);
    /*
      Map에 남아있는 토핑의 종류가 곧 동생의 토핑의 종류이기 때문에
      형의 토핑의 개수와 동생의 토핑의 개수를 비교해 같으면 result 증가
    */
    if (bro.size === map.size) {
      result++;
    }
  }
  // 공평하게 나누어진 횟수를 반환한다.
  return result;
}

let result = solution([1, 2, 1, 3, 1, 4, 1, 2]);
console.log(result);

//====================================================================

