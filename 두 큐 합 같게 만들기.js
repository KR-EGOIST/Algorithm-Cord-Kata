function solution(queue1, queue2) {
  let result = 0;
  const totalLen = queue1.length + queue2.length;
  let q1Index = 0;
  let q2Index = 0;
  let q1Sum = queue1.reduce((acc, cur) => acc + cur, 0);
  let q2Sum = queue2.reduce((acc, cur) => acc + cur, 0);

  while (q1Sum !== q2Sum) {
    // q1 의 합이 q2 의 합보다 크면
    if (q1Sum > q2Sum) {
      q1Sum -= queue1[q1Index];
      queue2.push(queue1[q1Index]);
      q2Sum += queue1[q1Index];
      q1Index++;
    }
    // q2 의 합이 q1 의 합보다 크면
    else {
      q2Sum -= queue2[q2Index];
      queue1.push(queue2[q2Index]);
      q1Sum += queue2[q2Index];
      q2Index++;
    }

    result++;
    if (q1Index > totalLen || q2Index > totalLen) {
      return -1;
    }
  }
  return result;
}

let result = solution([3, 2, 7, 2], [4, 6, 5, 1]);
console.log(result);
