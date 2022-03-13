// 문제링크
// https://programmers.co.kr/learn/courses/30/lessons/12982?language=javascript

function solution(d, budget) {
  let answer = 0; // 정답을 담아줄 변수
  let sum = 0; // 배열 요소의 합을 담아줄 변수
  d.sort((a, b) => a - b); // 입력받은 배열 오름차 순으로 정렬
  for (let i = 0; i < d.length; i++) {
    sum += d[i]; // 배열을 순회하며 합을 구하는 반복문
  }
  if (sum === budget) {
    return d.length; // 배열의 합과 예산이 같다면 전부 지원가능하므로 배열의 길이 리턴
  }
  for (let i = 0; i < d.length; i++) {
    budget -= d[i]; // 배열의 제일 작은 요소부터 하나하나 지원해서 예산을 분배
    if (budget < 0) {
      // 예산이 모자라서 음수가 될 경우,
      break; // 반복문 종료
    }
    answer++; // 예산이 남아있는 경우, 다음 부서 지원 가능하므로 1 증가
  }
  return answer; // 정답 리턴
}
