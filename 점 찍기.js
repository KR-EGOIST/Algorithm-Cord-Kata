// 피타고라스 공식
const yValue = (d, x) => {
  return Math.sqrt(d ** 2 - x ** 2);
};

function solution(k, d) {
  let result = 0;

  // x를 k만큼 증가시키면서 y를 k로 나눈 몫 + 1을 result에 더한다.
  // y / k 는 (0, 0) 를 뺀 나머지 점을 찍을 수 있는 좌표의 갯수
  for (let x = 0; x <= d; x += k) {
    let y = Math.floor(yValue(d, x));
    result += Math.floor(y / k) + 1;
  }

  return result;
}

let result = solution(2, 4);
console.log(result);
