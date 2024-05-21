function solution(brown, yellow) {
  const sum = brown + yellow;

  // 카펫의 세로는 최소 3 이상이다.
  for (let height = 3; height <= Math.sqrt(sum); height++) {
    // 사각형의 가로 구하기
    // 사각형의 넓이는 가로 * 세로 이므로 (brown + yellow) = width * height 를 성립해야한다.
    if (sum % height !== 0) continue;
    const width = sum / height;

    // 카펫의 모양을 만족하는 가로, 세로의 길이는 (가로 - 2) * (세로 - 2) === 노란색 격자 개수 을 만족해야 한다.
    // -2 를 하는 이유는 노란색을 갈색이 감싸고 있으므로 좌우, 상하를 빼기위해 -2 를 한다.
    if ((width - 2) * (height - 2) === yellow) {
      return [width, height];
    }
  }
}

let result = solution(24, 24);
console.log(result);
