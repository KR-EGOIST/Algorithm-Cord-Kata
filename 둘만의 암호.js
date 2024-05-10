function solution(s, skip, index) {
  // 1) filter 함수를 사용하여 skip문자를 제거 배열을 반환 받는다.
  const alpha = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ].filter((v) => !skip.includes(v));
  // 2) map 함수를 사용하여 (현재 알파벳) + index에 위치한 값을 반환한다.
  // 3) 만약 z 를 넘어가면 alpha.length 를 나머지 계산해 a 부터 다시 시작할 수 있게 한다.
  return [...s]
    .map((v) => alpha[(alpha.indexOf(v) + index) % alpha.length])
    .join('');
}

let result = solution('aukks', 'wbqd', 5);
console.log(result);

//========================================================================

// 아스키코드 이용
function solution(s, skip, index) {
  let ans = '';
  let arr = s.split('');
  // a: 97 z: 122
  arr.map((item) => {
    let a = item.charCodeAt(); // 아스키코드로 나타냄
    for (let i = 0; i < index; i++) {
      a++; // 숫자 1더한 값으로 아래 사항들 수행
      // z 이상이면 a로 바꿈
      if (a > 122) {
        a = 97;
      }
      // 다시 문자로 변환해서 skip에 들어있는지 확인
      while (skip.includes(String.fromCodePoint(a))) {
        a++; // 있다면 한번 더 +1
        if (a > 122) {
          a = 97;
        }
      }
    }
    ans = ans + String.fromCodePoint(a);
  });
  return ans;
}

//=================================================================

/*
[^문자]
괄호안의 문자를 제외한 것
[^lgEn] "l" "g" "E" "N" 4개 문자를 제외
※ 대괄호 안에서 쓰면 제외의 뜻, 대괄호 밖에서 쓰면 시작점 뜻
*/:

const solution = (s, skip, index) => {
  let ans = '';
  const matched = 'abcdefghijklmnopqrstuvwxyz'.match(
    new RegExp(`[^${skip}]`, 'g')
  );
  for (const c of s) {
    const newIdx = matched.indexOf(c) + index;
    ans += matched[newIdx % matched.length];
  }
  return ans;
};
