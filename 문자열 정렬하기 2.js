/*
  문자열 오름차순 정렬
  .sort()

  문자열 내림차순 정렬
  strArray.sort(function compare(a, b) {
  if (a > b) return -1;
  if (a < b) return 1;
  return 0;
  });
*/

function solution(my_string) {
  my_string = my_string.toLowerCase();
  return [...my_string].sort().join('');
}

let result = solution('heLLo');
console.log(result);

// function solution(my_string) {
//   return my_string.toLowerCase().split('').sort().join('');
// }
