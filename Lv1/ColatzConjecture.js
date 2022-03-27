// 문제링크
// https://programmers.co.kr/learn/courses/30/lessons/12943

function solution(num) {
  let answer = 0; // 몇번 반복 루프를 돌았는지 담아줄 정답 변수

  while (num !== 1) {
    // 입력받은 수가 1이 될때까지 반복
    if (num % 2 === 0) {
      // 짝수라면
      num /= 2; // 나누기 2
    } else {
      // 홀수라면
      num = num * 3 + 1; // 3을 곱하고 +1
    }
    if (answer >= 500) {
      // 500번이상 루프를 돌았다면,
      return -1; // -1리턴
    }
    answer++; // 루프가 돌때마다 +1
  }

  return answer; // 몇번 돌았는지 정답 리턴
}
console.log(solution(6));
