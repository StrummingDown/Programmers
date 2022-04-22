// 문제링크
// https://programmers.co.kr/learn/courses/30/lessons/68935

function solution(n) {
  var answer = 0; // 3진수로 변환한 값을 담아줄 변수
  let tmp = n.toString(3); // 입력받은 n을 삼진법으로 만들어 준뒤
  tmp = tmp.split("").reverse().join(""); // 배열로 만들고 배열 메서드 reverse를 통해 뒤집어 준 뒤, 다시 문자열로 만들기
  answer = parseInt(tmp, 3); //3진수를 10진수로 변환 parseInt(변수, 현재진수값);
  return answer; // 만든 정답 리턴
}
// JS의 toString()은 인자로 숫자를 넣어주면, 인자으 기수(radix)를 반환한다 !
console.log(solution(45));
