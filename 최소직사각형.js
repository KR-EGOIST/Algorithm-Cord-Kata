/*
배열의 요소를 내림차순으로 정렬해 가로의 길이가 더 큰 값이 들어가도록 한다.
구조 분해 할당으로 a b 에 각각 가로 세로 길이를 할당
가로 세로의 가장 큰 값을 찾고 가로 * 세로 를 반
*/

function solution(sizes) {
  let maxWidth = 0;
  let maxHight = 0;

  sizes.forEach((v) => {
    const [a, b] = v.sort((a, b) => b - a);

    if (a > maxWidth) maxWidth = a;
    if (b > maxHight) maxHight = b;
  });

  return maxWidth * maxHight;
}

let result = solution([
  [60, 50],
  [30, 70],
  [60, 30],
  [80, 40],
]);
console.log(result);

// 구조분해할당 과 reduce 메소드 , Math.max 사용
function solution(sizes) {
  const [hor, ver] = sizes.reduce(
    ([h, v], [a, b]) => [
      Math.max(h, Math.max(a, b)),
      Math.max(v, Math.min(a, b)),
    ],
    [0, 0]
  );
  return hor * ver;
}
