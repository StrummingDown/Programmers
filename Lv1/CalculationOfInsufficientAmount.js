// 문제링크
// https://programmers.co.kr/learn/courses/30/lessons/82612?language=javascript

function solution(price, money, count) {
  var answer = 0; // 금액이 얼마가 모자른지 담아줄 정답 변수
  let total = 0; // 놀이기구를 타는데 들어가는 총 비용
  for (let i = 1; i <= count; i++) {
    // 놀이기루를 탈떄마다 요금에 할증이 붙기 떄문에, 타는 횟수만큼 반복
    total += price * i; // i번 탈때마다 i번 곱한게 요금이 되므로 가격과 i의 곱이 총 요금이 된다.
  }
  answer = total - money; // 가진돈에서 내야 할 요금의 차가 곧 얼마가 모자른지가 된다.

  if (answer < 0) {
    // 돈이 모자르지 않다면
    return 0; // 0리턴
  }
  return answer; // 모자르다면 모자른 비용 리턴
}

console.log(solution(3, 20, 4));
