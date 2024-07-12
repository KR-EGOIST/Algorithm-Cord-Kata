function solution(arr) {
  const stack = [];

  // 마지막 값이 undefined 가 나오는데 마지막 숫자를 스택에 넣기 위해서
  // i를 0부터 arr.length 까지 순회
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i + 1]) {
      stack.push(arr[i]);
    }
  }

  return stack;
}
