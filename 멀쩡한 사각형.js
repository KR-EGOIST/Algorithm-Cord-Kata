/*
사각형의 w와 h가 서로소인 경우 잘린 정사각형의 갯수 = w + h - 1

사각형에서 서로소 관계의 사각형의 갯수 = 최대공약수

잘린 정사각형의 개수는 g * ((w` / g) + (h`/g) - 1) = w`+ h` - g

*서로소 : 두 수 사이의 관계가 1 이외에 공약수가 없는 수

* w` : 사각형의 가로길이, h` : 사각형의 세로길이
*/

function gcd(a, b) {
  return a % b === 0 ? b : gcd(b, a % b);
}

function solution(w, h) {
  return w * h - (w + h - gcd(w, h));
}

let result = solution(8, 12);
console.log(result);
