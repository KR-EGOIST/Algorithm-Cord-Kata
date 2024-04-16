function solution(box, n) {
  const [a, b, c] = box;

  const x = Math.floor(a / n);
  const y = Math.floor(b / n);
  const z = Math.floor(c / n);

  return x * y * z;
}

let result = solution([10, 8, 6], 3);
console.log(result);
