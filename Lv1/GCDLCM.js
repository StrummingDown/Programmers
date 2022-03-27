// 문제링크
// https://programmers.co.kr/learn/courses/30/lessons/12940

function solution(n, m) {
  var answer = []; // 최대공약수와 최소공배수를 담아줄 정답 배열
  let gcd = 0; // 최대공약수
  let lcm = 0; // 최소공배수
  for (let i = 1; i <= m; i++) {
    // 1부터 입력받은 수 중 하나까지 순회
    if (n % i === 0 && m % i === 0) {
      // 끝까지 순회하면서 i가 두 수 전부로 나눠진다면,
      gcd = i; // 그 수중 제일 큰 수가 최대공약수
    }
  }
  lcm = (n * m) / gcd; // 최소공배수는 두 수의 곱을 최대공약수로 나누면 구해진다.
  answer.push(gcd, lcm); // 정답 배열에 추가

  return answer; // 정답 배열 리턴
}
