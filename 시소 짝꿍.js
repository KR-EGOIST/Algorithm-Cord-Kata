function solution(weights) {
  const obj = {};
  // 경우의 수 (1, 1) (2, 3) (2, 4) (3, 4)
  const ratio = [1, 3 / 2, 2, 4 / 3];
  let result = 0;

  // 큰 값부터 시소 짝궁이 가능한 값을 찾기 위해 내림차순 정렬
  weights
    .sort((a, b) => b - a)
    .forEach((w) => {
      // 가능한 모든 비율을 적용하여 짝궁 찾고,
      // 짝궁을 찾으면 result에 추가, 중복되는 짝궁의 개수만큼 추가한다.
      ratio.forEach((r) => {
        if (obj[w * r]) result += obj[w * r];
      });

      // 중복되는 값만큼 추가하기 위해 중복 값 카운트
      obj[w] = (obj[w] || 0) + 1;
    });

  return result;
}

let result = solution([100, 180, 360, 100, 270]);
console.log(result);
