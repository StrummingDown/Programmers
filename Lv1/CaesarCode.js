// 문제링크
// https://programmers.co.kr/learn/courses/30/lessons/12926

function solution(s, n) {
  var answer = "";
  let alpha = "abcdefghijklmnopqrstuvwxyz";
  let alpha_1 = alpha.toUpperCase();
  console.log(alpha_1);
  for (let idx = 0; idx < s.length; idx++) {
    if (s[idx] === " ") {
      answer += s[idx];
    } else {
      let change = alpha.indexOf(s[idx]) + n;
      let change_1 = alpha_1.indexOf(s[idx]) + n;

      if (change !== 0) {
        console.log("소문자");
        answer += alpha[change];
      } else if (change_1 !== 0) {
        console.log("대문자");
        answer += alpha_1[change_1];
      }
    }
  }
  return answer;
}
console.log(solution("z", 1));
