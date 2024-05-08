function solution(lottos, win_nums) {
  const rank = [6, 6, 5, 4, 3, 2, 1];

  let minRank = lottos.filter((v) => win_nums.includes(v)).length;
  let zero = lottos.filter((v) => v === 0).length;

  const maxRank = minRank + zero;

  return [rank[maxRank], rank[minRank]];
}

let result = solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19]);
console.log(result);

//====================================================================

function solution(lottos, win_nums) {
  const answer = [];
  const min = lottos.filter((n) => win_nums.includes(n)).length;
  const max = lottos.filter((n) => n === 0).length + min;

  max > 1 ? answer.push(7 - max) : answer.push(6);
  min > 1 ? answer.push(7 - min) : answer.push(6);

  return answer;
}
