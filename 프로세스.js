function solution(priorities, location) {
  const queue = [];
  const pArr = priorities.map((v, i) => [v, i]);

  while (true) {
    const [priority, index] = pArr.shift();
    const maxPriority = pArr.findIndex(([v, _]) => v > priority);

    if (maxPriority === -1) {
      if (index === location) {
        return queue.length + 1;
      }
      queue.push([priority, index]);
    } else {
      pArr.push([priority, index]);
    }
  }
}

let result = solution([1, 1, 9, 1, 1, 1], 0);
console.log(result);

//=============================================================

function solution(priorities, location) {
  const arr = priorities.map((priority, index) => {
    return {
      index: index,
      priority: priority,
    };
  });

  const queue = [];

  while (arr.length > 0) {
    const firstEle = arr.shift();
    const hasHighPriority = arr.some((ele) => ele.priority > firstEle.priority);
    if (hasHighPriority) {
      arr.push(firstEle);
    } else {
      queue.push(firstEle);
    }
  }

  return queue.findIndex((queueEle) => queueEle.index === location) + 1;
}

//=================================================================

function findPrintOrder(priorities, location) {
  let count = 0; // 처리된 프로세스 수
  let maxPriority = Math.max(...priorities); // 최대 우선순위

  while (true) {
    const currentProcess = priorities.shift(); // 대기중인 프로세스를 큐에서 꺼냄

    if (currentProcess === maxPriority) {
      count++; // 프로세스 실행
      if (location === 0) return count; // 찾고자 하는 프로세스일 경우 결과 반환
      maxPriority = Math.max(...priorities); // 최대 우선순위 갱신
    } else {
      priorities.push(currentProcess); // 큐에 다시 넣음
    }

    location = location === 0 ? priorities.length - 1 : location - 1; // 위치 조정
  }
}
