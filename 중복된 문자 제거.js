/*
  배열에서 중복 값 제거

  세트는 중복 값을 허용하지 않기 때문에, 
  배열이나 문자열에서 중복된 값을 제거하는 데에 매우 유용하게 활용될 수 있습니다.
*/

function solution(my_string) {
  let splited = my_string.split('');
  let set = [...new Set(splited)];
  return set.join('');
}

let result = solution('people');
console.log(result);

function solution(my_string) {
  return [...new Set(my_string)].join('');
}
