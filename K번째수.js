function solution(array, commands) {
  let answer = [];

  for (let i = 0; i < commands.length; i++) {
    [a, b, c] = commands[i];
    let sliced = array.slice(a - 1, b);
    let sorted = sliced.sort((a, b) => a - b);
    answer.push(sorted[c - 1]);
  }

  return answer;
}

let result = solution(
  [1, 5, 2, 6, 3, 7, 4],
  [
    [2, 5, 3],
    [4, 4, 1],
    [1, 7, 3],
  ]
);
console.log(result);

//=========================================================================

function solution(array, commands) {
  return commands.map((command) => {
    const [sPosition, ePosition, position] = command;
    const newArray = array
      .filter(
        (value, fIndex) => fIndex >= sPosition - 1 && fIndex <= ePosition - 1
      )
      .sort((a, b) => a - b);

    return newArray[position - 1];
  });
}
