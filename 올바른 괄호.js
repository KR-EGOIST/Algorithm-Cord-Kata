function solution(s) {
  let stack = [];

  if (s[0] === ')') {
    return false;
  }

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      stack.push(s[i]);
    } else {
      stack.pop();
    }
  }

  return stack.length > 0 ? false : true;
}

let result = solution('()()');
console.log(result);
