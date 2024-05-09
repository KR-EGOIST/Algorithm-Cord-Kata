function solution(X, Y) {
  let answer = '';

  // 정수 k(0 ≤ k ≤ 9)
  for (let i = 0; i < 10; i++) {
    const curX = [...X].filter((v) => Number(v) === i).length;
    const curY = [...Y].filter((v) => Number(v) === i).length;
    // curX, curY 에 0부터 9까지 순서대로 갯수를 세, 갯수가 작은 수 만큼 answer 에 합친다.
    // ex) curX 의 1 은 2개, curY 의 1 은 1개, 그러므로 1 을 1 개 answer 에 합친다.
    answer += String(i).repeat(Math.min(curX, curY));
  }

  // 짝꿍이 존재하지 않으면, 짝꿍은 -1입니다.
  if (answer === '') return '-1';
  // 짝꿍이 0으로만 구성되어 있다면, 짝꿍은 0입니다.
  if (Number(answer) === 0) return '0';

  // answer 을 구조분해하고 내림차순 정렬한 뒤 문자열로 변환해준다.
  return [...answer].sort((a, b) => b - a).join('');
}

let result = solution('5525', '1255');
console.log(result);

// want
// X, Y에서 짝으로 숫자가 존재하는 경우, 해당 문자열을 통해 만들 수 있는 최대값을 반환하라

// solving
// 1. X를 순회하며 각 숫자의 개수 세어 객체 or 배열에 저장
// 2. Y를 순회하며 각 문자가 1번에서 저장한 객체에 저장한 값이 1이상인 경우, 그 값을 -1하고 result에 추가
// 3. 2번에서 만들어진 문자열이 빈 문자열이라면 -1 반환
// 5. 2번에서 만들어진 문자열을 숫자로 변환했을 때 0이라면 0 반환
// 6. 해당 문자열을 내림차순 정렬한 문자열 반환

function solution(X, Y) {
  let result = '';
  const numObj = {};

  for (const char of X) {
    // 처음 나온 숫자는 numObj[char] 에 없으므로 undefined 가 나오는데 undefined 와 0 을 OR(||) 하면 0 이 반환된다.
    // 그래서 + 1 을 해 1번 나왔다고 해주는 것이다.
    // 같은 숫자가 나오면 numObj[char]에 값이 있으므로 0과 OR(||) 을 하면 1 이 반환된다.
    console.log(numObj[char], numObj[char] || 0);
    numObj[char] = (numObj[char] || 0) + 1;
  }

  // console.log(numObj);

  for (const char of Y) {
    if (!numObj[char]) continue;
    result += char;
    numObj[char]--;
  }

  if (result === '') return '-1';
  if (+result === 0) return '0';
  return [...result]
    .map((num) => +num)
    .sort((a, b) => b - a)
    .join('');
}
