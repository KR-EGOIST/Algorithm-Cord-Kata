/*

1. 맨 뒤 비트가 0일 때 
이 경우 단순히 맨 뒤 비트를 1로 바꿔주면 해당 수보다 큰 수 중 가장 작은 값이 된다. 
ex: 1110(14) -> 1111(15)

2. 맨 뒤 비트가 0이 아닐 때 
이 경우, 뒤에서 부터 첫번째로 등장하는 "01"을 찾는다. 그리고 이 부분을 "10"으로 바꿔주면 2비트만 바꾸어 만들 수 있는 가장 작은 값이 된다.
ex: 11011(27) -> 11101(29)

*/

function solution(numbers) {
  let answer = [];

  numbers.forEach((v) => {
    let binary = '0' + v.toString(2);
    let len = binary.length;

    if (v % 2 === 0) {
      answer.push(v + 1);
    } else {
      for (let i = len; i >= 0; i--) {
        if (binary[i] === '0') {
          binary = binary.slice(0, i) + '1' + '0' + binary.slice(i + 2);
          answer.push(parseInt(binary, 2));
          break;
        }
      }
    }
  });

  return answer;
}

let result = solution([2, 7]);
console.log(result);
