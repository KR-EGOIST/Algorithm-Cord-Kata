function solution(my_string) {
  return [...my_string]
    .filter((v) => !['a', 'e', 'i', 'o', 'u'].includes(v))
    .join('');
}

let result = solution('bus');
console.log(result);

// function solution2(my_string) {
//   return my_string.replace(/[aeiou]/g, '');
// }
