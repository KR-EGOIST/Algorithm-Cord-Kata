/*
lastIndexOf() 메서드는 주어진 값과 일치하는 부분을 fromIndex로부터 역순으로 탐색하여, 최초로 마주치는 인덱스를 반환합니다. 일치하는 부분을 찾을 수 없으면 -1을 반환합니다.
*/

function solution(s) {
  let result = [];
  let temp = [];

  for (let i = 0; i < s.length; i++) {
    // 만약 temp 임시배열에 s[i]를 포함하고 있지 않다면!
    // 결과값에는 -1을 temp 배열에는 s[i]를 넣어줍니다.
    if (!temp.includes(s[i])) {
      result.push(-1);
      temp.push(s[i]);
    }
    // 만약 tmp 임시배열에 s[i]를 포함하고 있다면!
    // 현재 문자열에서 s[i]를 비교할 때 i자리에 존재하고 있기 때문에 i - temp.lastIndexOf(s[i])를 활용해 temp 가장 마지막에 있는 같은 단어를 찾습니다.
    // 그 이유는 banana라고 했을 때, a가 1,3에 위치해 있습니다.
    // 가장 마지막에 위치한 a는 이전에 나온 a와 비교해야하기 때문에 숫자 1이 아닌 3과 비교해야합니다.
    // 따라서 lastIndexOf를 사용해줘야 합니다.
    else if (temp.includes(s[i])) {
      result.push(i - temp.lastIndexOf(s[i]));
      temp.push(s[i]);
    }
  }
  return result;
}

let result = solution('banana');
console.log(result);

// ========================================================

function solution(s) {
  const hash = {};

  return [...s].map((v, i) => {
    let result = hash[v] !== undefined ? i - hash[v] : -1;
    hash[v] = i;
    return result;
  });
}

//============================================================

const solution = (s) =>
  [...s].map((char, i) => {
    const count = s.slice(0, i).lastIndexOf(char);
    return count < 0 ? count : i - count;
  });
