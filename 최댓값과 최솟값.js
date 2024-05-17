function solution(s) {
  const arr = s.split(' ');

  return Math.min(...arr) + ' ' + Math.max(...arr);
}

let result = solution('-1 -2 -3 -4');
console.log(result);
