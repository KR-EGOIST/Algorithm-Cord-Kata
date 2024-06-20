function solution(arr) {
  let answer = [0, 0];
  const len = arr.length;

  // 비교 시작하는 좌표 (x, y) , 길이 len
  function Quad(x, y, len) {
    // arr 에는 0 과 1만 존재하므로 answer[arr[x][y]] 는
    // answer[0] , answer[1] 두 가지 경우만 나온다.
    if (len === 1) return answer[arr[x][y]]++;

    let flag = true;

    // x 부터 x + len , y 부터 y + len 까지 순회하면서
    // 모든 원소가 0 또는 1로 같을 때 재귀 함수를 종료합니다.
    for (let i = x; i < x + len; i++) {
      for (let j = y; j < y + len; j++) {
        if (arr[x][y] !== arr[i][j]) {
          flag = false;
          break;
        }
      }
    }

    // 값이 모두 같으면 answer[arr[x][y]]++
    if (flag) {
      return answer[arr[x][y]]++;
    }
    // 값이 모두 같지 않으면 문제의 조건대로 len/2(정사각형의 반)과
    // 자른 정사각형의 시작 좌표에 해당하는 x, y를 가지고 다시 재귀 함수를 호출합니다.
    else {
      Quad(x, y, len / 2);
      Quad(x, y + len / 2, len / 2);
      Quad(x + len / 2, y, len / 2);
      Quad(x + len / 2, y + len / 2, len / 2);
    }
  }

  Quad(0, 0, len);

  return answer;
}

let result = solution([
  [1, 1, 0, 0],
  [1, 0, 0, 0],
  [1, 0, 0, 1],
  [1, 1, 1, 1],
]);
console.log(result);

//=================================================

function solution(arr) {
  const quadZip = (row, col, n) => {
    if (n < 2) return arr[row][col] ? [0, 1] : [1, 0];
    let cnt0 = 0,
      cnt1 = 0;
    n >>= 1;
    for (let [i, j] of [
      [0, 0],
      [0, 1],
      [1, 0],
      [1, 1],
    ]) {
      let [zero, one] = quadZip(row + i * n, col + j * n, n);
      cnt0 += zero;
      cnt1 += one;
    }
    if (cnt0 === 0) return [0, 1];
    if (cnt1 === 0) return [1, 0];
    return [cnt0, cnt1];
  };
  return quadZip(0, 0, arr.length);
}
