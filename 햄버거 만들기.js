/*
slice() 메서드는 어떤 배열의 begin 부터 end 까지(end 미포함)에 대한 얕은 복사본을 새로운 배열 객체로 반환합니다. 원본 배열은 바뀌지 않습니다.
slice(-4) 뒤에서부터 4칸 움직여 해당 인덱스부터 시작해 끝까지 새로운 배열로 반환.

splice() 메서드는 배열의 기존 요소를 삭제 또는 교체하거나 새 요소를 추가하여 배열의 내용을 변경합니다.
splice(-4) 뒤에서부터 4칸 움직여 해당 인덱스부터 시작해 끝까지 삭제.
*/

function solution(ingredient) {
  let answer = 0;
  const stack = [];

  for (const i of ingredient) {
    stack.push(i);

    if (stack.slice(-4).join('') === '1231') {
      stack.splice(-4);
      answer++;
    }
  }
  return answer;
}

let result = solution([2, 1, 1, 2, 3, 1, 2, 3, 1]);
console.log(result);

//==============================================================================

/*
Array 인스턴스의 includes() 메서드는 배열의 항목에 특정 값이 포함되어 있는지를 판단하여 적절히 true 또는 false를 반환합니다.

String 값의 replace() 메서드는 pattern의 단일, 일부 혹은 모든 일치 항목이 replacement로 대치된 새로운 문자열을 반환합니다.
pattern은 문자열 혹은 RegExp일 수 있습니다. replacement는 문자열이나 각 일치 항목마다 호출되는 함수일 수 있습니다.
만약 pattern이 문자열이라면, 오직 첫 번째 항목만 변경됩니다. 원본 문자열은 변하지 않습니다.

const paragraph = "I think Ruth's dog is cuter than your dog!";

console.log(paragraph.replace("Ruth's", 'my'));
// Expected output: "I think my dog is cuter than your dog!"

const regex = /Dog/i;
console.log(paragraph.replace(regex, 'ferret'));
// Expected output: "I think Ruth's ferret is cuter than your dog!"

*/

// 시간초과
function solution(ingredient) {
  let answer = 0;
  ingredient = ingredient.join('');

  while (ingredient.includes('1231')) {
    ingredient = ingredient.replace('1231', '');
    answer += 1;
  }

  return answer;
}

//=============================================================================

function solution(ingredient) {
  let count = 0;

  for (let i = 0; i < ingredient.length; i++) {
    if (ingredient.slice(i, i + 4).join('') === '1231') {
      count++;
      ingredient.splice(i, 4);
      i -= 3;
    }
  }

  return count;
}
