// 문제링크
// https://programmers.co.kr/learn/courses/30/lessons/12909

function solution(s) {
  let cnt = 0; // "(" 와 ")" 의 짝을 세줄 변수
  for (let i of s) {
    // 입력받은 괄호 문자열 순회
    if (i === "(") {
      // "(" 이라면,
      cnt++; // 카운트 +1
    } else {
      // ")" 이라면,
      cnt--; // 카운트 -1
    }
    if (cnt < 0) {
      // 만약 카운트가 음수라면 괄호가 열린만큼 닫히지 않았다는 의미이므로
      return false; // false 리턴
    }
  }
  return cnt === 0 ? true : false; // cnt의 갯수가 음수로 내려간적도 없고, 0이라면 제대로 짝지어져 닫혔으므로 true리턴 그렇지 않다면 false리턴
}
