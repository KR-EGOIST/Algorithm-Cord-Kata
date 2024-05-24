function solution(elements) {
  const eSet = new Set();
  const len = elements.length;

  // elements 배열에 시작위치를 알려주는 for문
  for (let i = 0; i < len; i++) {
    // 합계 저장
    let sum = 0;
    // 연속 부분 수열 시작위치부터 i+len 까지 순회
    for (let j = i; j < i + len; j++) {
      // j % len 인덱스를 순환하면서 sum에 더함
      sum += elements[j % len];
      // console.log(`[${i}, ${j}] :`, sum);
      eSet.add(sum);
    }
  }

  return eSet.size;
}

let result = solution([7, 9, 1, 1, 4]);
console.log(result);

//=====================================================

function solution(elements) {
  // 중복이 안담기게 set을 사용
  const set = new Set();
  const n = elements.length;
  // elements에 마지막 요소만 빼고 합쳐주었다.
  const arr = [...elements, ...elements.slice(0, n - 1)];

  // 이중 for문으로 sum값을 구함
  for (let i = 1; i <= n; i++) {
    for (let j = 0; j < n; j++) {
      const sum = arr.slice(j, j + i).reduce((a, b) => a + b, 0);
      // set에 추가
      set.add(sum);
    }
  }

  // set의 길이
  return set.size;
}
