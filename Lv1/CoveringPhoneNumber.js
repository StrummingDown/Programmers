// 문제링크
// https://programmers.co.kr/learn/courses/30/lessons/12948

function solution(phone_number) {
  var answer = ""; // 가려진 핸드폰 번호를 담을 정답 변수
  let total = phone_number.length; // 핸드폰 번호의 길이
  for (let i = 0; i < total; i++) {
    // 핸드폰 번호 길이만큼 순회
    if (total - i < 5) {
      // 번호가 끝에서 4개가 밖에 남지 않았다면,
      answer += phone_number[i]; // 번호를 그대로 넣어주고
    } else {
      answer += "*"; // 그렇지 않다면, *를 추가
    }
  }
  return answer; // 저장된 번호 리턴
}
