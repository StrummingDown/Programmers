// 문제링크
// https://programmers.co.kr/learn/courses/30/lessons/12973#qna

function solution(s) {
  var answer = -1; // 정답을 담아줄 변수
  let notPairStack = []; // 짝 지어지지 못한 문자만 넣어줄 배열
  notPairStack.push(s[0]); // 입력받은 문자열의 첫번쨰 문자 넣기
  for (let i = 1; i < s.length; i++) {
    // 입력받은 문자열을 두번째부터 끝까지 순회
    if (notPairStack[notPairStack.length - 1] === s[i]) {
      // 짝지어지지 않은 배열의 마지막 문자와 입력받은 문자의 현재 문자가 일치한다면,
      notPairStack.pop(); // 짝이 지어지므로 제거
    } else {
      // 일치하지 않는다면,
      notPairStack.push(s[i]); // 짝이 지어지지 않는것이므로 추가
    }
  }
  answer = notPairStack.length === 0 ? 1 : 0; // 짝지어지지 않은 배열의 요소가 없다면, 전부 짝 지어 제거된 것이므로 리턴 1 그렇지 않다면, 0
  return answer; // 정답 리턴
}
