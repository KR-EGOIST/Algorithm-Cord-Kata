/*
문제 2. 주어진 문자열을 요약하는 함수를 작성해주세요!
예를 들어, 문자열 ‘aaabbbc’가 주어지면 결과는 다음과 같아야 합니다: ‘a3/b3/c1’
또한, 문자열 ‘ahhhhz’가 주어지면 결과는 다음과 같아야 합니다: ‘a1/h4/z1’
*/

function solution(str) {
  let answer = [];
  let cnt = 1;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      cnt++;
      continue;
    }
    answer.push(`${str[i]}${cnt}`);
    cnt = 1;
  }

  return answer.join('/');
}

const result = solution('aaabbbc');
console.log(result);
