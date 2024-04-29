/*
배열 , 중복제거 이 키워드로 바로 Set 이 생각났다.
*/

function solution(numbers) {
  let temp = [];

  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      temp.push(numbers[i] + numbers[j]);
    }
  }

  const result = [...new Set(temp)];
  return result.sort((a, b) => a - b);
}

let result = solution([2, 1, 3, 4, 1]);
console.log(result);

//=================================================

function solution(numbers) {
  var answer = [];
  const set = new Set();
  for (let i = 0; i < numbers.length; ++i) {
    let sum = 0;
    for (let j = 0; j < numbers.length; ++j) {
      if (i != j) {
        set.add(numbers[i] + numbers[j]);
      }
    }
  }
  set.forEach((number) => {
    answer.push(number);
  });
  answer.sort((a, b) => a - b);
  return answer;
}
