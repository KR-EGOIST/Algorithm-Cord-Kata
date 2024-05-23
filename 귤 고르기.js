function solution(k, tangerine) {
  const tObj = {};

  // tangerine 배열의 각 숫자의 빈도수를 tObj 객체에 저장
  // key = value 쌍으로 저장
  tangerine.forEach((v) => {
    tObj[v] = (tObj[v] || 0) + 1;
  });

  // 서로 다른 종류가 최소일 때 라고 문제에 주어졌으므로
  // 빈도수가 가장 높은 숫자부터 정렬한 배열을 만든다.
  const sortedArr = Object.values(tObj).sort((a, b) => b - a);

  let sum = 0;
  let result = 0;

  // 빈도수가 가장 높은 숫자부터 더해가면서 k보다 작아지면 멈춘다.
  for (const key in sortedArr) {
    result++;
    sum += sortedArr[key];

    if (sum >= k) break;
  }

  return result;
}

let result = solution(6, [1, 3, 2, 5, 4, 5, 2, 3]);
console.log(result);
