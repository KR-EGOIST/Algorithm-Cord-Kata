function solution(numbers, direction) {
  let temp = 0;
  if (direction === 'left') {
    temp = numbers.shift();
    numbers.push(temp);
    // numbers.push(numbers.shift());
  } else {
    temp = numbers.pop();
    numbers.unshift(temp);
    // numbers.unshift(numbers.pop());
  }

  return numbers;
}

let result = solution([4, 455, 6, 4, -1, 45, 6], 'left');
console.log(result);
