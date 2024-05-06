function solution(n, m, sections) {
  let result = 0;
  let painted = 0;

  for (const section of sections) {
    if (painted < section) {
      result++;
      painted = section + m - 1;
    }
  }
  return result;
}

let result = solution(8, 4, [2, 3, 6]);
console.log(result);

/*
1. 정직하게 배열을 주어진 길이만큼 만들고 true로 가득채워준다.
2. section에 주어진 값과 매칭되는 인덱스에 false를 할당한다.
3. false를 만나면 m - 1값만큼 인덱스를 점프시키고 answer값을 올려준다.
*/

function solution(n, m, section) {
  let answer = 0;

  let arr = new Array(n).fill(true);
  section.forEach((e) => (arr[e - 1] = false));

  for (let i = 0; i < arr.length; i++) {
    if (!arr[i]) {
      answer += 1;
      i += m - 1;
    }
  }

  return answer;
}
