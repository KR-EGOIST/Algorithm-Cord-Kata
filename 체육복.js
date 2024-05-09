// 여벌 체육복을 가져온 학생이 체육복을 도난당했을 수 있습니다.
// 이때 이 학생은 체육복을 하나만 도난당했다고 가정하며,
// 남은 체육복이 하나이기에 다른 학생에게는 체육복을 빌려줄 수 없습니다.

// 예를 들어 n=5 lost=[2,3] reserve=[1,2] 이면 바른 return 값은 4

// lost 배열이 정렬이 안되어있을 경우를 생각

// n=5 lost=[4,2] reserve=[3,5] 이면 바른 return 값은 5인데
// 정렬하지 않으면 순서대로 배열을 순회하게되어서 4번학생은 3번에게 빌려주게 되고,
// 2번학생은 결국 여분 체육복을 받지 못해서 체육수업에 참여할 수 없기 때문에 총 가능한 학생수가 4명이 된다.

/*
반례
입력값 〉 10, [1, 2, 3, 4, 5, 6], [1, 2, 3]
기댓값 〉 7

입력값 〉 10, [4, 7], [1, 6, 8]
기댓값 〉 9

입력값 〉 5, [2, 3], [3, 4]
기댓값 〉 4

입력값 〉 5, [3, 4], [4, 3]
기댓값 〉 5

순서가 정렬되지 않은 테스트 코드
입력값 〉 5, [4, 2], [3, 5]
기댓값 〉 5
*/

function solution(n, lost, reserve) {
  // 여벌없이 분실한 학생
  let Lost = lost.filter((v) => !reserve.includes(v)).sort((a, b) => a - b);
  // 분실없이 여벌이 있는 학생
  let Reserve = reserve.filter((v) => !lost.includes(v)).sort((a, b) => a - b);

  // 체육복을 빌릴 수 있는 학생 수
  let answer = n - Lost.length;

  // 학생들의 번호는 체격 순으로 매겨져 있어, 바로 앞번호의 학생이나 바로 뒷번호의 학생에게만 체육복을 빌려줄 수 있습니다.
  // 예를 들어, 4번 학생은 3번 학생이나 5번 학생에게만 체육복을 빌려줄 수 있습니다.
  for (let i = 0; i < Lost.length; i++) {
    let lostNum = Lost[i];

    for (let j = 0; j < Reserve.length; j++) {
      let reserveNum = Reserve[j];
      if (reserveNum === lostNum - 1 || reserveNum === lostNum + 1) {
        answer += 1;
        Reserve[j] = -1; // 빌려준 학생은 -1 을 해서 빌려줄 수 없게 만든다.
        break;
      }
    }
  }

  return answer;
}

let result = solution(5, [2, 4], [1, 3, 5]);
console.log(result);

//=====================================================================

function solution(n, lost, reserve) {
  const students = {};
  let answer = 0;
  for (let i = 1; i <= n; i++) {
    students[i] = 1;
  }
  lost.forEach((number) => (students[number] -= 1));
  reserve.forEach((number) => (students[number] += 1));

  for (let i = 1; i <= n; i++) {
    if (students[i] === 2 && students[i - 1] === 0) {
      students[i - 1]++;
      students[i]--;
    } else if (students[i] === 2 && students[i + 1] === 0) {
      students[i + 1]++;
      students[i]--;
    }
  }
  for (let key in students) {
    if (students[key] >= 1) {
      answer++;
    }
  }
  return answer;
}

//====================================================================

function solution(n, lost, reserve) {
    var answer = 0;
    let uniform = new Array(n).fill(1);
    
    for(let i=0; i<reserve.length; i++){
        uniform[reserve[i]-1]++;
    }
    
    for(let i=0; i<lost.length; i++){
        uniform[lost[i]-1]--;
    }
    
    for(let i=0; i<n; i++){
        if(uniform[i] === 0 && i>0 && uniform[i-1] >1){
            uniform[i]++;
            uniform[i-1]--;
        }else if(uniform[i] ===0 && i<n - 1 && uniform[i+1]>1){
            uniform[i]++;
            uniform[i+1]--;
        }
    }
    
    for(let i=0; i<n; i++){
        if(uniform[i]>0){
            answer++
        }
    }
    return answer;
}
