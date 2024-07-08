/*
storey 의 각 자릿값에 따라 마법의 돌의 사용 횟수를 계산할 수 있다.

만약 현재 자릿값이 6 ~ 9 에 해당한다면 10 에 도달하는 방향으로 마법의 돌을 사용한다.
만약 현재 자릿값이 0 ~ 4 에 해당한다면 0 에 도달하는 방향으로 마법의 돌을 사용한다.
만약 현재 자릿값이 5 에 해당한다면 다음 자릿값에 따라 이동하는 방향을 정할 수 있다.
만약 다음 자릿값이 5 ~ 9에 해당한다면 현재 자릿값을 10 에 도달하는 방향으로 마법의 돌을 사용한다.
만약 다음 자릿값이 0 ~ 4에 해당한다면 현재 자릿값을 0 에 도달하는 방향으로 마법의 돌을 사용한다.
*/

function solution(storey) {
  let result = 0;

  while (storey) {
    let cur = storey % 10; // 현재 자릿수
    let next = (storey / 10) % 10; // 다음 자릿수

    // 5보다 큰 경우
    if (cur > 5) {
      result += 10 - cur; // 결과값에 10 - cur 값을 더하기
      storey += 10; // 다음 자릿수에 +1
    }
    // 5와 같은 경우
    else if (cur === 5) {
      result += cur; // 결과값에 cur 값 그대로 더하기
      storey += next >= 5 ? 10 : 0; // 다음 자릿수가 5보다 크면 +1
    }
    // 5보다 작은 경우
    else {
      result += cur; // 결과값에 cur 값 그대로 더하기
    }

    storey = Math.floor(storey / 10); // 자릿수를 변경하면서 탐색
  }

  return result;
}

let result = solution(16);
console.log(result);

//-------------------------------------------------------

function solution(storey) {
    if (storey < 5) return storey;
    const r = storey % 10;
    const m = (storey - r) / 10;
    return Math.min(r + solution(m), 10 - r + solution(m + 1));
}
