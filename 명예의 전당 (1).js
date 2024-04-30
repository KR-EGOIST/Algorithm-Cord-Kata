/*
Function.prototype.apply()
함수가 실행될 때 내부 콘텍스트의 this는 객체 자신 또는 window 객체를 가르킨다.
이때 this가 가리키는 대상 바꾸는 방법 중 하나입니다.
apply()는 인자로 배열(또는 유사 배열 객체)로 제공되는 arguments로 함수를 호출한다.

최소값과 최대값 찾기
const arr = [4,3,2,1];

const minNumber = Math.min.apply(null, arr); // 1
const maxNumber = Math.max.apply(null, arr); // 4

null 을 첫번째 인자로 사용하면 context는 window 객체가 된다.
위와 같이 사용하면 두번째 인자의 배열의 값을 순서대로 호출한 메서드의 인자로 보내 실행한다.
주의사항
배열 내의 비교 불가능한 값이 있다면 NaN이 나온다.
대부분의 경우에는 Math 객체를 사용하면 되지만 큰 배열(~$10^7$) 정도 되면 RangeError: Maximum call stack size exceeded 가 나오니 주의하자.

splice() 메서드는 배열의 기존 요소를 삭제 또는 교체하거나 새 요소를 추가하여 배열의 내용을 변경합니다.

2번 인덱스를 포함해서 이후의 모든 요소 제거
var myFish = ["angel", "clown", "mandarin", "sturgeon"];
var removed = myFish.splice(2);

// myFish is ["angel", "clown"]
// removed is ["mandarin", "sturgeon"]
*/

function solution(k, score) {
  let result = [];

  // 1) 명예의전당(k)을 담는 배열 생성
  let rank = [];

  // 2) score에 담긴 점수를 하나씩 꺼낸다.
  score.forEach((num) => {
    // 3) 명예의 전당에 넣는다.
    rank.push(num);

    // 4) 명예의 전당 배열을 내림차순으로 정렬하고 상위 k번까지 자른다.
    rank.sort((a, b) => b - a).splice(k);

    // 5) 명예의 전당 배열의 최소 값을 answer에 담는다
    result.push(Math.min(...rank));
  });

  // 6) 일차별 명예의 전당에 담긴 최소값을 return 한다.
  return result;
}

let result = solution(3, [10, 100, 20, 150, 1, 100, 200]);
console.log(result);

//=======================================================

function solution(k, score) {
  const stack = [];
  return score.reduce((a, c) => {
    if (stack.length < k) {
      stack.push(c);
      stack.sort((a, b) => a - b);
    } else {
      stack.push(c);
      stack.sort((a, b) => a - b);
      stack.shift();
    }
    a.push(stack[0]);
    return a;
  }, []);
}
