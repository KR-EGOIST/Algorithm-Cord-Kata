function solution(numbers) {
  let answer = new Array(numbers.length).fill(-1);

  // 어차피 마지막 숫자는 뒤에 큰 수가 없으므로 -1 이므로
  // 마지막 숫자를 제외한 나머지 숫자들에 대해서만 비교하면 된다.
  for (let i = numbers.length - 2; i >= 0; i--) {
    // j 는 i 보다 한칸 앞에 있다.
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] < numbers[j]) {
        answer[i] = numbers[j];
        break;
      }

      // 만약 answer[j] 가 -1 이라면 더 이상 비교할 필요가 없다.
      // 나보다 더 큰 수가 없다는 의미
      if (answer[j] === -1) {
        break;
      }

      // 같은 수가 중복으로 있을 때 불필요한 계산을 막는다.
      if (numbers[i] < answer[j]) {
        answer[i] = answer[j];
        break;
      }
    }
  }
  return answer;
}

let result = solution([9, 1, 5, 3, 6, 2]);
console.log(result);

//============================================================

function solution(numbers) {
    const result = new Array(numbers.length).fill(-1);
    const stack = [];
    for (let i = 0; i < numbers.length; i++) {
        while (numbers[i] > numbers[stack.at(-1)]){
            const index = stack.pop()
            result[index] = numbers[i];
        }
            
        stack.push(i);
    }
    return result;
}
