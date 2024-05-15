function solution(wallpaper) {
  const answer = [];
  const x = [];
  const y = [];

  for (let i = 0; i < wallpaper.length; i++) {
    for (let j = 0; j < wallpaper[i].length; j++) {
      if (wallpaper[i][j] === '#') {
        x.push(i);
        y.push(j);
      }
    }
  }

  answer.push(Math.min(...x));
  answer.push(Math.min(...y));
  answer.push(Math.max(...x) + 1);
  answer.push(Math.max(...y) + 1);

  return answer;
}

let result = solution([
  '.##...##.',
  '#..#.#..#',
  '#...#...#',
  '.#.....#.',
  '..#...#..',
  '...#.#...',
  '....#....',
]);
console.log(result);

//======================================================

function solution(wallpaper) {
  let left = [];
  let top = [];
  let right = [];
  let bottom = [];
  wallpaper.forEach((v, i) => {
    [...v].forEach((val, ind) => {
      if (val === '#') {
        left.push(i);
        top.push(ind);
        right.push(i + 1);
        bottom.push(ind + 1);
      }
    });
  });
  return [
    Math.min(...left),
    Math.min(...top),
    Math.max(...right),
    Math.max(...bottom),
  ];
}
