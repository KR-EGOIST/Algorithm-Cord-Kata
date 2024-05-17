function solution(id_list, report, k) {
  const result = new Array(id_list.length).fill(0);
  const reportMap = new Map();

  id_list.forEach((user) => {
    reportMap[user] = [];
  });

  report.forEach((user) => {
    const [userId, reportId] = user.split(' ');

    // 신고당한 유저의 배열에 신고한 유저의 이름이 없으면 신고한 유저의 이름을 push
    if (!reportMap[reportId].includes(userId)) {
      reportMap[reportId].push(userId);
    }
  });

  // 신고당한 유저의 배열 길이가 k 보다 크거나 같으면 정지를 당함
  // 정지가 이루어지면 처리 결과 메일을 보내야하므로
  // 신고당한 유저의 배열을 순회하면서 result 배열에 신고한 유저의 index 를 찾아 +1 을 해준다.
  for (const key in reportMap) {
    if (reportMap[key].length >= k) {
      reportMap[key].forEach((user) => {
        result[id_list.indexOf(user)] += 1;
      });
    }
  }

  return result;
}

let result = solution(
  ['muzi', 'frodo', 'apeach', 'neo'],
  ['muzi frodo', 'apeach frodo', 'frodo neo', 'muzi neo', 'apeach muzi']
);
console.log(result);

//================================================================

function solution(id_list, report, k) {
  let reports = [...new Set(report)].map((a) => {
    return a.split(' ');
  });

  let counts = new Map();

  for (const bad of reports) {
    // counts.get(bad[1]) + 1 || 1
    // 처음에 값이 들어올 때는 counts.get(bad[1]) 는 undefind 이다.
    // undefined + 1 = NaN 이므로 NaN || 1 은 1 이므로 1 이 할당된다.
    counts.set(bad[1], counts.get(bad[1]) + 1 || 1);
  }

  let good = new Map();

  for (const report of reports) {
    if (counts.get(report[1]) >= k) {
      good.set(report[0], good.get(report[0]) + 1 || 1);
    }
  }

  let answer = id_list.map((a) => good.get(a) || 0);

  return answer;
}
