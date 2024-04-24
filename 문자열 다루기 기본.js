/*
parseInt() 함수는 문자열 인자를 파싱하여 특정 진수(수의 진법 체계에서 기준이 되는 값)의 정수를 반환합니다.

parseInt(string);
parseInt(string, radix);

console.log(parseInt('123'));
// 123 (default base-10)
console.log(parseInt('123', 10));
// 123 (explicitly specify base-10)
console.log(parseInt('   123 '));
// 123 (whitespace is ignored)
console.log(parseInt('077'));
// 77 (leading zeros are ignored)
console.log(parseInt('1.9'));
// 1 (decimal part is truncated)
console.log(parseInt('ff', 16));
// 255 (lower-case hexadecimal)
console.log(parseInt('0xFF', 16));
// 255 (upper-case hexadecimal with "0x" prefix)
console.log(parseInt('xyz'));
// NaN (input can't be converted to an integer)
*/

function solution(s) {
  return (s.length === 4 || s.length === 6) && s == parseInt(s);
}

let result = solution('a234');
console.log(result);

//=================================================================

/*
반례: 1e22
1e22를 Number()를 이용해서 숫자로 형 변환하면 1의 22승, 즉 1이 된다!!!
이런 코너 케이스도 생각할 수 있도록 하자...
*/

function solution(s) {
  return (s.length === 4 || s.length === 6) && Number.isInteger(Number(s));
}
