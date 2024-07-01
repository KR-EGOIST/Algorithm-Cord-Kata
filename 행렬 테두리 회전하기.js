function solution(rows, columns, queries) {
  const answer = [];
  const board = [...Array(rows)].map((_, r) =>
    [...Array(columns)].map((_, c) => r * columns + (c + 1))
  );

  queries.forEach((query) => {
    const [x1, y1, x2, y2] = query.map((v) => v - 1);
    const queue = [];

    for (let i = 0; i < y2 - y1; i++) {
      queue.push(board[x1][y1 + i]);
    }

    for (let i = 0; i < x2 - x1; i++) {
      queue.push(board[x1 + i][y2]);
    }

    for (let i = 0; i < y2 - y1; i++) {
      queue.push(board[x2][y2 - i]);
    }

    for (let i = 0; i < x2 - x1; i++) {
      queue.push(board[x2 - i][y1]);
    }

    queue.unshift(queue.pop());
    answer.push(Math.min(...queue));

    for (let i = 0; i < y2 - y1; i++) {
      board[x1][y1 + i] = queue.shift();
    }

    for (let i = 0; i < x2 - x1; i++) {
      board[x1 + i][y2] = queue.shift();
    }

    for (let i = 0; i < y2 - y1; i++) {
      board[x2][y2 - i] = queue.shift();
    }

    for (let i = 0; i < x2 - x1; i++) {
      board[x2 - i][y1] = queue.shift();
    }
  });

  return answer;
}

let result = solution(100, 97, [[1, 1, 100, 97]]);
console.log(result);
