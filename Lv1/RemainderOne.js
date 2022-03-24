// 문제링크
// https://programmers.co.kr/learn/courses/30/lessons/87389

function solution(n) {
  for (let i = 1; i < n; i++) {
    // 0으로 나눌순 없으므로 1부터 입력받은 수의 -1 까지 순회
    if (n % i === 1) {
      // 나머지가 1이 된다면,
      return i; // 그 수가 정답이므로 바로 리턴
    }
  }
}
