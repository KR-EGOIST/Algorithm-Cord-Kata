/* 
      sliced 가 [  'apple', 'banana',
                    'rice',  'apple',
                    'pork',  'banana',
                    'pork',  'rice',
                    'pot',   'banana'
                ] 일때

      j 가 0 일 때, banana 는 3개, apple 은 2개, rice 는 2개, pork 는 2개, pot 는 1개 이므로
      제품과 갯수가 일치하므로 flag 는 true 가 되므로 result + 1
*/

function solution(want, number, discount) {
  let result = 0;

  // 10개씩 할인 제품을 자르기
  for (let i = 0; i < discount.length - 9; i++) {
    const sliced = discount.slice(i, i + 10);

    // 원하는 제품의 원하는 개수와 일치하는지 확인
    let flag = true;
    for (let j = 0; j < want.length; j++) {
      if (sliced.filter((item) => item === want[j]).length !== number[j]) {
        flag = false;
        break;
      }
    }
    // 원하는 제품의 원하는 개수와 일치하면 result + 1
    if (flag) {
      result += 1;
    }
  }

  return result;
}

let result = solution(
  ['banana', 'apple', 'rice', 'pork', 'pot'],
  [3, 2, 2, 2, 1],
  [
    'chicken',
    'apple',
    'apple',
    'banana',
    'rice',
    'apple',
    'pork',
    'banana',
    'pork',
    'rice',
    'pot',
    'banana',
    'apple',
    'banana',
  ]
);
console.log(result);

//=========================================================================

function solution(want, number, discount) {
  var answer = 0;

  // 1) 할인 제품 만큼 반복한다.
  for (let i = 0; i < discount.length; i++) {
    // 2) 원하는 제품이 모두 구매 가능하진 체크한다. 가능하면 answer 증가
    if (check(want, number, discount.slice(i, i + 10))) answer++;
  }
  return answer;
}
/*
3) 구매 가능 체크 함수
  want : 구매를 원하는 상품
  numer : 구매를 원하는 상품별 개수
  discount : 현재부터 +10일까지 할인하는 제품
*/
function check(want, number, discount) {
  // 4) 제품별 개수를 담을 Map 객체를 생성한다.
  const map = new Map();

  // 5) 할인 제품 반큼 반복한다.
  for (let i = 0; i < discount.length; i++) {
    // 6) 제품별 개수를 담는다.
    map.has(discount[i])
      ? map.set(discount[i], map.get(discount[i]) + 1)
      : map.set(discount[i], 1);
  }

  // 7) 구매를 원하는 제품 만큼 반복한다.
  for (let i = 0; i < want.length; i++) {
    // 8) 구매 제품이 할인 중이지 않으면 false
    if (isNaN(map.get(want[i]))) return false;

    // 9) 구매 하고자하는 제품보다 할인 중인 제품이 적다면 false
    if (number[i] > map.get(want[i])) return false;
  }
  // 10) 전부 구매 가능하면 true
  return true;
}
