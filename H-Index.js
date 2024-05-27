function solution(citations) {
  const result = [];
  const len = citations.length;

  for (let i = 0; i < len; i++) {
    let cnt = 0;
    for (let j = 0; j < len; j++) {
      if (citations[i] <= citations[j]) {
        cnt++;
      }
    }
    citations[i] > cnt ? result.push(cnt) : result.push(citations[i]);
  }

  return Math.max(...result);
}

let result = solution([3, 0, 6, 1, 5]);
console.log(result);

//=========================================================

function solution(citations) {
  let answer = 0;

  citations.sort((a, b) => b - a);

  for (let i = 0; i < citations.length; i++) {
    if (citations[i] > i) answer++;
    else break;
  }

  return answer;
}
