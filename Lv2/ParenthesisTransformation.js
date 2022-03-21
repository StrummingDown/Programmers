// 문제링크
// https://programmers.co.kr/learn/courses/30/lessons/60058

function solution(p) {
  var answer = ""; // 정답을 담아줄 변수

  if (p === "") return ""; // 1번 조건 : 빈 문자열을 입력받았다면, 그대로 리턴

  let count = 0; // "(" 와 ")" 의 갯수가 같은지, 균형잡힌 괄호 문자열을 판단해 줄 변수
  let checked = true; // 올바른 괄호 문자열인지 판단해 줄 boolean 변수
  let u; // 첫번째 균형잡힌 괄호 문자열을 담아줄 변수
  let v; // 두번쨰 균형잡힌 괄호 문자열을 담아줄 변수

  for (let i = 0; i < p.length; i++) {
    // 2번 조간을 실행시키기 위해 입력받은 문자열 순회
    if (p[i] === "(") {
      // 균형잡힌 괄호 문자열을 판단하기 위한 조건문 두 개
      // "(" 라면,
      count++; // count + 1
    }
    if (p[i] === ")") {
      // ")" 라면,
      count--; // count - 1
    }
    if (count < 0) {
      // count가 음수라면, (올바른 괄호 문자열이 아니라면,)
      checked = false; // 올바른 괄호 문자열을 판단해줄 변수의 값 false로 할당
    }
    if (count === 0) {
      // 균형잡힌 괄호 문자열이라면,
      u = p.slice(0, i + 1); // u는 처음부터 현재 루프까지의 문자열이 되고,
      v = p.slice(i + 1); // v 는 현재루프 다음부터  문자열의 마지막까지가 된다.
      break; // 반복문 종료
    }
  }
  if (checked) {
    // 3-1 조건 : u가 올바른 괄호 문자열이라면,
    answer += u; // u는 정답 변수에 더해주고,
    answer += solution(v); // v를 재귀적으로 다시 실행
  } else {
    // 4 조건 : u가 올바른 괄호 문자열이 아니라면,
    answer += "("; // 4-1 조건 : 빈 문자열에 첫 번째 문자로 "("를 붙인다.
    answer += solution(v); //4-2 조건 : v에 대해 다시 재귀적으로 함수 호출
    answer += ")"; //4-3 조건 : ")"를 다시 붙인다.
    for (let i = 1; i < u.length - 1; i++) {
      // 4-4 조건 : u의 첫 번째와 마지막 문자를 제거하고,
      if (u[i] === "(") {
        // 괄호의 방향을 반대로 해준다.
        answer += ")";
      } else {
        answer += "(";
      }
    }
  }
  return answer; //4-5 조건 : 생성된 정답 문자열 리턴
}
