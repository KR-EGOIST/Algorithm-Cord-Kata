function solution(prices) {
  const result = [];

  for (let i = 0; i < prices.length; i++) {
    let sec = 0;

    for (let j = i + 1; j < prices.length; j++) {
      sec++;

      if (prices[i] > prices[j]) {
        break;
      }
    }
    result.push(sec);
  }
  return result;
}

let result = solution([1, 2, 3, 2, 3]);
console.log(result);

//====================================================================

function solution(prices) {
  const answer = new Array(prices.length).fill(0);
  const stack = [];
  let length = prices.length;

  for (let i = 0; i < length; i++) {
    while (stack.length && prices[i] < prices[stack[stack.length - 1]]) {
      let temp = stack.pop();
      answer[temp] = i - temp;
    }
    stack.push(i);
  }

  while (stack.length) {
    let temp = stack.pop();
    answer[temp] = length - temp - 1;
  }

  return answer;
}
