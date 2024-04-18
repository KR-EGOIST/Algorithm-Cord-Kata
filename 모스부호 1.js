/*
  split() 메서드는 String 객체를 지정한 구분자를 이용하여 여러 개의 문자열로 나눕니다.
*/

/*
  map() 메서드는 배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환합니다.

  const array1 = [1, 4, 9, 16];

  // Pass a function to map
  const map1 = array1.map((x) => x * 2);

  console.log(map1);
  // Expected output: Array [2, 8, 18, 32]
*/

const morse = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
};

function solution(letter) {
  return letter
    .split(' ')
    .map((v) => morse[v])
    .join('');
}

let result = solution('.--. -.-- - .... --- -.');
console.log(result);

// function solution(letter) {
//   return letter.split(' ').reduce((prev, curr) => prev + morse[curr], '');
// }

// letter = letter.split(' ');
// for (let i = 0; i < letter.length; i++) {
//   answer += morse[letter[i]];
// }
