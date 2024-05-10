/*
이 문제는 targets를 순회하며 각 요소(target) 문자열이 keymap을 통해 최소 몇 번만에 만들어지는지 구하는 문제입니다.
이때 target을 구할 수 없다면 -1을 담으면 됩니다.
keymap과 targets 배열의 길이가 100 이하이므로 완전탐색을 이용해 문제를 해결할 수 있습니다.
*/

function solution(keymap, targets) {
  const answer = [];
  const map = new Map();

  for (const key of keymap) {
    for (let i = 0; i < key.length; i++) {
      // key[i] 값이 없거나 key[i] 값이 i + 1 보다 크면 key[i] 에 i + 1 할당
      if (!map.has(key[i]) || i + 1 < map.get(key[i])) map.set(key[i], i + 1);
    }
  }

  for (const target of targets) {
    let count = 0;
    for (let i = 0; i < target.length; i++) {
      // map 객체에 target[i] key 값의 value 값을 count에 더한다.
      count += map.get(target[i]);
    }
    // count 값이 있으면 count 반환, 값이 0 이면 -1 반환
    answer.push(count || -1);
  }

  return answer;
}

let result = solution(['ABACD', 'BCEFD'], ['ABCD', 'AABB']);
console.log(result);

//=================================================================

function solution(keymap, targets) {
  const answer = [];
  const map = {}
  for (const items of keymap) {
      items.split('').map((item, index) => map[item] = (map[item] < index+1 ? map[item] : index+1))
  }
  for (const items of targets) {
      answer.push(items.split('').reduce((cur, item) => cur += map[item], 0) || -1)
  }
  return answer;
}
