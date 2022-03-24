// 문제링크
// https://programmers.co.kr/learn/courses/30/lessons/12919?language=javascript

function solution(seoul) {
  for (let idx = 0; idx < seoul.length; idx++) {
    // 입력받은 배열 순회
    if (seoul[idx] === "Kim") {
      // 배열의 요소가 "Kim"이라면
      var answer = `김서방은 ${idx}에 있다`; // 해당 인덱스에 정해진 문자열을 대입하여 할당
    }
  }
  return answer; // 정답 리턴
}
