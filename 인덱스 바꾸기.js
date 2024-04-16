function solution(my_string, num1, num2) {
  my_string = [...my_string];

  let temp = my_string[num1];
  my_string[num1] = my_string[num2];
  my_string[num2] = temp;

  return my_string.join('');
}

let result = solution('hello', 1, 2);
console.log(result);

// function solution(my_string, num1, num2) {
//   my_string = my_string.split('');
//   [my_string[num1], my_string[num2]] = [my_string[num2], my_string[num1]];
//   return my_string.join('');
// }
