function solution(str1, str2) {
  if (str1.includes(str2)) {
    return 1;
  } else {
    return 2;
  }
}

let result = solution('ab6CDE443fgh22iJKlmn1o', '6CD');
console.log(result);

// function solution(str1, str2) {
//   return str1.split(str2).length > 1 ? 1 : 2;
// }

// function solution(str1, str2) {
//   return str1.indexOf(str2) === -1 ? 2 : 1;
// }
