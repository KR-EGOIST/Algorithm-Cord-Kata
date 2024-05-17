function solution(park, routes) {
  let pos = [0, 0];
  const dict = {
    E: [0, 1],
    W: [0, -1],
    N: [-1, 0],
    S: [1, 0],
  };

  for (let row = 0; row < park.length; row++) {
    const col = park[row].indexOf('S');
    if (col !== -1) {
      pos = [row, col];
      break;
    }
  }

  routes.forEach((route, i) => {
    const [d, n] = route.split(' ');
    const tempPos = [...pos];
    let flag = true;

    for (let i = 0; i < n; i++) {
      tempPos[0] += dict[d][0];
      tempPos[1] += dict[d][1];

      if (
        tempPos[0] < 0 ||
        tempPos[0] > park.length - 1 ||
        tempPos[1] < 0 ||
        tempPos[1] > park[0].length - 1
      ) {
        flag = false;
        break;
      }

      if (park[tempPos[0]][tempPos[1]] === 'X') {
        flag = false;
        break;
      }
    }

    if (flag) {
      pos = tempPos;
    }
  });

  return pos;
}

let result = solution(['OSO', 'OOO', 'OXO', 'OOO'], ['E 2', 'S 3', 'W 1']);
console.log(result);

//======================================================================

function solution(park, routes) {
  // 직사각형 공원이 가로 세로 길이
  const maxRow = park.length - 1;
  const maxCol = park[0].length - 1;

  // 시작 지점의 좌표를 구한다.
  // findIndex(), includes() 메서드를 이용해 몇 번째 행에 있는지를 구한다.
  // 구한 행에서 indexOf() 메서드를 이용해 몇 번째 열에 있는지 구한다.
  let row = park.findIndex((s) => s.includes('S'));
  let col = park[row].indexOf('S');

  // routes를 forEach() 메서드를 이용해 요소를 하나씩 확인한다.
  routes.forEach((position) => {
    // 요소를 빈칸 기준으로 나눠준다. (구조분해할당을 이용)
    // d = "E" / n = "2"
    const [d, n] = position.split(' ');

    // 임시 좌표를 만들어주고 flag도 하나 만들어준다.
    let tempRow = row;
    let tempCol = col;
    let flag = true;

    // 구한 이동거리 수 만큼 for문을 돌려준다.
    for (let i = 0; i < Number(n); i++) {
      // 동서 쪽 일 경우 행을 더하거나 빼주고
      // 남북 쪽 일 경우 열을 더하거나 빼준다.
      if (d === 'E') tempCol++;
      else if (d === 'W') tempCol--;
      else if (d === 'S') tempRow++;
      else if (d === 'N') tempRow--;

      // 그 후 행과 열이 공원을 벗어나는지
      // 행과 열의 좌표에 장애물이 없는지를 확인한다.
      if (
        tempRow > maxRow ||
        tempRow < 0 ||
        tempCol > maxCol ||
        tempCol < 0 ||
        park[tempRow][tempCol] === 'X'
      ) {
        // 장애물이 있거나 공원을 벗어났다면
        // flag에 false를 넣어주고 break를 통해 for문을 종료시킨다.
        flag = false;
        break;
      }
    }

    // for문을 무사히 통과했다면 이동을 한 것이기 때문에
    // 임시 좌표를 실제 좌표에 대입해준다.
    if (flag) {
      col = tempCol;
      row = tempRow;
    }
  });

  // 다 확인 후 마지막 좌표를 반환한다.
  return [row, col];
}

//=====================================================================

function solution(park, routes) {
  const dirs = { E: [0, 1], W: [0, -1], S: [1, 0], N: [-1, 0] };
  let [x, y] = [0, 0];
  for (let i = 0; i < park.length; i++) {
    if (park[i].includes('S')) {
      [x, y] = [i, park[i].indexOf('S')];
      break;
    }
  }

  routes.forEach((route) => {
    const [r, n] = route.split(' ');
    let [nx, ny] = [x, y];
    let cnt = 0;
    while (cnt < n) {
      [nx, ny] = [nx + dirs[r][0], ny + dirs[r][1]];
      if (!park[nx] || !park[nx][ny] || park[nx][ny] === 'X') break;
      cnt++;
    }
    if (cnt == n) [x, y] = [nx, ny];
  });
  return [x, y];
}
