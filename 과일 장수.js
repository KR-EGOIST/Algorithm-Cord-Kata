function solution(k, m, score) {
  score.sort((a, b) => b - a);
  let appleBoxs = [];
  let appleBox = [];
  // 한 상자에 사과를 m개씩 담아 포장합니다.
  for (let i = 0; i < score.length; i += m) {
    if (i + m > score.length) break;
    appleBox = score.slice(i, i + m);
    appleBoxs.push(appleBox);
  }

  // 상자에 담긴 사과 중 가장 낮은 점수가 p (1 ≤ p ≤ k)점인 경우,
  // 사과 한 상자의 가격은 p * m 입니다.
  let result = 0;
  for (let i = 0; i < appleBoxs.length; i++) {
    result += Math.min(...appleBoxs[i]) * m;
  }
  return result;
}


let result = solution(4, 3, [4, 1, 2, 2, 4, 4, 4, 4, 1, 2, 4, 2]);
console.log(result);

//==================================================================

function solution(k, m, score) {
    let answer = 0;
    const sortedScore = score.slice().sort((a, b) => a - b).slice(score.length % m);
    for (let i = 0; i < sortedScore.length; i += m) {
        answer += sortedScore[i] * m;
    }
    return answer;
}
