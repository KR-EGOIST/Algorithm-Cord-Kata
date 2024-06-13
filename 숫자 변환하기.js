function solution(x, y, n) {
  // x를 y로 만들 수 없다면 -1을 return 해주세요.
  const dp = new Array(y + 1).fill(-1);
  dp[x] = 0;

  for (let i = x; i <= y; i++) {
    // dp[x]에 0으로 초기값을 줘서 처음부터 계산이 되므로 전부 continue 될 일은 없다.
    if (dp[i] === -1) {
      continue;
    }

    // i + n이 y보다 작거나 같으면 i + n을 y로 만들 수 있으므로 dp[i + n]에 1을 더해준다.
    // 처음 도달한 게 아니라 dp[i + n]에 값이 존재한다면 작은 값을 할당
    // i * 2, i * 3 도 동일
    if (i + n <= y) {
      if (dp[i + n] === -1) {
        dp[i + n] = dp[i] + 1;
      } else {
        dp[i + n] = Math.min(dp[i + n], dp[i] + 1);
      }
    }

    if (i * 2 <= y) {
      if (dp[i * 2] === -1) {
        dp[i * 2] = dp[i] + 1;
      } else {
        dp[i * 2] = Math.min(dp[i * 2], dp[i] + 1);
      }
    }

    if (i * 3 <= y) {
      if (dp[i * 3] === -1) {
        dp[i * 3] = dp[i] + 1;
      } else {
        dp[i * 3] = Math.min(dp[i * 3], dp[i] + 1);
      }
    }
  }

  return dp[y];
}

let result = solution(10, 40, 5);
console.log(result);

//==========================================================

/** 실패했지만 DFS로 푸는 방법 **/

function solution(x, y, n) {
  // x를 y로 만들 수 없다면 -1을 return 해주세요.
  let result = -1;
  let count = 0;

  function dfs(x, count) {
    if (x === y) {
      if (result === -1) {
        result = count;
      } else {
        if (result > count) {
          result = count;
        }
      }
      return;
    } else if (x > y) {
      return;
    } else {
      dfs(x * 2, count + 1);
      dfs(x * 3, count + 1);
      dfs(x + n, count + 1);
    }
  }
  dfs(x, count);

  return result;
}
