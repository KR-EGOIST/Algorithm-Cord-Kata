function solution(bridge_length, weight, truck_weights) {
  // bridge_length만큼의 배열을 만든다.
  let bridge = new Array(bridge_length).fill(0);
  // 트럭이 다리를 건너는 시간
  let second = 0;

  while (bridge.length) {
    bridge.shift();
    if (truck_weights.length) {
      // 다리 위의 트럭의 총 무게 계산
      let sumBridge = bridge.reduce((acc, cur) => acc + cur, 0);
      // 다리 위의 트럭의 총 무게가 다리의 무게를 넘지 않으면 트럭을 다리에 올린다.
      if (sumBridge + truck_weights[0] <= weight) {
        bridge.push(truck_weights.shift());
      } else {
        bridge.push(0);
      }
    }
    second++;
  }

  return second;
}

let result = solution(2, 10, [7, 4, 5, 6]);
console.log(result);
