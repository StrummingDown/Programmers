// 문제링크
// https://programmers.co.kr/learn/courses/30/lessons/12911

function solution(n) {
  let origin = n.toString(2).split(""); // 입력받은 수를 이진법으로 바꿔준다.
  let cnt = origin.reduce((cnt, el) => {
    // 이진법으로 변환한 수의 1의 갯수를 카운트 한다.
    return el === "1" ? cnt + 1 : cnt;
  }, 0);
  let next = n + 1; // 입력받은 n보다 큰 수중 이진법으로 변환했을때 1의 갯수가 같은 수를 구해야 한다.
  while (true) {
    // 조건에 만족할때까지 반복
    let nextArr = next.toString(2).split(""); // n보다 큰 수를 이진법으로 변환
    let cntN = nextArr.reduce((cnt, el) => {
      // 마찬가지로 1의 갯수 카운트
      return el === "1" ? cnt + 1 : cnt;
    }, 0);
    if (cnt === cntN) {
      // 만약 1의 갯수가 같다면,
      return next; // n보다 큰 수 리턴
    }
    next++; // 루프를 돌아도 조건에 충족되지 않는다면, +1
  }
}
console.log(solution(15));
