function solution(number, limit, power) {
  let arr = [];
  let cnt = 0;
  let result = [];

  for (let i = 1; i <= number; i++) {
    for (let j = 1; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        cnt++;

        if (j != i / j) {
          cnt++;
        }
      }
    }
    arr.push(cnt);
    cnt = 0;
  }

  result = arr.map((v) => {
    if (v > limit) return power;
    else return v;
  });

  return result.reduce((acc, cur) => (acc += cur));
}

let result = solution(10, 3, 2);
console.log(result);

//==============================================================

function solution(number, limit, power) {
    var answer = 0;
    for (let n = 1; n <= number; n++)
    {
        let count = 0;
        for (let j = 1; j * j <= n; j++)
        {
            if (j * j == n) count++;
            else if (n % j == 0) count += 2;
        }
        if (count > limit) count = power;
        answer += count;
    }
    return answer;
}
