function solution(survey, choices) {
  const types = { R: 0, T: 0, C: 0, F: 0, J: 0, M: 0, A: 0, N: 0 };
  let answer = '';
  for (let i = 0; i < choices.length; i++) {
    const [leftType, rightType] = survey[i].split('');
    // 3, 2, 1, 0, 1, 2, 3 순으로 점수가 매겨짐
    const result = Math.abs(choices[i] - 4);
    if (choices[i] < 4) {
      // 비동의 -> 왼쪽 요소
      types[leftType] += result;
    } else if (choices[i] > 4) {
      // 동의 -> 오른쪽 원소
      types[rightType] += result;
    }
  }
  const type = Object.keys(types);
  for (let i = 0; i < type.length; i += 2) {
    const leftType = types[type[i]];
    const rightType = types[type[i + 1]];
    if (leftType >= rightType) {
      // 같거나 클 때는 왼쪽 요소
      answer += type[i];
    } else {
      // 작은 때는 오른쪽 요소
      answer += type[i + 1];
    }
  }
  return answer;
}

let result = solution(['AN', 'CF', 'MJ', 'RT', 'NA'], [5, 3, 2, 7, 5]);
console.log(result);

//===================================================

function solution(survey, choices) {
  const MBTI = {};
  const types = ['RT', 'CF', 'JM', 'AN'];

  // type별 객체 값을 0으로 초기화
  types.forEach((type) => type.split('').forEach((char) => (MBTI[char] = 0)));

  choices.forEach((choice, index) => {
    // 구조 분해 할당
    const [disagree, agree] = survey[index];

    // chice의 값에 따라 성향을 나눠, 위에서 만든 MBTI 객체의 key값에 넣어준다
    // 점수 환산 로직에 맞춰서 산술한 값을 누적합 한다.
    MBTI[choice > 4 ? agree : disagree] += Math.abs(choice - 4);
  });

  // 구조 분해 할당으로 disagree, agree 의 값의 크기를 비교 후 배열로 저장 후 join
  return types.map(([a, b]) => (MBTI[b] > MBTI[a] ? b : a)).join('');
}
