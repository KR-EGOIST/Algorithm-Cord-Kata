/*
replace() 메서드는 pattern의 단일, 일부 혹은 모든 일치 항목이 replacement로 대치된 새로운 문자열을 반환합니다.
pattern은 문자열 혹은 RegExp일 수 있습니다.
replacement는 문자열이나 각 일치 항목마다 호출되는 함수일 수 있습니다.
만약 pattern이 문자열이라면, 오직 첫 번째 항목만 변경됩니다. 원본 문자열은 변하지 않습니다.

repeat() 메서드는 문자열을 주어진 횟수만큼 반복해 붙인 새로운 문자열을 반환합니다.
*/

function solution(phone_number) {
  let len = phone_number.length;
  return '*'.repeat(len - 4) + phone_number.slice(-4);
}

let result = solution('01033334444');
console.log(result);

const solution = (n) => [...n].fill('*', 0, n.length - 4).join('');
