class Heap {
  constructor() {
    this.heap = [];
  }

  size() {
    return this.heap.length;
  }

  peek() {
    return this.heap[0];
  }

  push(value) {
    // 힙의 맨 뒤에 push
    this.heap.push(value);
    // value가 push 된 위치
    let index = this.heap.length - 1;

    // 오름차순 정렬
    // 자식 노드는 부모 노드보다 값이 작아야하므로 정렬
    while (
      index > 0 &&
      this.heap[index] < this.heap[Math.floor((index - 1) / 2)]
    ) {
      // Math.floor((index - 1) / 2) : index의 부모 노드
      const temp = this.heap[index];
      this.heap[index] = this.heap[Math.floor((index - 1) / 2)];
      this.heap[Math.floor((index - 1) / 2)] = temp;
      index = Math.floor((index - 1) / 2);
    }
  }

  // 값은 빼되, 오름차 순 정렬 함
  pop() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();

    const minValue = this.heap[0];
    // 끝에 있는 노드를 부모로 지정
    this.heap[0] = this.heap.pop();
    let index = 0;

    // 오름차순 정렬
    // 왼쪽 자식이 힙 길이 보다 작을 때까지
    while (index * 2 + 1 < this.heap.length) {
      // 오른쪽 자식 < 힙 길이 && 오른쪽 자식 < 왼쪽 자식 ?
      // 오른쪽 자식 : 왼쪽 자식
      let minChildIndex =
        index * 2 + 2 < this.heap.length &&
        this.heap[index * 2 + 2] < this.heap[index * 2 + 1]
          ? index * 2 + 2
          : index * 2 + 1;

      if (this.heap[index] < this.heap[minChildIndex]) {
        break;
      }

      const temp = this.heap[index];
      this.heap[index] = this.heap[minChildIndex];
      this.heap[minChildIndex] = temp;
      index = minChildIndex;
    }
    return minValue;
  }
}

function solution(scoville, K) {
  const heap = new Heap();

  for (const sco of scoville) {
    heap.push(sco);
  }

  let mixedCount = 0;

  // 힙 안에 음식이 2개 이상 있고
  // 스코빌 지수가 가장 작은 음식의 수치가 K보다 작을 때까지 반복
  while (heap.size() >= 2 && heap.peek() < K) {
    // 스코빌 지수가 가장 작은 두 음식 섞기
    const min1 = heap.pop();
    const min2 = heap.pop();
    const mix = min1 + min2 * 2;
    heap.push(mix);
    mixedCount++;
  }

  return heap.peek() >= K ? mixedCount : -1;
}

let result = solution([1, 2, 3, 9, 10, 12], 7);
console.log(result);
