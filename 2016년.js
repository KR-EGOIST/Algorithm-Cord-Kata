/*
Date 생성자는 시간의 특정 지점을 나타내는 Date 객체를 플랫폼에 종속되지 않는 형태로 생성합니다.
Date 객체는 1970년 1월 1일 UTC(국제표준시) 자정으로부터 지난 시간을 밀리초로 나타내는 UNIX 타임스탬프를 담습니다.

getDay() 메서드는 주어진 날짜의 현지 시간 기준 요일을 반환합니다.
반환 값 : 현지 시간에 따라, 주어진 날짜의 요일에 해당하는 0 이상 6 이하의 정수. (일요일은 0, 월요일은 1, 화요일은 2, ...)
*/

function solution(a, b) {
  const week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  const date = new Date(`2016-${a}-${b}`);  // 2016-05-23T15:00:00.000Z
  const day = date.getDay();  // 2
  return week[day];  // TUE
}

let result = solution(5, 24);
console.log(result);

// ==================================================================

/*
Date 이용하지 않고 계산
*/

function solution(a, b) {
  let arr = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let week = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  // 1월 1일부터 a월 b일까지 며칠 차이인지 저장할 변수
  let passedDays = 0;
  // a달 전까지의 모든 달에 대해 각 달의 날짜 수 더해줌
  for (let i = 1; i < a; i++) passedDays += arr[i];
  // b일 더해주고 1월 0일이 아닌 1월 1일부터 시작하므로 1 빼줌
  passedDays += b - 1;
  return week[(5 + passedDays) % 7];
}

// =====================================================================

/*
1. 문자열을 사용하는 방법 외에 Date를 생성하는 새로운 방법을 알게 되었다. (월 입력에 주의!!!)
2. 생성된 Date를 문자열로 변환하면 앞 세글자는 요일의 줄임말이다!
*/

function getDayName(a,b){
  var date = new Date(2016, (a - 1), b);
    return date.toString().slice(0, 3).toUpperCase();
}
