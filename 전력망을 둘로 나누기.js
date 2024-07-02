function solution(n, wires) {
  // n이 100 이하이므로 answer를 101로 초기화
  let answer = 101;

  // 인덱스는 0부터 전선은 1부터 시작하기 때문에 n + 1
  const tree = Array.from(Array(n + 1), () => []);

  // 인덱스는 노드, 해당 인덱스에 연결된 노드들을 저장
  // 각 전선을 연결된 노드들로 그래프에 추가
  wires.forEach((value) => {
    let [a, b] = value;
    tree[a].push(b);
    tree[b].push(a);
  });

  // start : bfs 탐색 시작점
  // except : 제외할 노드
  const bfs = (start, except) => {
    const visited = Array.from(Array(n + 1), () => false);
    const queue = [start];
    visited[start] = true;
    let count = 0;

    while (queue.length) {
      const node = queue.shift();

      // 제외할 노드이면 continue
      if (node === except) continue;

      count++;

      tree[node].forEach((next) => {
        // 방문하지 않은 노드이면 방문 가능
        if (!visited[next]) {
          // 방문 완료 표시
          visited[next] = true;
          // 다음 방문을 위해 queue 에 push
          queue.push(next);
        }
      });
    }
    return count;
  };

  // 모든 노드 간의 연결을 하나씩 제외해가면서 완전탐색
  wires.forEach((value) => {
    const [a, b] = value;
    answer = Math.min(answer, Math.abs(bfs(a, b) - bfs(b, a)));
  });

  return answer;
}

let result = solution(9, [
  [1, 3],
  [2, 3],
  [3, 4],
  [4, 5],
  [4, 6],
  [4, 7],
  [7, 8],
  [7, 9],
]);
console.log(result);
