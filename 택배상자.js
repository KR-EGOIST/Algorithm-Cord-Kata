function solution(order) {
  const mainBelt = new Array(order.length)
    .fill()
    .map((_, i) => i + 1)
    .reverse();
  const sideBelt = [];
  const truck = [];
  let index = 0;

  while (true) {
    // 메인벨트에 상자가 남아 있지만, 목표대상이 없으면 [메인벨트 -> 보조벨트]
    if (
      mainBelt.at(-1) &&
      sideBelt.at(-1) !== order[index] &&
      mainBelt.at(-1) !== order[index]
    ) {
      sideBelt.push(mainBelt.pop());
      continue;
    }

    // 목표대상이 메인벨트에 있으면 [메인벨트 -> 트럭]
    if (mainBelt.at(-1) && mainBelt.at(-1) === order[index]) {
      truck.push(mainBelt.pop());
      index++;
      continue;
    }

    // 목표대상이 보조벨트에 있으면 [보조벨트 -> 트럭]
    if (sideBelt.at(-1) && sideBelt.at(-1) === order[index]) {
      truck.push(sideBelt.pop());
      index++;
      continue;
    }

    // 보조 벨트 안에 목표대상이 들어 있으면 꺼낼 수 없으므로 break
    if (
      (sideBelt.indexOf(order[index]) !== -1 &&
        sideBelt.at(-1) !== order[index]) ||
      truck.length === order.length
    ) {
      break;
    }
  }
  // 트럭에 실려 있는 상자의 개수 반환
  return truck.length;
}

let result = solution([4, 3, 1, 2, 5]);
console.log(result);

//=======================================================

function solution(order) {
  let answer = 0;
  const stack = [];
  let boxNum = 1;
  for (const idx of order) {
    let checker = false;
    while (true) {
      // stack이 빈상태일때 갱신해 줍니다
      if (stack.length === 0) stack.push(boxNum++);
      // 더 넣어줘야하는 경우 추가적으로 삽입해 줍니다
      if (idx > stack.at(-1)) stack.push(boxNum++);
      // 원하는 택배를 빼낼수 있는 경우 값들을 갱신해 줍니다
      else if (idx === stack.at(-1)) {
        stack.pop();
        answer++;
        checker = true;
        break;
      } else break;
    }
    if (!checker) break;
  }
  return answer;
}
