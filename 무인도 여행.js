const move = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];

function solution(maps) {
  let result = [];
  // maps 배열의 가로 세로 length를 변수에 담아둔다.
  const row = maps.length;
  const col = maps[0].length;

  // visited 배열을 row * col 크기인 2차원 배열로 선언, 전부 false로 초기화
  const visited = Array.from(Array(row), () => Array(col).fill(false));

  // bfs로 연결되어있는 요소들의 합을 구함
  const bfs = (startX, startY) => {
    const queue = [[startX, startY]]; // 연결되어 있는 위치를 담아둘 queue
    visited[startX][startY] = true; // 처음 startX, startY 좌표에 방문했으므로 true 로 변경
    let totalDays = 0; // 최대 며칠씩 머무를 수 있는지

    while (queue.length > 0) {
      const [curX, curY] = queue.shift(); // queue 의 맨 앞 x, y요소를 꺼낸다.
      totalDays += Number(maps[curX][curY]); // 해당 x, y 좌표의 maps 배열 요소값을 totalDays에 더한다.

      // 4방향으로 이동하며, 이동할 위치가 maps의 경계, visited(이미 방문), or 'X'일 경우 continue
      for (let i = 0; i < 4; i++) {
        const nextX = curX + move[i][0];
        const nextY = curY + move[i][1];

        if (nextX < 0 || nextX >= row || nextY < 0 || nextY >= col) {
          continue;
        }

        if (visited[nextX][nextY] || maps[nextX][nextY] === 'X') {
          continue;
        }

        // visited의 x, y 좌표값을 true 로 바꾸고, 이동할 위치를 queue에 push
        visited[nextX][nextY] = true;
        queue.push([nextX, nextY]);
      }
    }

    return totalDays;
  };

  // maps 배열을 순회하면서 i, j 값이 'X'가 아니고, 방문한 적이 없으면 bfs수행
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (maps[i][j] !== 'X' && !visited[i][j]) {
        result.push(bfs(i, j));
      }
    }
  }

  result.sort((a, b) => a - b);

  if (result.length === 0) {
    return [-1];
  } else {
    return result;
  }
}

let result = solution(['X591X', 'X1X5X', 'X231X', '1XXX1']);
console.log(result);
