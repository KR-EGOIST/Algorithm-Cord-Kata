function solution(phone_book) {
  phone_book.sort(); // 전화번호 리스트를 정렬합니다.

  for (let i = 0; i < phone_book.length - 1; i++) {
    // 현재 번호와 다음 번호의 시작 부분이 같으면 접두어이므로 false를 반환합니다.
    if (phone_book[i + 1].startsWith(phone_book[i])) {
      return false;
    }
  }

  return true; // 접두어가 없는 경우 true를 반환합니다.
}
