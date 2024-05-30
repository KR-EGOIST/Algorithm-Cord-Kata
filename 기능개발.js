function solution(progresses, speeds) {
  const days = progresses.map((v, i) => Math.ceil((100 - v) / speeds[i]));

  const result = [0];
  let maxDay = days[0];
  let idx = 0;

  for (const day of days) {
    if (day <= maxDay) {
      result[idx] += 1;
    } else {
      idx += 1;
      maxDay = day;
      result[idx] = 1;
    }
  }
  return result;
}

let result = solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1]);
console.log(result);

//=================================================

function solution(progresses, speeds) {
  var answer = [];

  while (speeds.length > 0) {
    // 개발
    for (let i in speeds) {
      if (progresses[i] < 100) {
        progresses[i] += speeds[i];
      }
    }

    // 배포
    let deploy_count = 0;
    while (progresses[0] >= 100) {
      progresses.shift();
      speeds.shift();
      deploy_count++;
    }
    if (deploy_count > 0) {
      answer.push(deploy_count);
    }
  }

  return answer;
}
