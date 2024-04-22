function solution(x) {
  let harshad = x
    .toString()
    .split('')
    .reduce((acc, cur) => acc + parseInt(cur), 0);

  return x % harshad === 0 ? true : false;
}

let result = solution(11);
console.log(result);
