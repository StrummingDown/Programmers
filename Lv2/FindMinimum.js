// 문제링크
// https://programmers.co.kr/learn/courses/30/lessons/12941

function solution(A, B) {
  var answer = 0; // 정답을 담아줄 변수

  A.sort((a, b) => a - b); // 오름차순 정렬
  B.sort((a, b) => b - a); // 내림차순 정렬
  // 같은 인덱스의 값 끼리 곱하고 이전 값과 더하여 누적
  answer = A.reduce((acc, n, idx) => {
    // 정렬된 A를 순회하며 B를 곱해서 더해준다.
    return (acc += n * B[idx]);
  }, 0);
  return answer; // 정답 리턴
}
