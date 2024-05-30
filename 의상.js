function solution(clothes) {
  const cMap = new Map();

  // 의상을 type 별로 갯수를 구한다.
  for (const [item, type] of clothes) {
    if (cMap.get(type)) {
      cMap.set(type, cMap.get(type) + 1);
    } else {
      cMap.set(type, 1);
    }
  }

  // 만약 A, B, C 세 종류가 들어온다면 가능한 모든 조합은 (A+1)(B+1)(C+1)이다.
  // ABC + AB + AC + BC + A + B + C = (A+1)(B+1)(C+1) 이다.
  let result = 1;
  for (const [key, value] of cMap) {
    result *= value + 1;
  }

  // 여기에서 최소한 한 개의 아이템이라도 걸치고 있어야 하므로 아무것도 안입고 있는 경우 -1을 빼주어야 한다.
  return result - 1;
}

let result = solution([
  ['yellow_hat', 'headgear'],
  ['blue_sunglasses', 'eyewear'],
  ['green_turban', 'headgear'],
]);
console.log(result);
