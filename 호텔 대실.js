// 다음 이용 가능 시간을 반환해주는 함수
const getNextTime = (endTime) => {
  // split 함수로 퇴실 시간을 분리해준다.
  const next = endTime.split(':');

  // 문자열 시간을 숫자로 변환한 뒤 반환해줍니다.
  // 종료 시간 + 10을 해서 다음 이용 가능 시간을 구합니다.
  // ex) 19:20 -> 1160 => 1160 + 10 -> 1170
  return Number(next[0]) * 60 + Number(next[1]) + 10;
};

function solution(book_time) {
  // book_time 배열을 시작 시간 순으로 정렬해줍니다.
  book_time.sort();

  // 종료 시간이 들어갈 배열
  const room = [];

  // forEach 메서드로 하나씩 확인합니다.
  book_time.forEach((t) => {
    const time = t[0].split(':');

    // 문자열 시간을 숫자로 변환합니다.
    const startTime = Number(time[0]) * 60 + Number(time[1]);

    // room 배열에서 시작 시간 보다 작거나 같은 시간을 찾습니다.
    const idx = room.findIndex((v) => v <= startTime);

    // 만약 없다면 room에 새로운 종료 시간을 넣어줍니다.
    if (idx === -1) room.push(getNextTime(t[1]));
    // 만약 있다면 기존 room의 종료 시간을 갱신해줍니다.
    else room[idx] = getNextTime(t[1]);
  });

  // room의 갯수를 반환해줍니다.
  return room.length;
}

let result = solution([
  ['15:00', '17:00'],
  ['16:40', '18:20'],
  ['14:20', '15:20'],
  ['14:10', '19:20'],
  ['18:20', '21:20'],
]);
console.log(result);


//-----------------------------------------------------------------

function solution(book_time) {
    let room = [];

    book_time = book_time.map(item => {
        return item.map(el => Number(el.split(":")[0])*60 + Number(el.split(":")[1]));
    });

    book_time.sort((a,b) => a[0] - b[0]);
    room.push(book_time[0]);

    for(i = 1; i < book_time.length; i++){
        let room_add_flag = true;
        for(j = 0; j < room.length; j++){
            if(room[j][1]+10 <= book_time[i][0]){
                room[j] = book_time[i];
                room_add_flag = false;
                break;
            }            
        }

        if(room_add_flag){
            room.push(book_time[i]);
        }
   }

    return room.length;
}
