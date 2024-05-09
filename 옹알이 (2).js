function solution(babbling) {
  const can = ['aya', 'ye', 'woo', 'ma'];

  return babbling.reduce((possible, babble) => {
    // 2번 연속된 옹알이
    // 연속해서 같은 발음을 하는 것을 어려워합니다.
    for (let i = 0; i < can.length; i += 1) {
      if (babble.includes(can[i].repeat(2))) return possible;
    }

    // 섞여서한 옹알이
    // 네 가지 발음을 조합해서 만들 수 있는 발음밖에 하지 못하고
    for (let i = 0; i < can.length; i += 1) {
      console.log(babble.split(can[i]));
      babble = babble.split(can[i]).join(' ').trim();
    }

    // 한번한 옹알이
    // "aya", "ye", "woo", "ma" 네 가지 발음
    if (babble) return possible;

    return (possible += 1);
  }, 0);
}

let result = solution(['ayaye', 'uuu', 'yeye', 'yemawoo', 'ayaayaa']);
console.log(result);

//=============================================================

function solution(babbling) {
  const regexp1 = /(aya|ye|woo|ma)\1+/;
  const regexp2 = /^(aya|ye|woo|ma)+$/;

  return babbling.reduce(
    (ans, word) => (!regexp1.test(word) && regexp2.test(word) ? ++ans : ans),
    0
  );
}

function solution(babbling) {
  const can = ['aya', 'ye', 'woo', 'ma'];
  let count = 0;

  for (let i = 0; i < babbling.length; i++) {
    let babble = babbling[i];

    for (let j = 0; j < can.length; j++) {
      if (babble.includes(can[j].repeat(2))) {
        break;
      }

      babble = babble.split(can[j]).join(' ');
    }

    if (babble.split(' ').join('').length === 0) {
      count += 1;
    }
  }

  return count;
}

//===================================================================

function solution(X, Y) {
    var answer = '';
    let lenX = X.split("");
    let lenY = Y.split("");
    
    let countX = new Array(10).fill(0);
    let countY = new Array(10).fill(0);
    
    for(let count of lenX){
        countX[Number(count)]++;
    }
    for(let count of lenY){
        countY[Number(count)]++;
    }
    for (let i = 9; i >= 0; i--) {
        let commonCount = Math.min(countX[i], countY[i]);
        answer += i.toString().repeat(commonCount);
    }
  
    
    if (answer === '') {
        return "-1";
    }

    if (answer.match(/^0+$/)) {
        return "0";
    }
    
    return answer;
}
