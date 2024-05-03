function solution(answers) {
  const one = [1, 2, 3, 4, 5];
  const two = [2, 1, 2, 3, 2, 4, 2, 5];
  const three = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  const Score = [0, 0, 0];

  for (let i = 0; i < answers.length; i++) {
    if (one[i % 5] === answers[i]) Score[0]++;
    if (two[i % 8] === answers[i]) Score[1]++;
    if (three[i % 10] === answers[i]) Score[2]++;
  }

  // 가장 많은 문제를 맞힌 사람이 누구인지 배열에 담아 return
  const result = [];
  const maxScore = Math.max(...Score);
  let idx = 0;

  for (let i = 0; i < Score.length; i++) {
    if (maxScore === Score[i]) {
      result[idx] = i + 1;
      idx++;
    }
  }
  return result;
}

let result = solution([1, 2, 3, 4, 5]);
console.log(result);
