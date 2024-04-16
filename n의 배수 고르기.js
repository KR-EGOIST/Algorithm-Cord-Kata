function solution(n, numlist) {
  return numlist.filter((v) => (v % n === 0));
}

let result = solution(3, [4, 5, 6, 7, 8, 9, 10, 11, 12]);
console.log(result);
