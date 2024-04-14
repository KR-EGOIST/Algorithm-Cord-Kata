function solution(rsp) {
  let answer = [...rsp].map((v) => {
    if (v == '2') return '0';
    else if (v == '0') return '5';
    else return '2';
  });
  return answer.join('');
}

let result = solution('205');
console.log(result);

// function solution(rsp) {
//   let arr = {
//     2: 0,
//     0: 5,
//     5: 2,
//   };
//   var answer = [...rsp].map((v) => arr[v]).join('');
//   return answer;
// }
