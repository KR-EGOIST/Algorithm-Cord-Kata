function solution(strings, n) {
  strings.sort((a, b) => {
    if (a[n] > b[n]) {
      return 1;
    }
    if (a[n] < b[n]) {
      return -1;
    }
    if (a[n] === b[n]) {
      if (a > b) {
        return 1;
      }
      if (a < b) {
        return -1;
      }
    }
  });

  return strings;
}

let result = solution(['sun', 'bed', 'car'], 1);
console.log(result);

// ====================================================

/*
localeCompare() 메서드는 참조 문자열이 정렬 순으로 지정된 문자열 앞 혹은 뒤에 오는지 또는 동일한 문자열인지 나타내는 수치를 반환합니다.

localeCompare(compareString);
localeCompare(compareString, locales);
localeCompare(compareString, locales, options);

// "a"는 "c" 전에 위치하므로 음수 값을 반환
"a".localeCompare("c"); // -2 혹은 -1 (또는 다른 음수 값)

// 알파벳 순으로 단어 "check"는 "against"보다 뒤에 위치하므로 양수 값을 반환
"check".localeCompare("against"); // 2 혹은 1 (또는 다른 양수 값)

// "a"와 "a"는 서로 동등하므로 중립 값 0을 반환
"a".localeCompare("a"); // 0
*/

function solution(strings, n) {
  // strings 배열
  // n 번째 문자열 비교
  return strings.sort((s1, s2) =>
    s1[n] === s2[n] ? s1.localeCompare(s2) : s1[n].localeCompare(s2[n])
  );
}
