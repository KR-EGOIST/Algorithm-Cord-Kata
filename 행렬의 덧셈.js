/*
arr1.map((a, i) => a)
[1, 2] / [2, 3]

a.map((b, j) => b)
1 2 / 2 3

arr2[i][j]
3 4 / 5 6  i, j가 0, 0부터 1, 1까지 순회
*/

function solution(arr1, arr2) {
  return arr1.map((a, i) => a.map((b, j) => (b += arr2[i][j])));
}

let result = solution(
  [
    [1, 2],
    [2, 3],
  ],
  [
    [3, 4],
    [5, 6],
  ]
);
console.log(result);

//=============================================================

/*
for 문 순회마다 빈 배열로 초기화
빈 배열에 배열의 같은 인덱스의 요소를 더한 뒤 push
*/

function solution(arr1, arr2) {
  let answer = [[]];

  for (let i = 0; i < arr1.length; i++) {
    answer[i] = [];
    for (let j = 0; j < arr1[i].length; j++) {
      answer[i].push(arr1[i][j] + arr2[i][j]);
    }
  }
  return answer;
}
