// 실패한 코드 (시간 초과)
function solution(players, callings) {
  let answer = players.map((v) => v);

  callings.forEach((v) => {
    const index = answer.findIndex((i) => i === v);
    [answer[index - 1], answer[index]] = [answer[index], answer[index - 1]];
  });
  return answer;
}

//=============================================

function solution(players, callings) {
  const hash = new Map();

  players.forEach((player, i) => {
    hash.set(player, i);
  });

  callings.forEach((player) => {
    const curIdx = hash.get(player);
    const front = players[curIdx - 1];

    [players[curIdx], players[curIdx - 1]] = [
      players[curIdx - 1],
      players[curIdx],
    ];

    hash.set(player, hash.get(player) - 1);
    hash.set(front, hash.get(player) + 1);
  });

  return players;
}

let result = solution(
  ['mumu', 'soe', 'poe', 'kai', 'mine'],
  ['kai', 'kai', 'mine', 'mine']
);
console.log(result);

//=================================================

function solution(players, callings) {
  const rank = {};
  players.forEach((c, i) => (rank[c] = i));
  for (const winner of callings) {
    let winnerI = rank[winner];
    let loserI = winnerI - 1;

    rank[winner]--;
    rank[players[loserI]]++;

    players[winnerI] = players[loserI];
    players[loserI] = winner;
  }
  return players;
}
