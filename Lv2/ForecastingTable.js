function solution(n, a, b) {
  let answer = 0; // 경기가 몇번 치뤄졌는지 담아줄 정답 변수

  while (a != b) {
    // a와 b의 순번이 같아질때까지 반복
    a = Math.ceil((a = a / 2)); // 루프가 돌떄마다 순번이 절반의 올림이 된다.
    b = Math.ceil((b = b / 2));
    answer++; // 루프가 돌때마다 경기가 진행되므로 +1
  }
  return answer; // 경기횟수 리턴
}

console.log(solution(8, 4, 7));
