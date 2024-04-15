function solution(array) {
  let m = new Map();
  for (const n of array) {
    m.set(n, (m.get(n) || 0) + 1);
  }
  // key 값을 기준으로 내림차순
  m = [...m].sort((a, b) => b[1] - a[1]);

  // 첫번째 key 값이 두번째 key 값 보다 빈도수가 높으면 첫번째 key 값을 리턴
  // 첫번째 값만 있으면 첫번째 key 값 리턴
  // 빈도수가 같으면 -1 리턴
  return m.length == 1 || m[0][1] > m[1][1] ? m[0][0] : -1;
}

let result = solution([1, 2, 3, 3, 3, 4]);
console.log(result);
