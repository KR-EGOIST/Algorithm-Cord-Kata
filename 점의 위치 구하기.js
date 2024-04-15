function solution(dot) {
  if (dot[0] == 0 && dot[1] == 0) {
    return 0;
  } else if (dot[0] > 0 && dot[1] > 0) {
    return 1;
  } else if (dot[0] < 0 && dot[1] > 0) {
    return 2;
  } else if (dot[0] < 0 && dot[1] < 0) {
    return 3;
  } else {
    return 4;
  }
}

let result = solution([2, 4]);
console.log(result);

// function solution(dot) {
//   const [num, num2] = dot;
//   const check = num * num2 > 0;

//   // x 좌표가 양수냐 음수냐 로 나눠서 계산
//   return num > 0 ? (check ? 1 : 4) : check ? 3 : 2;
// }
