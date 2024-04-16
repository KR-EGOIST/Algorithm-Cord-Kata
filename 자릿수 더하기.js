function solution(n) {
  return n
    .toString()
    .split('')
    .reduce((acc, cur) => acc + Number(cur), 0);
}

let result = solution(1234);
console.log(result);

// function solution(n) {
//   n = String(n).split('');
//   let sum = 0;

//   for (let i = 0; i < n.length; i++) {
//     sum += Number(n[i]);
//   }

//   return sum;
// }
