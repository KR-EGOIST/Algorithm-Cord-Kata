function solution(hp) {
  let n1 = Math.floor(hp / 5);
  let n2 = Math.floor((hp - n1 * 5) / 3);
  let n3 = hp - n1 * 5 - n2 * 3;
  return n1 + n2 + n3;
}

let result = solution(23);
console.log(result);

// function solution(hp) {
//   return Math.floor(hp / 5) + Math.floor((hp % 5) / 3) + ((hp % 5) % 3);
// }
