// 문제링크
// https://programmers.co.kr/learn/courses/30/lessons/12912

function solution(a, b) {
  var answer = 0; // 정답을 담아줄 변수
  aa = Math.min(a, b); // a,b 중 무엇이 큰 수인지 알 수 없으므로 a에 작은수
  bb = Math.max(a, b); // b에 큰수를 재할당
  for (let i = aa; i <= bb; i++) {
    // 작은 수에서 큰 수까지 순회
    answer += i; // 사이의 수의 합을 구한다.
  }
  return answer; // 구한 합을 리턴
}
