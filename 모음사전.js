/*
AAAA에서 for 문에 들어가면
i = 0 일 때 AAAAA 가 되고,
여기서 또 for 문에 들어가게 되면 AAAAAA 가 되는데 len 이 6 이라서 return 이 돼
dic 배열에 push 가 안되어 값이 사라지게 되는 겁니다.

[
  '',      'A',     'AA',    'AAA',   'AAAA',  'AAAAA', 'AAAAE',
  'AAAAI', 'AAAAO', 'AAAAU', 'AAAE',  'AAAEA', 'AAAEE', 'AAAEI',
  'AAAEO', 'AAAEU', 'AAAI',  'AAAIA', 'AAAIE', 'AAAII', 'AAAIO',
  'AAAIU', 'AAAO',  'AAAOA', 'AAAOE', 'AAAOI', 'AAAOO', 'AAAOU',
  'AAAU',  'AAAUA', 'AAAUE', 'AAAUI', 'AAAUO', 'AAAUU', 'AAE',
  'AAEA',  'AAEAA', 'AAEAE', 'AAEAI', 'AAEAO', 'AAEAU', 'AAEE',
  'AAEEA', 'AAEEE', 'AAEEI', 'AAEEO', 'AAEEU', 'AAEI',  'AAEIA',
  'AAEIE', 'AAEII', 'AAEIO', 'AAEIU', 'AAEO',  'AAEOA', 'AAEOE',
  'AAEOI', 'AAEOO', 'AAEOU', 'AAEU',  'AAEUA', 'AAEUE', 'AAEUI',
  'AAEUO', 'AAEUU', 'AAI',   'AAIA',  'AAIAA', 'AAIAE', 'AAIAI',
  'AAIAO', 'AAIAU', 'AAIE',  'AAIEA', 'AAIEE', 'AAIEI', 'AAIEO',
  'AAIEU', 'AAII',  'AAIIA', 'AAIIE', 'AAIII', 'AAIIO', 'AAIIU',
  'AAIO',  'AAIOA', 'AAIOE', 'AAIOI', 'AAIOO', 'AAIOU', 'AAIU',
  'AAIUA', 'AAIUE', 'AAIUI', 'AAIUO', 'AAIUU', 'AAO',   'AAOA',
  'AAOAA', 'AAOAE',
  ... 3806 more items
]
*/

function solution(word) {
  // alpha 배열에 문제에 주어진 모음 5개를 선언합니다.
  const alpha = ['A', 'E', 'I', 'O', 'U'];
  // DFS 를 재귀하면서 생성된 단어를 저장할 빈 배열(dic)을 선언합니다.
  const dic = [];

  // DFS 는 인자를 word 와 len 을 받습니다.
  function DFS(word, len) {
    // 단어의 길이는 5 이하의 단어이므로 len 이 5보다 크면 return 을 합니다.
    if (len > 5) {
      return;
    }

    // 생성된 단어는 dic 에 push 합니다.
    dic.push(word);

    // alpha 배열의 길이만큼 반복하면서 DFS 를 재귀합니다.
    for (let i = 0; i < alpha.length; i++) {
      DFS(word + alpha[i], len + 1);
    }
  }

  DFS('', 0);

  return dic.indexOf(word);
}
