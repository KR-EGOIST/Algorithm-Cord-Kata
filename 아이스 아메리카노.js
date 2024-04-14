function solution(money) {
  let answer = [0, 0];
  answer[0] = Math.floor(money / 5500);
  answer[1] = money % 5500;
  return answer;
}

let result = solution(15000);
console.log(result);
