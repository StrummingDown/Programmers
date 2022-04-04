// 문제링크
// https://programmers.co.kr/learn/courses/30/lessons/12926

// function solution(s, n) {
//   var answer = "";
//   let alpha = "abcdefghijklmnopqrstuvwxyz";
//   let alpha_1 = alpha.toUpperCase();
//   console.log(alpha_1);
//   for (let idx = 0; idx < s.length; idx++) {
//     if (s[idx] === " ") {
//       answer += s[idx];
//     } else {
//       let change = alpha.indexOf(s[idx]) + n;
//       let change_1 = alpha_1.indexOf(s[idx]) + n;

//       if (change !== 0) {
//         console.log("소문자");
//         answer += alpha[change];
//       } else if (change_1 !== 0) {
//         console.log("대문자");
//         answer += alpha_1[change_1];
//       }
//     }
//   }
//   return answer;
// }

function solution(s, n) {
  var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; // 대문자 알파벳
  var lower = "abcdefghijklmnopqrstuvwxyz"; // 소문자 알파벳
  var answer = ""; // n만큼 움직인 알파벳을 담아줄 정답 문자열

  for (var i = 0; i < s.length; i++) {
    // 입력받은 알파벳 길이만큼 순회
    var text = s[i]; // 인덱스로 차례차례 접근
    if (text == " ") {
      // 공백을 경우,
      answer += " "; // 그대로 정답 문자열에 더해주고,
      continue; // 밑의 실행문은 스킵한다.
    }
    var textArr = upper.includes(text) ? upper : lower; // 대문자인지 소문자인지 판단
    var index = textArr.indexOf(text) + n; // n만큼 움직인 인데스를 구해준다.
    if (index >= textArr.length) index -= textArr.length; // 인덱스가 Z(25)를 초과한다면, 인덱스에서 전체 알파벳 길이를 뺸다.
    answer += textArr[index]; // 정답 문자열에 n만큼 움직인 알파벳 추가
  }
  return answer; // 정답 문자열 리턴
}
console.log(solution("z", 1));
