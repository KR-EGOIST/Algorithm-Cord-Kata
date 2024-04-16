function solution(my_string) {
  my_string = [...my_string].map((v, i) =>
    v >= 'a' ? v.toUpperCase() : v.toLowerCase()
  );

  return my_string.join('');
}

let result = solution('cccCCC');
console.log(result);
