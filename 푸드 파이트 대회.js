/*
repeat() 메서드는 문자열을 주어진 횟수만큼 반복해 붙인 새로운 문자열을 반환합니다.

Math.floor() 함수는 주어진 숫자와 같거나 작은 정수 중에서 가장 큰 수를 반환합니다.

String() 메소드는 데이터 타입을 문자열로 변환시킵니다.
*/

function solution(food) {
  let res = '';
  for (let i = 0; i < food.length; i++) {
    res += String(i).repeat(Math.floor(food[i] / 2));
  }
  return res + '0' + [...res].reverse().join('');
}

let result = solution([1, 3, 4, 6]);
console.log(result);

//====================================================

function solution(food) {
  let arr = [];
  food.map((e, i) => {
    if (e > 1) {
      arr.push(i.toString().repeat(Math.floor(e / 2)));
    }
  });
  return arr.join('') + '0' + arr.reverse().join('');
}

//====================================================

/*
Array 인스턴스의 concat() 메서드는 두 개 이상의 배열을 병합하는 데 사용됩니다. 이 메서드는 기존 배열을 변경하지 않고, 새 배열을 반환합니다.
*/

function solution(food) {
  let player1 = [];
  let player2 = [];
  let repeat = 0;
  for (let i = 1; i <= food.length; i++) {
    if (food[i] > 1) {
      repeat = Math.floor(food[i] / 2);
      for (let j = 0; j < repeat; j++) player1.push(i);
      for (let k = 0; k < repeat; k++) player2.unshift(i);
    }
  }
  player1.push(0);
  player1 = player1.concat(player2);
  return player1.join('');
}
