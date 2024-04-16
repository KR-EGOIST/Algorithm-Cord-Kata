function solution(my_string) {
  const arr = my_string.replaceAll(/[A-z]/g, '');
  return [...arr].reduce((acc, cur) => acc + Number(cur), 0);
}

let result = solution('aAb1B2cC34oOp');
console.log(result);

// isNaN() 함수는 어떤 값이 NaN인지 판별합니다.

// function solution(my_string) {
//   let sum = 0;
//   for (const n of my_string) {
//     if (!isNaN(n)) sum += Number(n);
//   }
//   return sum;
// }
