function solution(sides) {
  const [x, y, z] = sides.sort((a, b) => a - b);

  if (x + y <= z) return 2;
  else return 1;
}

let result = solution([199, 72, 222]);
console.log(result);

// function solution(sides) {
//   sides = sides.sort((a, b) => a - b);
//   return sides[0] + sides[1] > sides[2] ? 1 : 2;
// }

// function solution(sides) {
//   const [long, a, b] = sides.sort((a, b) => b - a);
//   return long < a + b ? 1 : 2;
// }
