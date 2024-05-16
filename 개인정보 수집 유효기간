function solution(today, terms, privacies) {
  const [cYear, cMonth, cDay] = today.split('.').map((v) => +v);
  const termsMap = {};
  terms.forEach((v) => {
    const [term, limit] = v.split(' ');
    termsMap[term] = +limit;
  });

  const answer = [];

  privacies.forEach((v, i) => {
    const [date, term] = v.split(' ');
    const [year, month, day] = date.split('.').map((v) => +v);

    let limitYear = year + Math.floor(termsMap[term] / 12),
      limitMonth = month + (termsMap[term] % 12),
      limitDay = day - 1;

    if (limitMonth > 12) {
      limitYear += 1;
      limitMonth %= 12;
    }

    if (limitDay === 0) {
      limitDay = 28;
      limitMonth -= 1;
    }

    if (cYear > limitYear) {
      answer.push(i + 1);
    } else if (cYear === limitYear && cMonth > limitMonth) {
      answer.push(i + 1);
    } else if (
      cYear === limitYear &&
      cMonth === limitMonth &&
      cDay > limitDay
    ) {
      answer.push(i + 1);
    }
  });
  return answer;
}

let result = solution(
  '2022.05.19',
  ['A 6', 'B 12', 'C 3'],
  ['2021.05.02 A', '2021.07.01 B', '2022.02.19 C', '2022.02.20 C']
);
console.log(result);

//===================================================================

function solution(today, terms, privacies) {
  var answer = [];
  var [year, month, date] = today.split('.').map(Number);
  var todates = year * 12 * 28 + month * 28 + date;
  var t = {};
  terms.forEach((e) => {
    let [a, b] = e.split(' ');
    t[a] = Number(b);
  });
  privacies.forEach((e, i) => {
    var [day, term] = e.split(' ');
    day = day.split('.').map(Number);
    var dates = day[0] * 12 * 28 + day[1] * 28 + day[2] + t[term] * 28;
    if (dates <= todates) answer.push(i + 1);
  });
  return answer;
}

//==================================================================

function solution(today, terms, privacies) {
  const map = new Map();
  for (let i = 0; i < terms.length; i++) {
    const [type, term] = terms[i].split(' ');
    map.set(type, term * 28);
  }

  return privacies.reduce((acc, curr, i) => {
    const [date, type] = curr.split(' ');
    const [cy, cm, cd] = date.split('.');
    const [ty, tm, td] = today.split('.');

    const currentDays = +cy * 12 * 28 + +cm * 28 + +cd;
    const todayDays = +ty * 12 * 28 + +tm * 28 + +td;

    if (todayDays - currentDays >= map.get(type)) acc.push(i + 1);
    return acc;
  }, []);
}
