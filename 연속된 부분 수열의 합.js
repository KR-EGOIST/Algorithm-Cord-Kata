function solution(sequence, k) {
  let left = 0;
  let right = 0;
  let sum = sequence[0];
  const result = [];

  while (right < sequence.length) {
    // k보다 작으면 오른쪽 포인터 이동
    if (sum < k) {
      right++;
      sum += sequence[right];
    }
    // k보다 크면 왼쪽 포인터 이동
    else if (sum > k) {
      sum -= sequence[left];
      left++;
    }
    // k와 같으면 result에 push
    else {
      result.push([left, right]);
      right++;
      sum += sequence[right];
    }
  }
  // 후보 중 인덱스 차가 가장 적은 것을 리턴
  result.sort((a, b) => Math.abs(a[0] - a[1]) - Math.abs(b[0] - b[1]));

  return result[0];
}

let result = solution([1, 2, 3, 4, 5], 7);
console.log(result);
