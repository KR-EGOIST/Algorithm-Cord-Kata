function solution(number, k) {
  let result = '';
  const stack = []; // 숫자가 저장될 스택

  // 모든 숫자를 비교
  for (let i = 0; i < number.length; i++) {
    const num = number[i];

    // 처음에는 스택의 마지막 요소가 없으므로 push
    // 아직 지워야하는 갯수가 남아있고, 스택의 마지막 요소가 number[i] 보다 작으면
    // number[i] 보다 큰거나 같은 수가 있을 때까지 pop 하고 k--
    while (k > 0 && stack.at(-1) < num) {
      stack.pop();
      k--;
    }
    stack.push(num);
  }

  // k가 0일 경우 스택은 그대로,
  // 하지만 k가 남아있으면 뒤에서부터 제거해준다. (ex. 1100,2 -> 11)
  stack.splice(stack.length - k, k);
  result = stack.join('');
  return result;
}

let result = solution('4177252841', 4);
console.log(result);
