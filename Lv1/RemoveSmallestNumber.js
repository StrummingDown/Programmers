// 문제링크
// https://programmers.co.kr/learn/courses/30/lessons/12935

function solution(arr) {
  let answer = arr.slice(); // 원본 배열을 유지하기 위해 깊은 복사
  if (arr.length === 1) {
    // 배열의 길이가 1이면, 삭제하고 빈 배열이기 떄문에,
    return [-1]; // -1만 들어있는 배열 리턴
  }
  arr.sort((a, b) => b - a); // 그렇지 않다면, 내림차순 정렬
  let remove = arr.pop(); // 가장 작은값(맨 뒤의 값) 삭제
  answer = answer.filter((el) => el !== remove); // 위에서 복사한 배열에 방금 제거한 값을 필터링을 통해 제거한다.
  return answer; // 제일 작은 값을 제거한 원본 배열 리턴
}
// console.log(solution([-1, 3, 2, 100]));
