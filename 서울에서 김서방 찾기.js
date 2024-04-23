function solution(seoul) {
  var answer = `김서방은 ${seoul.indexOf('Kim')}에 있다`;
  return answer;
}

let result = solution(['Jane', 'Kim']);
console.log(result);

const solution = (arr) =>
  `김서방은 ${arr.findIndex((s) => s === 'Kim')}에 있다`;
