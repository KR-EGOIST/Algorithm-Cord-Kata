function solution(fees, records) {
  const parking = {};

  records.forEach((v) => {
    const [time, id, status] = v.split(' ');
    const [hour, min] = time.split(':');

    // 분으로 통일
    const currentTime = Number(hour) * 60 + Number(min);

    // parking 객체에 입차할 차량 정보가 없으면 등록
    if (!parking[id]) {
      parking[id] = { time: 0, id };
    }

    // 현재 차량 상태 저장
    parking[id].status = status;

    // 현재 차량 상태가 IN이면 lastInTime 저장
    if (status === 'IN') {
      parking[id].lastInTime = currentTime;
    }

    // 현재 차량 상태가 OUT 이면 time에 (현재 시간 - 입차 시간) 을 더해준다.
    parking[id].time += currentTime - parking[id].lastInTime;
  });

  return (
    Object.values(parking)
      // 차량 번호가 작은 자동차부터 청구한다고 했으므로 내림차순 정렬
      .sort((a, b) => a.id - b.id)
      .map((v) => {
        // 현재 차량 상태가 IN 으로 끝났으면 23:59 에 출차된 것으로 간주
        // 최대 시간 = 24 * 60 - 1 = 1439 분
        // 최대 시간을 마지막 입고 시간으로 빼준 값을 주차시간에 더해줘야한다.
        if (v.status === 'IN') {
          v.time += 1439 - v.lastInTime;
        }
        // 기본 시간 이내라면 기본 요금
        if (fees[0] > v.time) {
          return fees[1];
        }
        // ((주차 시간 - 기본 시간) / 단위 시간) * 단위 요금 + 기본 요금
        return Math.ceil((v.time - fees[0]) / fees[2]) * fees[3] + fees[1];
      })
  );
}

let result = solution(
  [180, 5000, 10, 600],
  [
    '05:34 5961 IN',
    '06:00 0000 IN',
    '06:34 0000 OUT',
    '07:59 5961 OUT',
    '07:59 0148 IN',
    '18:59 0000 IN',
    '19:09 0148 OUT',
    '22:59 5961 IN',
    '23:00 5961 OUT',
  ]
);
console.log(result);
