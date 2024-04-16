function solution(strlist) {
  let answer = [];

  strlist.forEach((v) => {
    answer.push(v.length);
  });

  return answer;
}

let result = solution(['We', 'are', 'the', 'world!']);
console.log(result);

// function solution(strlist) {
//   return strlist.map((el) => el.length);
// }
