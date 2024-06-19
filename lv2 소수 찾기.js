function isPrime(num) {
  if (num < 2) return false;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function dfs(set, comb, others) {
  if (comb != '' && isPrime(comb)) {
    set.add(Number(comb));
  }

  for (let i = 0; i < others.length; i++) {
    dfs(
      set,
      comb + others[i],
      others.substring(0, i) + others.substring(i + 1)
    );
  }
}

function solution(numbers) {
  let set = new Set();

  dfs(set, '', numbers);

  return set.size;
}

let result = solution('17');
console.log(result);
