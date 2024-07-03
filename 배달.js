function solution(N, road, K) {
  // K 보다 커야 filter로 걸러낼 수 있다.
  const result = Array(N + 1).fill(Number.MAX_SAFE_INTEGER);
  // N + 1 만큼 배열 생성
  const lines = Array.from(Array(N + 1), () => []);

  // 연결된 경로를 모두 lines에 저장
  // to : 갈 수 있는 길
  // time : 이동하는데 걸리는 시간
  for (const [a, b, c] of road) {
    lines[a].push({ to: b, time: c });
    lines[b].push({ to: a, time: c });
  }

  // 1번 음식점을 출발점으로 지정
  let queue = [{ to: 1, time: 0 }];
  // 출발점(음식점 1)의 거리값을 0으로 설정
  result[1] = 0;

  // queue가 빈 배열이 될 때까지 반복
  while (queue.length) {
    const { to } = queue.shift();

    for (const line of lines[to]) {
      // 기존값보다 우회값이 더 작으면 우회값으로 저장
      if (result[line.to] > result[to] + line.time) {
        result[line.to] = result[to] + line.time;
        queue.push(line);
      }
    }
  }

  return result.filter((v) => v <= K).length;
}

let result = solution(
  5,
  [
    [1, 2, 1],
    [2, 3, 3],
    [5, 2, 2],
    [1, 4, 2],
    [5, 3, 1],
    [5, 4, 2],
  ],
  3
);
console.log(result);
