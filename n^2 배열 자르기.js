function solution(n, left, right) {
  const result = [];
  let y = Math.floor(left / n);
  let x = left % n;

  for (let i = left; i <= right; i++) {
    result.push(Math.max(x, y) + 1);

    if (x + 1 < n) {
      x++;
    } else {
      y++;
      x = 0;
    }
  }

  return result;
}

let result = solution(4, 7, 14);
console.log(result);

//=============================================

리팩토링

function solution(n, left, right) {
  const answer = [];

  for (let i = left; i <= right; i++) {
    answer.push(Math.max(i % n, Math.floor(i / n)) + 1);
  }

  return answer;
}
