function solution(d, budget) {
  let result = 0;
  let sum = 0;

  // 최대한 많은 부서에 지원해주기 위해 오름차순 정렬
  d.sort((a, b) => a - b);

  for (let i = 0; i < d.length; i++) {
    // 만약 sum + d[i]가 budget 보다 작거나 같을 때만
    // result++
    if (sum + d[i] <= budget) {
      sum += d[i];
      result++;
    }
    // 만약 sum + d[i]가 budget 보다 커지면 break;
    else {
      break;
    }
  }

  return result;
}

let result = solution([1, 3, 2, 5, 4], 9);
console.log(result);

//=======================================================

function solution(d, budget) {
  d.sort((a, b) => a - b);

  while (d.reduce((acc, cur) => acc + cur, 0) > budget) {
    d.pop();
  }

  return d.length;
}
