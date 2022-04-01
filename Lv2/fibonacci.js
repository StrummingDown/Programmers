// 문제링크
// https://programmers.co.kr/learn/courses/30/lessons/12945#qna

function solution(n) {
  var answer = 0;
  answer = fibo(n); // 아래에서 정의한 함수의 리턴값을 정답에 할당
  return answer; // 정답 리턴
}
function fibo(n) {
  let fiboArr = new Array(n + 1).fill(0); // 입력받은 n의 수만큼 0을 요소로 가진 배열 생성
  fiboArr[0] = 0; // 0번쨰는 0
  fiboArr[1] = 1; // 1번째는 1
  for (let i = 2; i <= n; i++) fiboArr[i] = (fiboArr[i - 1] + fiboArr[i - 2]) % 1234567; // 피보나치의 요소는 n-1번쨰 요소와 n-2 번쨰 요소의 합으로 뻗어나간다. 해당 요소를 1234567로 나눈것이 각 요소의 값
  return fiboArr[n]; // n번쨰 요소 리턴
}
