function solution(num) {
  let count = 0;
  while (num != 1) {
    if (num % 2 === 0) {
      num /= 2;
    } else {
      num = num * 3 + 1;
    }
    count++;
  }
  if (count >= 500) {
    return -1;
  } else {
    return count;
  }
}

let result = solution(6);
console.log(result);

function collatz(num) {
  let count = 0;
  while (num != 1 && count != 500) {
    num % 2 == 0 ? (num = num / 2) : (num = num * 3 + 1);
    count++;
  }
  return num == 1 ? count : -1;
}
