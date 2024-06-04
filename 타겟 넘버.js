function solution(numbers, target) {
  let answer = 0;

  function dfs(index, sum) {
    if (index === numbers.length) {
      if (sum === target) {
        answer++;
      }
      return;
    }
    dfs(index + 1, sum + numbers[index]);
    dfs(index + 1, sum - numbers[index]);
  }

  dfs(0, 0);

  return answer;
}

let result = solution([1, 1, 1, 1, 1], 3);
console.log(result);

//=====================================================================

function bfs(numbers, target) {
  let answer = 0;
  let tmp = numbers.shift();
  let queue = [-tmp, +tmp];

  numbers.map((v, i) => {
    let queue_tmp = [];

    while (queue.length > 0) {
      let element = queue.shift();

      if (i == numbers.length - 1) {
        if (element - v == target || element + v == target) answer++;
        continue;
      }
      queue_tmp.push(element - v);
      queue_tmp.push(element + v);
    }
    queue = queue_tmp;
  });

  return answer;
}
