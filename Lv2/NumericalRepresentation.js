// 문제링크
// https://programmers.co.kr/learn/courses/30/lessons/12924

function solution(n) {
  var answer = 0; // 몇가지로 표현될 수 있는지 담아줄 정답 변수
  for (let i = 1; i <= n; i++) {
    // 1부터 입력받은 i까지 순회
    let sum = 0; // 덧셈 결과를 담아줄 변수
    for (let j = i; j <= n; j++) {
      // 위에서 순회하는 i까지 j를 2중 반복문으로 순회
      sum += j; // j를 순회하며 합을 구한다.
      if (sum >= n) {
        // 덧셈 결과가 입력받은 n보다 크자만,
        if (sum === n) answer++; // n과 같다면,정답 경우의수 +1
        break; // 탈출
      }
    }
  }
  return answer; // 위에서 카운트한 정답 리턴
}
