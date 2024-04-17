function solution(num, k) {
  let index = 1;

  return (
    num
      .toString()
      .split('')
      .map((v) => parseInt(v))
      .indexOf(k) + 1 || -1
  );
}

let result = solution(232443, 4);
console.log(result);
