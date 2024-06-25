const directions = [
  [1, 0],
  [0, 1],
  [-1, -1],
];

function solution(n) {
  let arr = Array.from({ length: n }, () => new Array(n).fill(0));
  let result = [];

  let row = -1;
  let col = 0;

  let num = 1;
  let index = 0;

  for (let i = 0; i < n; i++) {
    const [dRow, dCol] = directions[index];

    for (let j = i; j < n; j++) {
      row += dRow;
      col += dCol;
      arr[row][col] = num;
      num++;
    }

    index = (index + 1) % directions.length;
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (arr[i][j]) {
        result.push(arr[i][j]);
      }
    }
  }

  return result;
}


let result = solution(4);
console.log(result);
