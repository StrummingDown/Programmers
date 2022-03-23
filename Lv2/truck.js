function solution(bridge_length, weight, truck_weights) {
  let cnt = 0; // 몇초 걸렸는지 카운트
  let queue = new Array(bridge_length).fill(0); // 다리의 길이만큼 0를 가진 배열 만들기

  while (truck_weights.length !== 0 || queue.length !== 0) {
    // 남아있는 트럭과 다리 위의 트럭이 모두 없을떄까지 반복
    let sum = queue.slice(1).reduce((cnt, el) => {
      // 다리위 트럭의 무게의 합 구하기
      return cnt + el;
    }, 0);

    sum += truck_weights[0]; // 다음 올라올 트럭의 무게와 다리 위의 트럭의 무게의 합

    if (sum <= weight) {
      // 다리 위의 트럭의 무게와 다음 올라올 트럭의 합이 제한 무게보다 작다면,
      queue.push(truck_weights.shift()); // 다리위에 올라올수가 있고, 남아있는 트럭 목록에서 제거
    } else if (truck_weights.length !== 0) {
      // 다음 트럭이 있는데, 올라오지 못한다면 공백의 의미인 0을 다리위에 추가
      queue.push(0);
    }
    queue.shift(); // 남아있는 트럭이 없다면 다리위의 맨 앞쪽 값 제거
    cnt++; // 루프가 한번 돌았따면 1초가 지나므로 +!
  }
  return cnt; // 몇 초 걸렸는지 리턴
}

console.log(solution(100, 100, [10, 10, 10, 10, 10, 10, 10, 10, 10, 10]));
