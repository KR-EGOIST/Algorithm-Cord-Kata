function solution(n) {
  let piece = 6;

  while (true) {
    if (piece % n === 0) {
      break;
    }
    piece += 6;
  }
  return piece / 6;
}

let result = solution(10);
console.log(result);
